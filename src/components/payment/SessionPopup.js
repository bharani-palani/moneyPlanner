import React, { useContext, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { BillingContext } from "./Billing";
import apiInstance from "../../services/apiServices";
import { UserContext } from "../../contexts/UserContext";
import { MyAlertContext } from "../../contexts/AlertContext";
import { PaymentSuccessHeading, PaymentSuccessContent } from "./PaymentAlert";
import { FormattedMessage } from "react-intl";

const SessionPopup = props => {
  const userContext = useContext(UserContext);
  const billingContext = useContext(BillingContext);
  const myAlertContext = useContext(MyAlertContext);
  const { showSessionPopup, setShowSessionPopup, summary } = billingContext;

  const getUserConfig = async appId => {
    const formdata = new FormData();
    formdata.append("appId", appId);
    return await apiInstance.post("/getUserConfig", formdata);
  };

  useEffect(() => {
    // update your new plan details
    getUserConfig(userContext.userConfig.appId)
      .then(res => {
        const {
          data: { response },
        } = res;
        userContext.setUserConfig(prev => ({
          ...prev,
          ...response[0],
        }));
        myAlertContext.setConfig({
          show: true,
          className: "alert-success border-0 text-dark",
          type: "success",
          dismissible: true,
          heading: <PaymentSuccessHeading />,
          content: <PaymentSuccessContent />,
        });
      })
      .catch(err => console.error("Unable to fetch user config"))
      .finally(() => setShowSessionPopup(false));
  }, [summary]);

  return (
    <Modal
      show={showSessionPopup}
      onHide={() => setShowSessionPopup(false)}
      style={{ zIndex: 10000 }}
    >
      <Modal.Header closeButton>
        <Modal.Title className='d-flex align-items-center'>
          <i className='px-2 fa-1x fa fa-thumbs-up' />
          <span>
            <FormattedMessage id='pleaseWait' defaultMessage='pleaseWait' />
          </span>
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
            <FormattedMessage id='doNotRefresh' defaultMessage='doNotRefresh' />
          </div>
          <div className='p-5'>
            <i className='fa fa-circle-o-notch fa-spin fa-5x fa-fw' />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SessionPopup;
