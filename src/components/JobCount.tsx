import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Card, CardBody, CardHeader } from "reactstrap";
import SimpleBar from "simplebar-react";
import _ from "lodash";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May"];

export const data = {
  labels,
  datasets: [
    {
      label: "Serving",
      data: labels.map(() => _.random(0, 1000)),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Withdrawal",
      data: labels.map(() => _.random(0, 1000)),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Petrol",
      data: labels.map(() => _.random(0, 1000)),
      backgroundColor: "#3a7099",
    },
    {
      label: "Guide",
      data: labels.map(() => _.random(0, 1000)),
      backgroundColor: "#3a996e",
    },
  ],
};

export function JobCount({ item, currentLayout }) {
  const cardBodyMargin = 30 * 2;
  const paddingDrag = 10;
  const sumStatic = cardBodyMargin - paddingDrag;
  const maxRow = 55; // heidht row mamy ustwione na 50px i margines na 5px
  const [maxHeight, setMaxHeight] = useState(0);
  const [width, setwidth] = useState(4);

  useEffect(() => {
    const myHeader = document.querySelector(".drag-header") as HTMLElement;
    let headerCard = myHeader.clientHeight || myHeader.offsetHeight;
    // console.log({headerCard})
    if (currentLayout) {
      setMaxHeight(maxRow * currentLayout.h - sumStatic - headerCard);
    } else {
      setMaxHeight(maxRow * item.h - sumStatic - headerCard);
    }
  }, [currentLayout, item]);

  return (
    <Card style={{ height: "100%", position: "relative", overflowX: "auto" }}>
      <CardHeader className={"drag-header"}>Job Count/Month</CardHeader>
      <CardBody>
        <SimpleBar style={{ maxHeight: maxHeight }}>
          <Bar options={{ responsive: true }} data={data} />
        </SimpleBar>
      </CardBody>
    </Card>
  );
}
