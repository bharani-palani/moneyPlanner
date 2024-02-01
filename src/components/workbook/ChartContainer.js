import React, { useContext, Suspense } from "react";
import { Row, Col, InputGroup, Button, Dropdown, Form } from "react-bootstrap";
import { useIntl, FormattedMessage } from "react-intl";
import WorkbookContext from "./WorkbookContext";
import * as cList from "../shared/D3";
import { v4 as uuidv4 } from "uuid";

const ChartContainer = () => {
  const intl = useIntl();
  const workbookContext = useContext(WorkbookContext);
  const chartList = Object.keys(cList).reduce(
    (obj, item) => ({ ...obj, [item]: cList[item] }),
    {},
  );
  const {
    theme,
    zoom,
    activeSheet,
    sheets,
    setSheets,
    activeChart,
    setActiveChart,
  } = workbookContext;

  const selectedSheetCharts = sheets.filter(f => f.id === activeSheet)[0]
    ?.charts;

  const onDropHandle = e => {
    const data = JSON.parse(e.dataTransfer.getData("workbookDragData"));
    const chartId = uuidv4();
    const updatedSheet = sheets.map(sheet =>
      sheet.id === activeSheet
        ? {
            ...sheet,
            charts: [
              ...sheet.charts,
              { ...data?.chart, id: chartId, x: e.clientX, y: e.clientY },
            ],
          }
        : sheet,
    );
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

  return (
    <Suspense fallback={<Loader />}>
      <div className='position-relative'>
        <div
          style={{ zoom: zoom / 100 }}
          className={`chart-container chart-container-${theme} w-100`}
          onDrop={e => onDropHandle(e)}
          onDragOver={e => {
            e.preventDefault();
          }}
        >
          {selectedSheetCharts?.length > 0 &&
            selectedSheetCharts.map(s => {
              const Component = chartList[s.chartKey];
              return (
                <div
                  key={s.id}
                  className='position-relative m-2'
                  onClick={() => setActiveChart(s.id)}
                  style={
                    activeChart === s.id
                      ? {
                          display: "inline-block",
                          boxShadow: "0px 0 10px #000",
                          borderRadius: "5px",
                          padding: "15px 5px",
                        }
                      : {}
                  }
                >
                  {activeChart === s.id && (
                    <i
                      onClick={() => deleteChart(s.id)}
                      className='fa fa-times-circle cursor-pointer m-2 text-danger position-absolute top-0 end-0'
                    />
                  )}
                  <Component {...s.props} />
                </div>
              );
            })}
          <div className='position-absolute w-100 top-0 start-0'>
            <Row>
              <Col md={6}>
                <InputGroup className={`p-1 bg-${theme} rounded`} size='sm'>
                  <Dropdown>
                    <Dropdown.Toggle
                      className={`bni-border bni-border-all bni-border-all-1 btn-bni`}
                    >
                      <FormattedMessage
                        id='workbook'
                        defaultMessage='workbook'
                      />
                    </Dropdown.Toggle>
                    <Dropdown.Menu variant={theme}>
                      <Dropdown.Item href='#'>Menu 1</Dropdown.Item>
                      <Dropdown.Item href='#'>Menu 2</Dropdown.Item>
                      <Dropdown.Item href='#'>Menu 3</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href='#'>Menu 4</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Form.Control
                    className='bni-border bni-border-all bni-border-all-1'
                    placeholder={`${intl.formatMessage({
                      id: "workbook",
                      defaultMessage: "workbook",
                    })} ${intl.formatMessage({
                      id: "fileName",
                      defaultMessage: "fileName",
                    })}`}
                  />
                  <Button
                    variant='outline-secondary'
                    className='bni-border bni-border-all bni-border-all-1'
                  >
                    <i className='fa fa-save icon-bni' />
                  </Button>
                </InputGroup>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default ChartContainer;
