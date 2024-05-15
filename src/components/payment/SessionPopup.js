import React, { useContext, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { BillingContext } from "./Billing";
import apiInstance from "../../services/apiServices";
import { UserContext } from "../../contexts/UserContext";
import { MyAlertContext } from "../../contexts/AlertContext";
import {
  PaymentSuccessHeading,
  PaymentSuccessContent,
  PaymentFailedHeading,
  PaymentFailedContent,
} from "./PaymentAlert";
import history from "../../history";

const SessionPopup = props => {
  const userContext = useContext(UserContext);
  const billingContext = useContext(BillingContext);
  const myAlertContext = useContext(MyAlertContext);
  const { sessionId, showSessionPopup, setShowSessionPopup } = billingContext;

  useEffect(() => {
    if (sessionId) {
      const formdata = new FormData();
      formdata.append("sessionId", sessionId);
      formdata.append("appId", userContext.userConfig.appId);
      apiInstance
        .post("/payments/checkoutSession", formdata)
        .then(res => {
          const { status, newExpiry, sessionId } = res.data.response;
          if (status && newExpiry) {
            userContext.setUserConfig({
              ...userContext.userConfig,
              ...{ expiryDateTime: newExpiry },
            });
            myAlertContext.setConfig({
              show: true,
              className: "alert-success border-0 text-dark",
              type: "success",
              dismissible: true,
              heading: <PaymentSuccessHeading />,
              content: <PaymentSuccessContent />,
            });
            history.push("/billing");
          } else {
            myAlertContext.setConfig({
              show: true,
              className: "alert-danger border-0 text-dark",
              type: "danger",
              dismissible: false,
              heading: <PaymentFailedHeading />,
              content: <PaymentFailedContent sessionId={sessionId} />,
            });
          }
        })
        .catch(e => console.log("bbb", e))
        .finally(() => setShowSessionPopup(false));
    }
  }, [sessionId]);

  return (
    <div className='py-3'>
      <Modal
        show={showSessionPopup}
        onHide={() => setShowSessionPopup(false)}
        style={{ zIndex: 9999 }}
      >
        <Modal.Header closeButton>
          <Modal.Title className='d-flex align-items-center'>
            <i className='px-2 fa-1x fa fa-thumbs-up' />
            <span>Payment successfull</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          className={`rounded-bottom ${
            userContext.userData.theme === "dark"
              ? "bg-dark text-white"
              : "bg-white text-dark"
          }`}
        >
          <div className='text-center'>
            <div>
              Please wait, do not refresh this page or click back button.
            </div>
            <div className='p-5'>
              <i className='fa fa-circle-o-notch fa-spin fa-5x fa-fw' />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SessionPopup;
