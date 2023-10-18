import { useEffect, useState } from "react";
import {
  Button,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  Tooltip,
  UncontrolledDropdown,
} from "reactstrap";
import { RobotErrorLog } from "./components/RobotError";
import { Chart1 } from "./components/Chart1";
import { JobCount } from "./components/JobCount";
import { RobotCurrent } from "./components/RobotCurrent";
import { Form1 } from "./components/Form1";
import { NetworkPing } from "./components/NetworkPing";
import { Responsive, WidthProvider } from "react-grid-layout";
import _ from "lodash";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const initialLayouts = {
  lg: [
    {
      x: 15,
      y: 0,
      w: 9,
      h: 20,
      i: "RobotErrorLog",
      static: false,
      minH: 6,
      minW: 8,
      maxW: 24,
      maxH: 30,
    },
    {
      x: 0,
      y: 0,
      w: 7,
      h: 12,
      i: "Chart1",
      static: false,
      minH: 8,
      minW: 6,
      maxW: 24,
      maxH: 30,
    },
    {
      x: 0,
      y: 12,
      w: 7,
      h: 8,
      i: "JobCount",
      static: false,
      minH: 8,
      minW: 7,
      maxW: 24,
      maxH: 30,
    },
    {
      x: 7,
      y: 0,
      w: 8,
      h: 13,
      i: "RobotCurrent",
      static: false,
      minH: 6,
      minW: 8,
      maxW: 24,
      maxH: 30,
    },
    {
      x: 7,
      y: 13,
      w: 8,
      h: 7,
      i: "NetworkPing",
      static: false,
      minH: 7,
      minW: 8,
      maxW: 24,
      maxH: 30,
    },
  ],
  md: [
    {
      x: 0,
      y: 1,
      w: 10,
      h: 8,
      i: "RobotErrorLog",
      static: false,
      minH: 6,
      minW: 8,
      maxW: 24,
      maxH: 30,
    },
    {
      x: 10,
      y: 1,
      w: 10,
      h: 8,
      i: "Chart1",
      static: false,
      minH: 8,
      minW: 6,
      maxW: 24,
      maxH: 30,
    },
    {
      x: 0,
      y: 8,
      w: 20,
      h: 12,
      i: "Form1",
      static: false,
      minH: 6,
      minW: 8,
      maxW: 24,
      maxH: 30,
    },
    {
      x: 0,
      y: 20,
      w: 20,
      h: 8,
      i: "Chart2",
      static: false,
      minH: 6,
      minW: 8,
      maxW: 24,
      maxH: 30,
    },
  ],
  sm: [
    {
      x: 0,
      y: 1,
      w: 6,
      h: 8,
      i: "RobotErrorLog",
      static: false,
      minH: 6,
      minW: 8,
      maxW: 24,
      maxH: 30,
    },
    {
      x: 6,
      y: 1,
      w: 10,
      h: 8,
      i: "Chart1",
      static: false,
      minH: 8,
      minW: 6,
      maxW: 24,
      maxH: 30,
    },
    {
      x: 0,
      y: 8,
      w: 16,
      h: 12,
      i: "Form1",
      static: false,
      minH: 6,
      minW: 8,
      maxW: 24,
      maxH: 30,
    },
    {
      x: 0,
      y: 20,
      w: 16,
      h: 8,
      i: "Chart2",
      static: false,
      minH: 6,
      minW: 8,
      maxW: 24,
      maxH: 30,
    },
  ],
  xs: [
    {
      x: 0,
      y: 1,
      w: 12,
      h: 8,
      i: "RobotErrorLog",
      static: false,
      minH: 6,
      minW: 8,
      maxW: 24,
      maxH: 30,
    },
    {
      x: 0,
      y: 8,
      w: 12,
      h: 8,
      i: "Chart1",
      static: false,
      minH: 8,
      minW: 6,
      maxW: 24,
      maxH: 30,
    },
    {
      x: 0,
      y: 16,
      w: 12,
      h: 12,
      i: "Form1",
      static: false,
      minH: 6,
      minW: 8,
      maxW: 24,
      maxH: 30,
    },
    {
      x: 0,
      y: 36,
      w: 12,
      h: 8,
      i: "Chart2",
      static: false,
      minH: 6,
      minW: 8,
      maxW: 24,
      maxH: 30,
    },
  ],
};

let onoffChart1 = true;
let onoffChart2 = false;
let onoffRobotcurrent = false;
let onoffPing = false;
let onoffForm1 = true;
let onoffRobotError = true;

export const MapPage = () => {
  const [currentLayout, setCurrentLayout] = useState([]);
  const [layouts, setLayouts] = useState(initialLayouts);
  const [mounted, setMounted] = useState(false);
  const [currentBreakpoint, setCurrentBreakpoint] = useState("lg");
  const [compactType, setCompactType] = useState("vertical");

  const _ = require("lodash");

  const [viewSettingTooltipOpen, setVewsettingTooltipOpen] = useState(false);
  const viewSetToggle = () => setVewsettingTooltipOpen(!viewSetToggle);

  const [gitTooltipOpen, setGitTooltipOpen] = useState(false);
  const gitToggle = () => setGitTooltipOpen(!gitTooltipOpen);

  const cols = {
    lg: 24,
    md: 20,
    sm: 16,
    xs: 12,
    xxs: 8,
  };

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `Map-Dashborard`;
  }, []);

  const deleteLayoutItem = (componentid) => {
    const test = initialLayouts.lg.filter((x) => x.i !== componentid);

    initialLayouts.lg = test;
    setCurrentLayout(initialLayouts.lg);
  };

  const deleteDuplicteLayoutItem = () => {
    const unique = [
      ...new Map(initialLayouts.lg.map((m) => [m.i, m])).values(),
    ];

    initialLayouts.lg = unique;
    setCurrentLayout(initialLayouts.lg);
  };

  const addNewLayoutItem = (componentid) => {
    initialLayouts.lg.push({
      w: 8,
      h: 8,
      x: 0,
      y: 9,
      i: componentid,
      static: false,
      minH: undefined,
      minW: undefined,
      maxW: 12,
      maxH: 17,
    });
    currentLayout.push({
      w: 8,
      h: 8,
      x: 0,
      y: 9,
      i: componentid,
      static: false,
      minH: undefined,
      minW: undefined,
      maxW: 12,
      maxH: 17,
    });

    setCurrentLayout(initialLayouts.lg);
  };

  const onBreakpointChange = (breakpoint) => {
    setCurrentBreakpoint(breakpoint);
  };

  const onLayoutChange = (layout, _layouts) => {
    if (layout[layout.length - 1].w === 1) {
      layout[layout.length - 1].w = 8;
      layout[layout.length - 1].h = 8;
    }
    console.log(layout, "layout");
    setCurrentLayout(layout);
  };

  const SwitchContent = ({ item, currentLayout }) => {
    switch (item.i) {
      case "RobotErrorLog":
        return (
          <RobotErrorLog
            item={item}
            currentLayout={
              currentLayout.filter((x) => x.i === "RobotErrorLog")[0]
            }
          />
        );
      case "Form1":
        return (
          <Form1
            item={item}
            currentLayout={currentLayout.filter((x) => x.i === "Form1")[0]}
          />
        );
      case "Chart1":
        return (
          <Chart1
            item={item}
            currentLayout={currentLayout.filter((x) => x.i === "Chart1")[0]}
          />
        );
      case "JobCount":
        return (
          <JobCount
            item={item}
            currentLayout={currentLayout.filter((x) => x.i === "JobCount")[0]}
          />
        );
      case "RobotCurrent":
        return (
          <RobotCurrent
            item={item}
            currentLayout={
              currentLayout.filter((x) => x.i === "RobotCurrent")[0]
            }
          />
        );
      case "NetworkPing":
        return (
          <NetworkPing
            item={item}
            currentLayout={
              currentLayout.filter((x) => x.i === "NetworkPing")[0]
            }
          />
        );

      default:
        return <></>;
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      <Navbar style={{ backgroundColor: "#58a2ed" }} expand="md">
        <NavbarBrand href="/" className={"ms-3 me-2"}></NavbarBrand>
        <Collapse navbar style={{ flexGrow: "unset" }}>
          <Nav className="me-auto" navbar>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle id="view" style={{ color: "white" }} nav>
                View Setting
              </DropdownToggle>

              <DropdownMenu end style={{ minWidth: "100px" }}>
                <DropdownItem toggle={false}>
                  <Input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        if (currentLayout.includes("Chart1")) {
                        } else {
                          addNewLayoutItem("Chart1");
                          onoffChart1 = true;
                        }
                      } else {
                        deleteLayoutItem("Chart1");
                        onoffChart1 = false;
                      }
                    }}
                    checked={onoffChart1}
                  />
                  <Label>Chart1</Label>
                </DropdownItem>
                <DropdownItem toggle={false}>
                  <Input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        if (currentLayout.includes("Form1")) {
                        } else {
                          addNewLayoutItem("Form1");
                          onoffForm1 = true;
                        }
                      } else {
                        deleteLayoutItem("Form1");
                        onoffForm1 = false;
                      }
                    }}
                    checked={onoffForm1}
                  />
                  <Label>Form1</Label>
                </DropdownItem>
                <DropdownItem toggle={false}>
                  <Input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        if (currentLayout.includes("RobotErrorLog")) {
                        } else {
                          addNewLayoutItem("RobotErrorLog");

                          onoffRobotError = true;
                        }
                      } else {
                        deleteLayoutItem("RobotErrorLog");
                        onoffRobotError = false;
                      }
                    }}
                    checked={onoffRobotError}
                  />
                  <Label>Error Log</Label>
                </DropdownItem>
                <DropdownItem toggle={false}>
                  <Input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        if (currentLayout.includes("JobCount")) {
                        } else {
                          addNewLayoutItem("JobCount");
                          onoffChart2 = true;
                        }
                      } else {
                        deleteLayoutItem("JobCount");
                        onoffChart2 = false;
                      }
                    }}
                    checked={onoffChart2}
                  />
                  <Label>Job Count</Label>
                </DropdownItem>
                <DropdownItem toggle={false}>
                  <Input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        if (currentLayout.includes("RobotCurrent")) {
                        } else {
                          addNewLayoutItem("RobotCurrent");
                          onoffRobotcurrent = true;
                        }
                      } else {
                        deleteLayoutItem("RobotCurrent");
                        onoffRobotcurrent = false;
                      }
                    }}
                    checked={onoffRobotcurrent}
                  />
                  <Label>Robot Current</Label>
                </DropdownItem>
                <DropdownItem toggle={false}>
                  <Input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        if (currentLayout.includes("NetworkPing")) {
                        } else {
                          addNewLayoutItem("NetworkPing");
                          onoffPing = true;
                        }
                      } else {
                        deleteLayoutItem("NetworkPing");
                        onoffPing = false;
                      }
                    }}
                    checked={onoffPing}
                  />
                  <Label>Network Ping</Label>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <NavLink
                id="git"
                target="_blank"
                style={{ color: "white" }}
                href="https://github.com/kimsloth"
              >
                GitHub
              </NavLink>
              <Tooltip
                autohide={true}
                flip={true}
                isOpen={gitTooltipOpen}
                target="git"
                toggle={gitToggle}
                placement="bottom"
              >
                GitHub
              </Tooltip>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div>
        {mounted ? (
          <ResponsiveReactGridLayout
            className={"grid-layout"}
            draggableHandle={".drag-header"}
            rowHeight={50}
            containerPadding={[5, 5]}
            margin={[5, 5]}
            cols={cols}
            layouts={layouts}
            onBreakpointChange={onBreakpointChange}
            onLayoutChange={onLayoutChange}
            measureBeforeMount={false}
            compactType={compactType}
            preventCollision={!compactType}
          >
            {layouts.lg.map((item) => {
              return (
                <div key={item.i} className={item.static ? "static" : ""}>
                  <SwitchContent item={item} currentLayout={currentLayout} />
                </div>
              );
            })}
          </ResponsiveReactGridLayout>
        ) : null}
      </div>
    </div>
  );
};
