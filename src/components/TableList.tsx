import classNames from "classnames";
import _, { size } from "lodash";

import ReactTable from "react-table-6";

const TableList = ({ isOpen, size }) => {
  const data = [
    {
      name: "Table 1",
      state: "Idel",
      call: true,
      callres: true,
      callTime: "2023-10-16 17:39:41",
      robotstop: true,
    },
    {
      name: "Table 2",
      state: "Call",
      call: true,
      callres: true,
      callTime: "2023-10-16 17:39:41",
      robotstop: true,
    },
    {
      name: "Table 3",
      state: "Call",
      call: true,
      callres: true,
      callTime: "2023-10-16 17:39:41",
      robotstop: true,
    },
    {
      name: "Table 4",
      state: "Call",
      call: true,
      callres: true,
      callTime: "2023-10-16 17:39:41",
      robotstop: true,
    },
    {
      name: "Table 5",
      state: "Call",
      call: true,
      callres: true,
      callTime: "",
      robotstop: true,
    },
    {
      name: "Table 6",
      state: "Call",
      call: true,
      callres: true,
      callTime: "2023-10-16 17:39:41",
      robotstop: true,
    },
  ];

  const columns = [
    {
      Header: "Name",
      accessor: "name",
      width: 80,
      Cell: (cell) => {
        cell.styles["textAlign"] = "center";
        return cell.value;
      },
    },
    {
      Header: "State",
      accessor: "state",
      width: 60,
      Cell: (cell) => {
        cell.styles["textAlign"] = "center";
        if (cell.value == "Idel") {
          cell.styles["backgroundColor"] = "green";
        } else if (cell.value == "error") {
          cell.styles["backgroundColor"] = "red";
        } else if (cell.value == "Call") {
          cell.styles["backgroundColor"] = "skyblue";
        }

        return cell.value;
      },
    },
    {
      Header: "Call",
      accessor: "call",
      width: 60,
      Cell: (cell) => {
        if (cell.value == true) {
          cell.value = "On";
        } else {
          cell.value = "Off";
        }

        cell.styles["textAlign"] = "center";
        return cell.value;
      },
    },
    {
      Header: "Call Res",
      accessor: "callres",
      width: 70,
      Cell: (cell) => {
        if (cell.value == true) {
          cell.value = "On";
        } else {
          cell.value = "Off";
        }

        cell.styles["textAlign"] = "center";
        return cell.value;
      },
    },
    {
      Header: "Call Time",
      accessor: "callTime",
      width: 180,
      Cell: (cell) => {
        return cell.value;
      },
    },
    {
      Header: "Order Stop",
      accessor: "robotstop",
      Cell: (cell) => {
        cell.styles["textAlign"] = "center";
        if (cell.value == true) {
          cell.value = "On";
        } else {
          cell.value = "Off";
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
      <div className="sidebar-header-2">Table List</div>
      <hr color="red"></hr>
      <div className="side-menu-2">
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={25}
          className="-striped -highlight"
        />
      </div>
    </div>
  );
};

export default TableList;
