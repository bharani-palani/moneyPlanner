<?php
defined('BASEPATH') or exit('No direct script access allowed');
include('./vendor/autoload.php');

use Razorpay\Api\Api;
use Razorpay\Api\Errors;

class razorpay extends CI_Controller
{
    public $razorPayTestApi;
    public $razorPayLiveApi;
    public $razorPayApi;
    public function __construct()
    {
        parent::__construct();
        $this->load->library('../controllers/auth');
        $this->razorPayTestApi = new Api($this->config->item('razorpay_test_key_id'), $this->config->item('razorpay_test_key_secret'));
        $this->razorPayLiveApi = new Api($this->config->item('razorpay_live_key_id'), $this->config->item('razorpay_live_key_secret'));
        $this->razorPayApi =
            $_ENV['APP_ENV'] === 'production' ?
            new Api($this->config->item('razorpay_live_key_id'), $this->config->item('razorpay_live_key_secret')) :
            new Api($this->config->item('razorpay_test_key_id'), $this->config->item('razorpay_test_key_secret'));
    }
    public function throwException($e)
    {
        $errors = [
            'CODE' => $e->getCode(),
            'MESSAGE' => $e->getMessage(),
            'FILE' => $e->getFile(),
            'LINE' => $e->getLine(),
            'STRING_TRACE' => $e->getTraceAsString(),
        ];
        $this->auth->response(['response' => $errors], [], 500);
    }
    public function createSubscription()
    {
        $custId = $this->input->post('custId');
        $planId = $this->input->post('planId');
        $count = $this->input->post('count');
        try {
            $subscription = $this->razorPayApi->subscription->create([
                'plan_id' => $planId,
                'total_count' => $count,
                'customer_notify' => 1,
                'customer_id' => $custId,
            ])->toArray();
            $this->auth->response(['response' => $subscription], [], 200);
        } catch (Errors\Error $e) {
            $this->throwException($e);
        }
    }
    public function onPayment()
    {
        $paymentId = $this->input->post('paymentId');
        try {
            $payment = $this->razorPayApi->payment->fetch($paymentId)->toArray();
            $this->auth->response(['response' => $payment], [], 200);
        } catch (Errors\Error $e) {
            $this->throwException($e);
        }
    }
    public function onPostPaymentAutomation()
    {
        $post = file_get_contents('php://input');
        // $post = $this->input->post('request'); // for checking in localhost
        $data = json_decode($post, true);
        $headers = getallheaders();
        $headers = json_encode($headers);
        $headerData = json_decode($headers, true);
        $eventArray = ["subscription.activated", "subscription.charged"];
        if (isset($data['event']) && !empty($data['event']) && in_array($data['event'], $eventArray)) {
            // validate signature
            if (isset($headerData['X-Razorpay-Signature'])) {
                try {
                    $this->razorPayApi->utility->verifyWebhookSignature(
                        $post,
                        $headerData['X-Razorpay-Signature'],
                        $this->config->item('razorpay_webhook_secret')
                    );
                } catch (Errors\SignatureVerificationError $e) {
                    // error handler for invalid signature
                    $this->throwException($e);
                }
            }
            $subscription = $data['payload']['subscription']['entity'];
            $payment = $data['payload']['payment']['entity'];

            if ($subscription['status'] === 'active') {
                $insert = array(
                    'orderId' => $payment['order_id'],
                    'paymentId' => $payment['id'],
                    'customerId' => $subscription['customer_id'],
                    'subscriptionId' => $subscription['id'],
                    'invoiceId' => $payment['invoice_id'],
                    'commissionFee' => $payment['fee'] / 100,
                    'discountAmount' => $payment['offer']['discounted_amount'] / 100,
                    'planId' => $subscription['plan_id'],
                    'taxAmount' => 0,
                    'total' => $payment['amount'] / 100,
                    'currency' => $payment['currency'],
                    'customerName' => $payment['card']['name'],
                    'customerEmail' => $payment['email'],
                    'cycleStart' => date("Y-m-d H:i:s", $subscription['current_start']),
                    'cycleEnd' => date("Y-m-d H:i:s", $subscription['current_end']),
                    'paymentStatus' => $payment['status'],
                    'rest' => $post,
                    'paidAt' => date("Y-m-d H:i:s", $payment['created_at'])
                );

                $expiryDate = date("Y-m-d H:i:s", $subscription['current_end']);
                // insert / update orders
                $this->db->trans_start();
                $query = $this->db->get_where('orders', ['orderId' => $payment['order_id']]);
                if ($query->num_rows() > 0) {
                    $this->db->where('orderId', $payment['order_id']);
                    $this->db->update('orders', array_slice($insert, 1));
                } else {
                    $this->db->insert('orders', $insert);
                }

                // update new expiry time and plan for new subscription if amount paid
                if ($payment['status'] === 'captured') {
                    $column = $_ENV['APP_ENV'] === 'development' ? "priceRazorPayTestId" : "priceRazorPayLiveId";
                    $rpCustId = $_ENV['APP_ENV'] === "production" ? 'razorPayLiveCustomerId' : 'razorPayTestCustomerId';
                    $query = $this->db->get_where('prices', [$column => $subscription['plan_id']]);
                    $plan = $query->row();
                    $update = [
                        'expiryDateTime' => $expiryDate,
                        'isActive' => 1,
                        'appsPlanId' => $plan->pricePlanId
                    ];
                    $this->db->where($rpCustId, $data['payload']['subscription']['entity']['customer_id']);
                    $this->db->update('apps', $update);
                }
                $this->db->trans_complete();
                if ($this->db->trans_status()) {
                    $this->auth->response(['response' => true], [], 200);
                }
            }
        }
    }
    public function isExpiryUpdated($post)
    {
        // check if expiry date, set / updated by Razor pay, is ahead or equal to transaction date
        $rpCustId = $_ENV['APP_ENV'] === "production" ? 'razorPayLiveCustomerId' : 'razorPayTestCustomerId';
        $query = $this->db
            ->where([$rpCustId => $post['customerId'], 'expiryDateTime !=' => $post['expiryDate']])
            ->where('expiryDateTime >=', $post['expiryDate'])
            ->get('apps');
        return $query->num_rows() > 0;
    }

    public function isOrderPaid()
    {
        $validate = $this->auth->validateAll();
        if ($validate === 2) {
            $this->auth->invalidTokenResponse();
        }
        if ($validate === 3) {
            $this->auth->invalidDomainResponse();
        }
        if ($validate === 1) {
            $post = [
                'expiryDate' => $this->input->post('expiryDate'),
                'customerId' => $this->input->post('customerId'),
            ];
            $data['response'] = $this->isExpiryUpdated($post);
            $this->auth->response($data, [], 200);
        }
    }
    public function test()
    {
        $this->auth->response(['response' => $_ENV], [], 200);
        // try {
        //     $this->auth->response(['response' => $_ENV], [], 200);
        // } catch (Exception $e) {
        //     $this->auth->response(['response' => $e], [], 500);
        // }
    }
}
