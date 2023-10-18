import React, { useState } from "react";

import { Button, Row, Col } from "reactstrap";
import { Joystick } from "react-joystick-component";
import { Tab, Tabs, Modal, Form } from "react-bootstrap";

import _ from "lodash";
import ReactTable from "react-table-6";

const ControlTabs = () => {
  const [smShow, setModalShow] = useState(false);

  const baseColor = `radial-gradient(circle at 50% 50%, rgba(100,100,100,1), rgba(100,100,100,1), rgba(100,100,100,1),  rgba(5,5,5,1))`;

  const stickColor = `radial-gradient(circle at 50% 50%, rgba(70,70,70,1), rgba(70,70,70,1), rgba(5,5,5,1))`;

  const data = [
    {
      task: "MoveT1",
      missionid: 1,
    },
    {
      task: "MoveCharge",
      missionid: 2,
    },
    {
      task: "MoveT2T3",
      missionid: 3,
    },
    {
      task: "MoveT5T6",
      missionid: 4,
    },
    {
      task: "MoveT5",
      missionid: 5,
    },
    {
      task: "MoveT3",
      missionid: 6,
    },
  ];

  const statusdata = [
    {
      id: "Lidar Scan",
      status: "on",
    },
    {
      id: "Mission Mode",
      status: "off",
    },
    {
      id: "LCCS",
      status: true,
    },
    {
      id: "Job Status",
      status: "-",
    },
    {
      id: "Brake",
      status: false,
    },
    {
      id: "Docking Status",
      status: "Robot1",
    },
    {
      id: "IR Sensor",
      status: "0,0,0,0",
    },
  ];

  const columns = [
    {
      Header: "Task",
      accessor: "task",
      width: 120,

      Cell: (cell) => {
        cell.styles["textAlign"] = "center";
        return cell.value;
      },
    },
    {
      Header: "Id",
      accessor: "missionid",
      Cell: (cell) => {
        cell.styles["textAlign"] = "center";
        return cell.value;
      },
    },
  ];

  const statusColumns = [
    {
      Header: "Id",
      accessor: "id",
      width: 120,

      Cell: (cell) => {
        cell.styles["textAlign"] = "center";
        return cell.value;
      },
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: (cell) => {
        cell.styles["textAlign"] = "center";
        if (cell.value === true) {
          return <div className="circle-green"></div>;
        } else if (cell.value === false) {
          return <div className="circle-gray"></div>;
        } else if (cell.value == "on") {
          return (
            <Form>
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
              />
            </Form>
          );
        } else if (cell.value == "off") {
          return (
            <Form>
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
              />
            </Form>
          );
        }
        return cell.value;
      },
    },
  ];

  return (
    <div>
      <Tabs
        fill
        justify
        defaultActiveKey="control"
        id="uncontrolled-tab-example"
      >
        <Tab
          eventKey="control"
          title="Control"
          className="mb-3"
          mountOnEnter // <<<
          unmountOnExit={false} // <<<
        >
          <div>
            <Row>
              <Col sm="6">
                <Button
                  style={{
                    width: "100%",
                    marginBottom: "15px",
                    marginTop: "15px",
                  }}
                >
                  Resume
                </Button>
              </Col>
              <Col sm="6">
                <Button
                  style={{
                    width: "100%",
                    marginBottom: "15px",
                    marginTop: "15px",
                  }}
                >
                  Pause
                </Button>
              </Col>
              <Col
                sm="6"
                style={{
                  marginBottom: "15px",
                }}
              >
                <Button style={{ width: "100%" }}>Cancel</Button>
              </Col>
              <Col
                sm="6"
                style={{
                  marginBottom: "15px",
                }}
              >
                <Button style={{ width: "100%" }}>Wake up</Button>
              </Col>
            </Row>

            <div style={{ background: "rgba(0,0,0,.25)", marginTop: "10px" }}>
              <Row>
                <Col sm="3"></Col>
                <Col
                  sm="4"
                  style={{
                    marginTop: "5px",
                    marginBottom: "5px",
                  }}
                >
                  <Joystick
                    size={110}
                    baseColor={baseColor}
                    stickColor={stickColor}
                  ></Joystick>
                </Col>

                <Col sm="4"></Col>
              </Row>
            </div>
          </div>
        </Tab>
        <Tab
          eventKey="task"
          title="Task"
          mountOnEnter // <<<
          unmountOnExit={false} // <<<
        >
          <div>
            <ReactTable
              data={data}
              minRows={7}
              columns={columns}
              showPagination={false}
              className="-striped -highlight"
              getTrProps={(state, rowInfo, column, instance) => {
                if (rowInfo && rowInfo.row) {
                  return {
                    onClick: (e, handleOriginal) => {
                      setModalShow(true);
                    },
                  };
                } else {
                  return {};
                }
              }}
            ></ReactTable>
            <Modal
              size="sm"
              show={smShow}
              onHide={() => setModalShow(false)}
              aria-labelledby="example-modal-sizes-title-sm"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                  R_001
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>Task를 실행 하시겠습니까?</Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={() => setModalShow(false)}>
                  Run
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </Tab>

        <Tab
          eventKey="status"
          title="Status"
          mountOnEnter // <<<
          unmountOnExit={false} // <<<
        >
          <Row>
            <Col sm="12">
              <ReactTable
                data={statusdata}
                minRows={7}
                columns={statusColumns}
                className="-striped -highlight"
                showPagination={false}
              ></ReactTable>
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ControlTabs;
