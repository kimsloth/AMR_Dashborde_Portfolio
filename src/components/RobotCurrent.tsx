import { useEffect, useState } from "react";

import { Card, CardBody, CardHeader } from "reactstrap";

import Stepper from "react-stepper-horizontal";
import _ from "lodash";

export function RobotCurrent({ item, currentLayout }) {
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
      <CardHeader className={"drag-header"}>Robot Current</CardHeader>
      <CardBody>
        <div>
          <div>R_001</div>
          <Stepper
            steps={[
              { title: "Step One" },
              { title: "Step Two" },
              { title: "Step Three" },
              { title: "Step Four" },
            ]}
            activeStep={1}
          />
          <hr color="red"></hr>
          <div>R_002</div>
          <Stepper
            steps={[
              { title: "Step One" },
              { title: "Step Two" },
              { title: "Step Three" },
              { title: "Step Four" },
            ]}
            activeStep={4}
          />
          <hr color="red"></hr>
          <div>R_003</div>
          <Stepper
            steps={[
              { title: "Step One" },
              { title: "Step Two" },
              { title: "Step Three" },
              { title: "Step Four" },
            ]}
            activeStep={3}
          />
          <hr color="red"></hr>
          <div>R_004</div>
          <Stepper
            steps={[
              { title: "Step One" },
              { title: "Step Two" },
              { title: "Step Three" },
              { title: "Step Four" },
            ]}
            activeStep={2}
          />
          <hr color="red"></hr>
          <div>R_005</div>
          <Stepper
            steps={[
              { title: "Step One" },
              { title: "Step Two" },
              { title: "Step Three" },
              { title: "Step Four" },
            ]}
            activeStep={1}
          />
        </div>
      </CardBody>
    </Card>
  );
}
