import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import AppContext from "../../contexts/AppContext";
import { UserContext } from "../../contexts/UserContext";
import ConfirmationModal from "../configuration/Gallery/ConfirmationModal";
import AdminLogin from "./adminLogin";
import { SignedUrl } from "../configuration/Gallery/SignedUrl";
// import GoogleLogin from "react-google-login";
// import CryptoJS from "crypto-js";
// import { encryptSaltKey } from "../configuration/crypt";
// import FacebookLogin from "react-facebook-login";
import { FormattedMessage, useIntl } from "react-intl";
import apiInstance from "../../services/apiServices";
import history from "../../history";

const LoginUser = props => {
  const { onLogAction } = props;
  const intl = useIntl();
  const userContext = useContext(UserContext);
  const [appData] = useContext(AppContext);
  const [animateType, setAnimateType] = useState("");
  const [openModal, setOpenModal] = useState(false); // change to false
  /*
    Bounce types available @
    https://github.com/animate-css/animate.css/tree/a8d92e585b1b302f7749809c3308d5e381f9cb17
    */

  const handleLoginResponse = response => {
    const data = JSON.stringify(response);
    localStorage.setItem("userData", data);
    userContext.addUserData(JSON.parse(data));
    userContext.updateUserData("type", response.type);
    onLogAction(response);
    saveLog(response);
    setAnimateType("slideInRight");
    history.push("/");
  };

  const saveLog = response => {
    let spread = {};
    fetch("https://geolocation-db.com/json/")
      .then(response => {
        return response.json();
      })
      .then(res => {
        spread = {
          ...response,
          ...{ time: new Date().toString(), ip: res.IPv4 },
        };
      })
      .catch(() => {
        spread = {
          ...response,
          ...{ time: new Date().toString(), ip: "127.0.0.1" },
        };
      })
      .finally(() => {
        const formdata = new FormData();
        formdata.append("log", JSON.stringify(spread));
        apiInstance.post("/saveLog", formdata);
      });
  };

  const onLogout = () => {
    userContext.removeUserData([
      "email",
      "imageUrl",
      "name",
      "rest",
      "source",
      "userId",
    ]);
    userContext.updateUserData("type", "public");
    localStorage.removeItem("userData");
    onLogAction({});
    setOpenModal(false);
    history.push("/");
  };

  const onLogoutInit = id => {
    setOpenModal(true);
  };

  return (
    <React.Fragment>
      {userContext.openAppLoginModal && (
        <AdminLogin
          show={userContext.openAppLoginModal}
          size='sm'
          animation={false}
          style={{ zIndex: 9999 }}
          onClose={() => {
            userContext.setOpenAppLoginModal(false);
          }}
          onSuccess={data => {
            const res = {
              userId: data.userId,
              source: "self",
              type: data.type,
              email: data.email,
              name: data.name,
              imageUrl: data.imageUrl,
              rest: {},
            };
            handleLoginResponse(res);
          }}
        />
      )}
      <ConfirmationModal
        show={openModal}
        confirmationstring={intl.formatMessage({
          id: "sureToLogout",
          defaultMessage: "sureToLogout",
        })}
        handleHide={() => {
          setOpenModal(false);
        }}
        handleYes={() => onLogout()}
        size='md'
        animation={false}
      />
      {userContext.userData.userId ? (
        <div
          className={`d-print-none animate__animated animate__${animateType}`}
        >
          <div className='options welcomeText'>
            <FormattedMessage id='welcome' defaultMessage='welcome' />
          </div>
          <div className='options'>
            <div className='welcomeText pb-10'>{userContext.userData.name}</div>
          </div>
          <div className='options pt-3'>
            {["facebook", "google"].includes(userContext.userData.source) &&
              userContext.userData.imageUrl && (
                <img
                  className='userImage'
                  alt='userImage'
                  src={
                    userContext.userData.imageUrl ||
                    require("../../images/spinner-1.svg")
                  }
                />
              )}
            {userContext.userData.source === "self" &&
              userContext.userData.imageUrl && (
                <SignedUrl
                  mykey='userImage'
                  type='image'
                  appData={appData}
                  unsignedUrl={userContext.userData.imageUrl}
                  className='userImage'
                />
              )}
            <i
              onClick={onLogoutInit}
              title={intl.formatMessage({
                id: "logout",
                defaultMessage: "logout",
              })}
              className='fa fa-sign-out text-secondary cursor-pointer fs-4'
            />
          </div>
        </div>
      ) : (
        <div className='options'>
          {/*
            Note: 
            Maintain the above style for FB, instagram or any social login
            const res = {
              userId: data.profileObj.googleId,
              type: appData.google_id === data.profileObj.googleId ? "superAdmin" : "public", // deffered no logic
              type: "public",
              source: "google",
              email: data.profileObj.email,
              name: data.profileObj.name,
              imageUrl: data.profileObj.imageUrl,			
              rest: data
            }
            Plese dont change data structure. It will impact expected results.
          */}
          {/* <div className='google'>
            <GoogleLogin
              clientId={CryptoJS.AES.decrypt(
                appData.google_login_auth_token,
                appData[encryptSaltKey],
              ).toString(CryptoJS.enc.Utf8)}
              buttonText=''
              render={renderProps => (
                <i
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className='fa fa-google text-secondary cursor-pointer fs-4'
                />
              )}
              onSuccess={data => {
                const res = {
                  userId: data.profileObj.googleId,
                  type: "public",
                  source: "google",
                  email: data.profileObj.email,
                  name: data.profileObj.name,
                  imageUrl: data.profileObj.imageUrl,
                  rest: data,
                };
                handleLoginResponse(res);
              }}
              cookiePolicy={"single_host_origin"}
            />
          </div>
          <FacebookLogin
            appId={CryptoJS.AES.decrypt(
              appData.facebook_app_id,
              appData[encryptSaltKey],
            ).toString(CryptoJS.enc.Utf8)}
            fields='name,email,picture'
            isMobile={false}
            redirectUri={appData.web}
            callback={data => {
              if (data.status !== "unknown") {
                const res = {
                  userId: data.id,
                  type: "public",
                  source: "facebook",
                  email: data.email,
                  name: data.name,
                  imageUrl: data.picture.data.url,
                  rest: data,
                };
                handleLoginResponse(res);
              }
            }}
            cssClass='facebook-container'
            icon={
              <i
                className='fa fa-facebook text-secondary cursor-pointer fs-5'
                title='Sign in with Facebook'
              />
            }
            textButton=''
          /> */}
          <div className='d-flex align-items-center cursor-pointer'>
            <span onClick={() => userContext.setOpenAppLoginModal(true)}>
              <FormattedMessage id='signIn' defaultMessage='signIn' />
            </span>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

LoginUser.propTypes = {
  toggleSideBar: PropTypes.bool,
  userData: PropTypes.object,
};
LoginUser.defaultProps = {};

export default LoginUser;
