import classNames from "classnames";
import _ from "lodash";

import ReactTable from "react-table-6";

const JobList = ({ isOpen, size }) => {
  const data = [
    {
      robot: "R_001",
      task: "Serving",
      layover: "T1",
      from: "T3",
      to: "T6",
      cratedate: "2023-10-16 17:39:41",
    },
    {
      robot: "R_001",
      task: "Serving",
      layover: "T1",
      from: "T3",
      to: "T6",
      cratedate: "2023-10-16 17:39:41",
    },
    {
      robot: "R_001",
      task: "Serving",
      layover: "T1",
      from: "T3",
      to: "T6",
      cratedate: "2023-10-16 17:39:41",
    },
    {
      robot: "R_001",
      task: "MoveT1",
      layover: "T1",
      from: "T3",
      to: "T6",
      cratedate: "2023-10-16 17:39:41",
    },
    {
      robot: "R_001",
      task: "MoveCharge1",
      layover: "T1",
      from: "T3",
      to: "T6",
      cratedate: "2023-10-16 17:39:41",
    },
  ];

  const columns = [
    {
      Header: "Robot",
      accessor: "robot",
      width: 80,
      Cell: (cell) => {
        cell.styles["textAlign"] = "center";
        return cell.value;
      },
    },
    {
      Header: "Task",
      accessor: "task",
      width: 120,
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
      Header: "Layover",
      accessor: "layover",
      width: 70,
      Cell: (cell) => {
        cell.styles["textAlign"] = "center";
        return cell.value;
      },
    },
    {
      Header: "From",
      accessor: "from",
      width: 70,
      Cell: (cell) => {
        cell.styles["textAlign"] = "center";
        return cell.value;
      },
    },
    {
      Header: "To",
      accessor: "to",
      width: 60,
      Cell: (cell) => {
        cell.styles["textAlign"] = "center";
        return cell.value;
      },
    },
    {
      Header: "Crate Date",
      accessor: "cratedate",
      Cell: (cell) => {
        cell.styles["textAlign"] = "center";

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
      <div className="sidebar-header-2">Job List</div>
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

export default JobList;
