import classNames from "classnames";
import _, { size } from "lodash";
import React from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

const RobotList = ({ isOpen, size }) => {
  const data = [
    {
      id: "R_001",
      name: "Robot1",
      workState: "Serving",
      missionMode: true,
      battery: 90,
    },
    {
      id: "R_002",
      name: "Robot2",
      workState: "Withdrawal",
      missionMode: false,
      battery: 40,
    },
    {
      id: "R_003",
      name: "Robot3",
      workState: "Patrol",
      missionMode: true,
      battery: 10,
    },
  ];

  const columns = [
    {
      Header: "Id",
      accessor: "id",
      width: 60,
    },
    {
      Header: "Name",
      accessor: "name",
      Cell: (cell) => {
        cell.styles["textAlign"] = "center";
        return cell.value;
      },
    },
    {
      Header: "Work State",
      accessor: "workState",
      Cell: (cell) => {
        if (cell.value == "Serving") {
          cell.styles["backgroundColor"] = "green";
        } else if (cell.value == "Withdrawal") {
          cell.styles["backgroundColor"] = "red";
        } else if (cell.value == "Patol") {
          cell.styles["backgroundColor"] = "skyblue";
        }

        cell.styles["textAlign"] = "center";
        return cell.value;
      },
    },
    {
      Header: "Mission Mode",
      accessor: "missionMode",
      Cell: (cell) => {
        cell.styles["textAlign"] = "center";
        if (cell.value == true) {
          cell.value = "Auto";
        } else {
          cell.value = "Manual";
        }

        return cell.value;
      },
    },
    {
      Header: "Battery",
      accessor: "battery",
      Cell: (cell) => {
        cell.styles["textAlign"] = "center";
        if (cell.value >= 70) {
          cell.styles["color"] = "green";
        } else if (cell.value < 70 && cell.value >= 40) {
          cell.styles["color"] = "orange";
        } else {
          cell.styles["color"] = "red";
        }

        return cell.value;
      },
    },
  ];

  return (
    <div
      className={classNames("sidebar-2", {
        "is-open": isOpen,
      })}
    >
      <div className="sidebar-header-2">Robot List</div>

      <div className="side-menu-2">
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={20}
          className="-striped -highlight"
        />
      </div>
    </div>
  );
};

export default RobotList;
