import { useEffect, useState } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import _ from "lodash";
import { Col, Row } from "react-bootstrap";

export function NetworkPing({ item, currentLayout }) {
  const cardBodyMargin = 30 * 2;
  const paddingDrag = 10;
  const sumStatic = cardBodyMargin - paddingDrag;
  const maxRow = 55;
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    const myHeader = document.querySelector(".drag-header") as HTMLElement;
    let headerCard = myHeader.clientHeight || myHeader.offsetHeight;

    if (currentLayout) {
      setMaxHeight(maxRow * currentLayout.h - sumStatic - headerCard);
    } else {
      setMaxHeight(maxRow * item.h - sumStatic - headerCard);
    }
  }, [currentLayout, item]);

  return (
    <Card style={{ height: "100%", position: "relative", overflowX: "auto" }}>
      <CardHeader className={"drag-header"}>Netwotk Ping</CardHeader>
      <CardBody>
        <div>
          <Row style={{ paddingBottom: "10px" }}>
            <Col className="network">
              <div className="network-status">
                <i
                  style={{
                    fontSize: "20px",
                    color: "white",
                  }}
                  className="bi bi-check-circle"
                >
                  24ms
                </i>
              </div>
            </Col>
            <Col className="network">
              <div className="network-status">
                <i
                  style={{
                    fontSize: "20px",
                    color: "white",
                  }}
                  className="bi bi-check-circle"
                >
                  24ms
                </i>
              </div>
            </Col>
            <Col className="network">
              <div className="network-status">
                <i
                  style={{
                    fontSize: "20px",
                    color: "white",
                  }}
                  className="bi bi-check-circle"
                >
                  R_001 24ms
                </i>
              </div>
            </Col>
            <Col className="network">
              <div className="network-status">
                <i
                  style={{
                    fontSize: "20px",
                    color: "white",
                  }}
                  className="bi bi-check-circle"
                >
                  24ms
                </i>
              </div>
            </Col>
          </Row>
          <Row style={{ paddingBottom: "10px" }}>
            <Col className="network">
              <div className="network-status-yello">
                <i
                  style={{
                    fontSize: "20px",
                    color: "white",
                  }}
                  className="bi bi-dash-circle-dotted"
                >
                  24ms
                </i>
              </div>
            </Col>
            <Col className="network">
              <div className="network-status-yello">
                <i
                  style={{
                    fontSize: "20px",
                    color: "white",
                  }}
                  className="bi bi-dash-circle-dotted"
                >
                  24ms
                </i>
              </div>
            </Col>
            <Col className="network">
              <div className="network-status-yello">
                <i
                  style={{
                    fontSize: "20px",
                    color: "white",
                  }}
                  className="bi bi-dash-circle-dotted"
                >
                  R_001 24ms
                </i>
              </div>
            </Col>
            <Col className="network">
              <div className="network-status-yello">
                <i
                  style={{
                    fontSize: "20px",
                    color: "white",
                  }}
                  className="bi bi-dash-circle-dotted"
                >
                  24ms
                </i>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="network">
              <div className="network-status-red">
                <i
                  style={{
                    fontSize: "20px",
                    color: "white",
                  }}
                  className="bi bi-exclamation-circle"
                >
                  24ms
                </i>
              </div>
            </Col>
            <Col className="network">
              <div className="network-status-red">
                <i
                  style={{
                    fontSize: "20px",
                    color: "white",
                  }}
                  className="bi bi-exclamation-circle"
                >
                  24ms
                </i>
              </div>
            </Col>
            <Col className="network">
              <div className="network-status-red">
                <i
                  style={{
                    fontSize: "20px",
                    color: "white",
                  }}
                  className="bi bi-exclamation-circle"
                >
                  R_001 24ms
                </i>
              </div>
            </Col>
            <Col className="network">
              <div className="network-status-red">
                <i
                  style={{
                    fontSize: "20px",
                    color: "white",
                  }}
                  className="bi bi-exclamation-circle"
                >
                  24ms
                </i>
              </div>
            </Col>
          </Row>
        </div>
      </CardBody>
    </Card>
  );
}
