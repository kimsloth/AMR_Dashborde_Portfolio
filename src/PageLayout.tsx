import { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { MapPage } from "./DashbordePage";
import { DashbordePage } from "./MapPage";
import classNames from "classnames";

export const PageLayout = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const [page, setPage] = useState("PageOne");

  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  const onClickPage = (_page) => () => setPage(_page);

  const Content = ({ page }) => {
    switch (page) {
      case "PageOne":
        return <MapPage />;
      case "PageTwo":
        return <DashbordePage />;
      default:
        return <div className="mt-5 text-center">ERROR PAGE</div>;
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "stretch",
          position: "relative",
          zIndex: 4,
        }}
      >
        <div className={classNames("sidebar", { "is-open": sidebarIsOpen })}>
          <div className="sidebar-header">
            <span
              color="info"
              onClick={toggleSidebar}
              style={{ color: "#fff" }}
            >
              &times;
            </span>
            <h3>AMR Dasboard</h3>
          </div>
          <div className="side-menu">
            <Nav vertical className="list-unstyled pb-3">
              <NavItem
                active={page === "PageOne"}
                className={classNames({ "sidemenu-open": page === "PageOne" })}
              >
                <NavLink
                  style={{ color: "white", fontSize: "18px" }}
                  active={page === "PageOne"}
                  onClick={onClickPage("PageOne")}
                  href="#Dashborde"
                  to={"/dashborde"}
                >
                  Dashboard
                </NavLink>
              </NavItem>
              <NavItem
                active={page === "PageTwo"}
                className={classNames({ "sidemenu-open": page === "PageTwo" })}
              >
                <NavLink
                  style={{ color: "white", fontSize: "18px" }}
                  active={page === "PageTwo"}
                  onClick={onClickPage("PageTwo")}
                  href="#Map"
                  to={"/map"}
                >
                  Map
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </div>

        <div className="content" style={{ position: "relative", zIndex: 3 }}>
          <Content page={page} />
        </div>
      </div>
    </div>
  );
};
