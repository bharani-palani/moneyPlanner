import React, { useContext, Suspense, useState, useEffect } from "react";
import {
  Row,
  Col,
  InputGroup,
  Button,
  Dropdown,
  Form,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";
import { useIntl, FormattedMessage } from "react-intl";
import WorkbookContext from "./WorkbookContext";
import * as cList from "../shared/D3";
import { v4 as uuidv4 } from "uuid";
import { UserContext } from "../../contexts/UserContext";
import apiInstance from "../../services/apiServices";

const ChartContainer = () => {
  const intl = useIntl();
  const workbookContext = useContext(WorkbookContext);
  const userContext = useContext(UserContext);
  const chartList = Object.keys(cList).reduce(
    (obj, item) => ({ ...obj, [item]: cList[item] }),
    {},
  );
  const {
    theme,
    activeSheet,
    setActiveSheet,
    defaultSheet,
    sheets,
    setSheets,
    activeChart,
    setActiveChart,
    workbookRef,
    file,
    setFile,
    saveLoading,
    setSaveLoading,
    savedWorkbooks,
    setSavedWorkbooks,
  } = workbookContext;
  const [ruler, setRuler] = useState(false);
  const [zoom, setZoom] = useState(0);

  const fetchWorkbooks = () => {
    setSaveLoading(true);
    const formdata = new FormData();
    formdata.append("appId", userContext.userConfig.appId);
    apiInstance
      .post("workbook/getSavedWorkbooks", formdata)
      .then(({ data }) => {
        setSavedWorkbooks(data.response);
      })
      .catch(e =>
        userContext.renderToast({
          type: "error",
          icon: "fa fa-times-circle",
          position: "bottom-center",
          message: intl.formatMessage({
            id: "unableToReachServer",
            defaultMessage: "unableToReachServer",
          }),
        }),
      )
      .finally(() => setSaveLoading(false));
  };

  useEffect(() => {
    fetchWorkbooks();
  }, []);

  useEffect(() => {
    const z = sheets.filter(f => f.id === activeSheet)[0]?.zoom;
    setZoom(z);
  }, [sheets, activeSheet]);

  const selectedSheetCharts = sheets.filter(f => f.id === activeSheet)[0]
    ?.charts;

  const onDropHandle = e => {
    const data = JSON.parse(e.dataTransfer.getData("workbookDragData"));
    const chartId = uuidv4();
    const updatedSheet = sheets.map(sheet => {
      if (sheet.id === activeSheet) {
        sheet.charts = [
          ...sheet.charts,
          { ...data.chart, id: chartId, x: e.clientX, y: e.clientY },
        ];
      }
      return sheet;
    });
    setSheets(updatedSheet);
    setActiveChart(chartId);
  };

  const Loader = () => (
    <div className='position-relative h-100'>
      <div className='position-absolute w-100 h-100 d-flex align-items-center justify-content-center'>
        <i className='fa fa-circle-o-notch fa-5x fa-spin icon-bni' />
      </div>
    </div>
  );

  const deleteChart = id => {
    const newSheet = sheets.map(sheet => {
      if (sheet.id === activeSheet) {
        sheet.charts = sheet.charts.filter(f => f.id !== id);
      }
      return sheet;
    });
    setSheets(newSheet);
  };

  const fullScreen = elem => {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
  };

  const onSaveClick = () => {
    setSaveLoading(true);
    const formdata = new FormData();
    const newFile = {
      ...file,
      sheets,
    };
    formdata.append("fileData", JSON.stringify(newFile));
    apiInstance
      .post("workbook/saveWorkbook", formdata)
      .then(({ data }) => {
        if (data.response) {
          setFile(prev => ({
            ...prev,
            id: data.response,
          }));
          fetchWorkbooks();
          userContext.renderToast({
            position: "bottom-center",
            message: intl.formatMessage({
              id: "transactionSavedSuccessfully",
              defaultMessage: "transactionSavedSuccessfully",
            }),
          });
        } else {
          userContext.renderToast({
            position: "bottom-center",
            type: "error",
            icon: "fa fa-times-circle",
            message: intl.formatMessage({
              id: "noFormChangeFound",
              defaultMessage: "noFormChangeFound",
            }),
          });
        }
      })
      .catch(e => {
        userContext.renderToast({
          type: "error",
          icon: "fa fa-times-circle",
          position: "bottom-center",
          message: intl.formatMessage({
            id: "somethingWentWrong",
            defaultMessage: "somethingWentWrong",
          }),
        });
      })
      .finally(() => setSaveLoading(false));
  };

  const onClickWorkbook = id => {
    const formdata = new FormData();
    formdata.append("id", id);
    formdata.append("appId", userContext.userConfig.appId);
    apiInstance
      .post("workbook/fetchWorkbookById", formdata)
      .then(({ data }) => {
        const wbArray = JSON.parse(data.response.wb_object);
        setSheets(wbArray);
        setFile(prev => ({
          ...prev,
          id: data.response.wb_id,
          name: data.response.wb_name,
        }));
        setTimeout(() => {
          setActiveSheet(wbArray[0]?.id);
          setActiveChart(wbArray[0]?.charts[0]?.id);
        }, 100);
      })
      .catch(() => {});
  };

  const confirmDeletePopover = () => (
    <Popover style={{ zIndex: 9999 }}>
      <Popover.Header as='div' className={`bni-bg bni-text py-1 px-2`}>
        <small>Confirm Delete ?</small>
      </Popover.Header>
      <Popover.Body
        style={{ columnGap: "5px" }}
        className='p-1 d-flex align-items-center justify-content-between'
      >
        <button
          onClick={() => onDeleteWorkbook()}
          className={`btn btn-sm btn-danger w-100 py-0`}
        >
          Yes
        </button>
        <button
          onClick={() => document.body.click()}
          className={`btn btn-sm btn-secondary w-100 py-0`}
        >
          No
        </button>
      </Popover.Body>
    </Popover>
  );

  const wbInfoPopover = () => (
    <Popover style={{ zIndex: 9999 }}>
      <Popover.Header as='div' className={`bni-bg bni-text py-1 px-2`}>
        <small>Workbook Info</small>
      </Popover.Header>
      <Popover.Body className='p-1' style={{ width: "170px" }}>
        <Row>
          <Col xs={6}>
            <b>Sheets</b>
          </Col>
          <Col xs={6}>{sheets.length}</Col>
          <Col xs={6}>
            <b>Charts</b>
          </Col>
          <Col xs={6}>
            {sheets.map(s => s.charts.length).reduce((a, b) => a + b, 0)}
          </Col>
          <Col xs={6}>
            <b>Size</b>
          </Col>
          <Col xs={6}>
            {(JSON.stringify(sheets).length / 1024).toFixed(2)} Kb
          </Col>
        </Row>
      </Popover.Body>
    </Popover>
  );

  const onDeleteWorkbook = () => {
    setSaveLoading(true);
    const formdata = new FormData();
    formdata.append("id", file.id);
    formdata.append("appId", userContext.userConfig.appId);
    apiInstance
      .post("workbook/deleteWorkbook", formdata)
      .then(({ data }) => {
        if (data.response) {
          userContext.renderToast({
            position: "bottom-center",
            message: intl.formatMessage({
              id: "workbookSuccessfullyDeleted",
              defaultMessage: "workbookSuccessfullyDeleted",
            }),
          });
          fetchWorkbooks();
          onNewWorkbook();
        } else {
          userContext.renderToast({
            position: "bottom-center",
            type: "error",
            icon: "fa fa-times-circle",
            message: intl.formatMessage({
              id: "queryDeleteFailed",
              defaultMessage: "queryDeleteFailed",
            }),
          });
        }
      })
      .catch(e => {
        userContext.renderToast({
          type: "error",
          icon: "fa fa-times-circle",
          message: intl.formatMessage({
            id: "somethingWentWrong",
            defaultMessage: "somethingWentWrong",
          }),
        });
      })
      .finally(() => {
        setSaveLoading(false);
        document.body.click();
      });
  };

  const onNewWorkbook = () => {
    setSheets(defaultSheet);
    setTimeout(() => {
      setActiveSheet(defaultSheet[0]?.id);
      setFile(prev => ({
        ...prev,
        id: null,
        name: "",
      }));
    }, 100);
  };

  return (
    <Suspense fallback={<Loader />}>
      <div className=''>
        <div className=''>
          <Row>
            <Col className={`${activeChart ? "pe-5" : ""}`}>
              <InputGroup className={`bg-${theme} rounded`} size='sm'>
                <Button
                  variant='outline-secondary'
                  className='bni-border bni-border-all bni-border-all-1'
                  onClick={() => onNewWorkbook()}
                >
                  <i className='fa fa-plus icon-bni' />
                </Button>

                <Dropdown>
                  <Dropdown.Toggle
                    className={`bni-border bni-border-all bni-border-all-1 btn-bni`}
                  >
                    <FormattedMessage id='workbook' defaultMessage='workbook' />
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    variant={theme}
                    className='overflow-auto'
                    style={{ maxHeight: "300px" }}
                  >
                    {savedWorkbooks?.length > 0 && [
                      savedWorkbooks.map((list, i) => (
                        <Dropdown.Item
                          key={i}
                          as='div'
                          className='d-flex align-items-center px-1 py-0 small cursor-pointer'
                          onClick={() => onClickWorkbook(list.wb_id)}
                        >
                          <i className='fa fa-book icon-bni pe-2' />
                          <div className='small'>{list.wb_name}</div>
                        </Dropdown.Item>
                      )),
                    ]}
                  </Dropdown.Menu>
                </Dropdown>
                <Form.Control
                  className='bni-border bni-border-all bni-border-all-1'
                  placeholder={`${intl.formatMessage({
                    id: "name",
                    defaultMessage: "name",
                  })}`}
                  onChange={e =>
                    setFile(prev => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  value={file.name}
                  maxLength={25}
                />
                {saveLoading && (
                  <Button className='bg-light border-0'>
                    <i className='fa fa-circle-o-notch fa-spin bni-text' />
                  </Button>
                )}
                <Button
                  variant='outline-secondary'
                  className='bni-border bni-border-all bni-border-all-1'
                  onClick={() => onSaveClick()}
                  disabled={
                    !(file.name && sheets.some(s => s.charts.length > 0))
                  }
                >
                  <i className='fa fa-save icon-bni' />
                </Button>
                <OverlayTrigger
                  trigger='click'
                  placement='bottom'
                  overlay={confirmDeletePopover()}
                  rootClose
                >
                  <Button
                    variant='outline-secondary'
                    className={`bni-border bni-border-all bni-border-all-1`}
                    disabled={!file.id}
                  >
                    <i className='fa fa-trash icon-bni' />
                  </Button>
                </OverlayTrigger>
                <Button
                  variant='outline-secondary'
                  className={`bni-border bni-border-all bni-border-all-1 ${
                    ruler ? "bg-secondary" : ""
                  }`}
                  onClick={() => setRuler(!ruler)}
                >
                  <i className='fa fa-th-large icon-bni' />
                </Button>
                <Button
                  variant='outline-secondary'
                  className={`bni-border bni-border-all bni-border-all-1`}
                  onClick={() => fullScreen(workbookRef.current)}
                >
                  <i className='fa fa-expand icon-bni' />
                </Button>
                <OverlayTrigger
                  trigger='click'
                  placement='bottom'
                  overlay={wbInfoPopover()}
                  rootClose
                >
                  <Button
                    variant='outline-secondary'
                    className={`bni-border bni-border-all bni-border-all-1`}
                    style={{ padding: "0 12px" }}
                  >
                    <i className='fa fa-info icon-bni' />
                  </Button>
                </OverlayTrigger>
              </InputGroup>
            </Col>
          </Row>
        </div>
        <div
          style={{ zoom: zoom / 100 }}
          className={`chart-container chart-container-${
            ruler ? theme : ""
          } w-100`}
          onDrop={e => onDropHandle(e)}
          onDragOver={e => {
            e.preventDefault();
          }}
        >
          {selectedSheetCharts?.length > 0 ? (
            selectedSheetCharts.map(s => {
              const Component = chartList[s.chartKey];
              return (
                <div
                  key={s.id}
                  className={`position-relative m-1 pt-4 ${
                    activeChart === s.id ? "highlightedChart" : ""
                  }`}
                  onClick={() => setActiveChart(s.id)}
                >
                  {activeChart === s.id && (
                    <i
                      onClick={() => deleteChart(s.id)}
                      className='fa fa-1x fa-times-circle cursor-pointer m-1 text-danger position-absolute top-0 end-0'
                    />
                  )}
                  <Component {...s.props} />
                </div>
              );
            })
          ) : (
            <div className='d-flex align-items-center h-100 justify-content-center'>
              <span className='text-secondary small'>
                Start dragging charts here
              </span>
            </div>
          )}
        </div>
      </div>
    </Suspense>
  );
};

export default ChartContainer;
