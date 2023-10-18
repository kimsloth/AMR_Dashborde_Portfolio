import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>Bootstrap Sidebar</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <p>Dummy Heading</p>

        <NavItem>
          <NavLink to={"/about"}>About</NavLink>
        </NavItem>

        <NavItem>
          <NavLink to={"/pages"}>Portfolio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={"/faq"}>FAQ</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={"/contact"}>Contact</NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

const submenus = [
  [
    {
      title: "Home 1",
      target: "Home-1",
    },
    {
      title: "Home 2",
      target: "Home-2",
    },
    {
      itle: "Home 3",
      target: "Home-3",
    },
  ],
  [
    {
      title: "Page 1",
      target: "Page-1",
    },
    {
      title: "Page 2",
      target: "Page-2",
    },
  ],
];

export default SideBar;
