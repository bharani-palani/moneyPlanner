import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Accordion, Card, useAccordionButton } from 'react-bootstrap';
import BackendCore from '../../components/configuration/backend/BackendCore';
import { crudFormArray } from '../configuration/backendTableConfig';
import apiInstance from '../../services/apiServices';
import Loader from 'react-loader-spinner';
import helpers from '../../helpers';
import { UserContext } from '../../contexts/UserContext';

const CreateModule = () => {
  const [collapse, setCollapse] = useState('');
  const [dbData, setDbData] = useState([]);
  const userContext = useContext(UserContext);

  const getBackendAjax = (Table, TableRows) => {
    const formdata = new FormData();
    formdata.append('TableRows', TableRows);
    formdata.append('Table', Table);
    return apiInstance.post('/account_planner/getAccountPlanner', formdata);
  };

  const onToggle = async t => {
    setDbData([]);
    const a = getBackendAjax(t.Table, t.TableRows);
    Promise.all([a]).then(async r => {
      setDbData(r[0].data.response);
      setCollapse(t.label);
    });
  };

  const loaderComp = () => {
    return (
      <div className="relativeSpinner">
        <Loader
          type={helpers.loadRandomSpinnerIcon()}
          color={document.documentElement.style.getPropertyValue(
            '--app-theme-bg-color'
          )}
          height={100}
          width={100}
        />
      </div>
    );
  };
  const onPostApi = response => {
    const { status, data } = response;
    if (status) {
      response && data && data.response
        ? userContext.renderToast({ message: 'Transaction saved successfully' })
        : userContext.renderToast({
            type: 'error',
            icon: 'fa fa-times-circle',
            message: 'Oops.. No form change found',
          });
    } else {
      userContext.renderToast({
        type: 'error',
        icon: 'fa fa-times-circle',
        message: 'Unable to reach server. Please try again later',
      });
    }
  };
  const crudFormMassageArray = crudFormArray.map(crud => {
    const obj = {
      footer: {
        total: {
          locale: 'en-IN',
          currency: 'INR',
          maxDecimal: 2,
        },
        pagination: {
          currentPage: 'last',
          recordsPerPage: 10,
          maxPagesToShow: 5,
        },
      },
    };
    crud.config = obj;
    return crud;
  });

  function CustomToggle({ children, eventKey, object }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      onToggle(object)
    );

    return (
      <button
        type="button"
        className={`col-12 text-start btn ${
          userContext.userData.theme === 'dark' ? 'btn-dark' : 'btn-white'
        }`}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

  return (
    <div className="settings">
      <Accordion bsPrefix="util" defaultActiveKey={1} className="">
        {crudFormMassageArray
          .sort((a, b) => a.id - b.id)
          .map((t, i) => (
            <Card
              key={t.id}
              className={`my-2 ${
                userContext.userData.theme === 'dark'
                  ? 'bg-dark text-light'
                  : 'bg-light text-dark'
              }`}
            >
              <Card.Header className="row m-0">
                <CustomToggle eventKey={t.id} object={t}>
                  {t.label}
                </CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey={t.id}>
                <Card.Body>
                  {t.label === collapse && dbData.length > 0 ? (
                    <div className="pt-10">
                      {dbData.length > 0 ? (
                        <BackendCore
                          key={i}
                          config={t.config}
                          Table={t.Table}
                          TableRows={t.TableRows}
                          TableAliasRows={t.TableAliasRows}
                          showTotal={t.showTotal}
                          rowElements={t.rowElements}
                          dbData={dbData}
                          postApiUrl="/account_planner/postAccountPlanner"
                          onPostApi={response => onPostApi(response)}
                          onReFetchData={() => onToggle(t)}
                          cellWidth="12rem"
                        />
                      ) : (
                        loaderComp()
                      )}
                    </div>
                  ) : (
                    loaderComp()
                  )}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
      </Accordion>
    </div>
  );
};

CreateModule.propTypes = {
  property: PropTypes.string,
};
CreateModule.defaultProps = {
  property: 'String name',
};

export default CreateModule;
