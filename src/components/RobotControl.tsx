import { memo } from "react";

import {
  Container,
  Row,
  Col,
  UncontrolledAccordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import classNames from "classnames";
import _ from "lodash";
import ControlTabs from "./Tab";

const RobotControl = ({ isOpen }) => (
  <div
    className={classNames("accodion", {
      "is-open": isOpen,
    })}
  >
    <UncontrolledAccordion open={[]} defaultOpen="1">
      <AccordionItem>
        <AccordionHeader targetId="1">Robot Detail</AccordionHeader>
        <AccordionBody
          accordionId="1"
          style={{ paddingBottom: "0px", backgroundColor: "rgb(223 232 244)" }}
        >
          <Container style={{ marginBottom: "10px" }}>
            <Row>
              <Col xs="6">R_001</Col>

              <Col xs="6">56%</Col>
            </Row>
          </Container>

          <ControlTabs />
        </AccordionBody>
      </AccordionItem>
    </UncontrolledAccordion>
  </div>
);

export default memo(RobotControl);
