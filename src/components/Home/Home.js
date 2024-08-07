import React, { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Row, Col } from "react-bootstrap";
import Image from "../../images/banking.png";
import { useIntl } from "react-intl";
// import apiInstance from "../../services/apiServices";
import LoginUser from "../../components/GlobalHeader/loginUser";

const Home = props => {
  const globalContext = useContext(GlobalContext);
  const intl = useIntl();
  const [, setLogger] = useState(
    JSON.parse(localStorage.getItem("userData")) || {},
  );

  // const signupInstance = () => {
  // todo: signup
  //   const formdata = new FormData();
  //   return apiInstance.post("/signup", formdata);
  // };

  const onLogAction = b => {
    setLogger(b);
  };

  return (
    <div className='container'>
      <>
        <div className='homeScreen'>
          <Row className={`justify-content-md-center mainForm`}>
            <Col lg={6} className={``}>
              <img
                src={Image}
                alt='brand'
                className='img-fluid helpImage w-100'
              />
            </Col>
            <Col lg={6} className={`p-3 position-relative formWrapper`}>
              <>
                <LoginUser onLogAction={d => onLogAction(d)} />
                <Row className='position-absolute bottom-0 text-dark small text-center w-100 align-items-center'>
                  <Col sm={12} className=''>
                    <button
                      onClick={() => false}
                      className='btn btn-lg btn-bni w-100 rounded-0'
                    >
                      Signup
                    </button>
                  </Col>
                  <Col sm={6} className='p-2'>
                    <div>
                      <a
                        href={globalContext.privacyPolicyLink}
                        target='_blank'
                        className='btn btn-sm btn-link'
                        rel='noreferrer'
                      >
                        {intl.formatMessage({
                          id: "privacyPolicy",
                          defaultMessage: "privacyPolicy",
                        })}
                      </a>
                    </div>
                  </Col>
                  <Col sm={6} className='p-2'>
                    <div>
                      <a
                        href={globalContext.termsOfServiceLink}
                        target='_blank'
                        className='btn btn-sm btn-link'
                        rel='noreferrer'
                      >
                        {intl.formatMessage({
                          id: "termsAndConditions",
                          defaultMessage: "termsAndConditions",
                        })}
                      </a>
                    </div>
                  </Col>
                </Row>
              </>
            </Col>
          </Row>
        </div>
      </>
    </div>
  );
};

export default Home;
