import {
  Stage,
  Layer,
  Rect,
  Image,
  Group,
  Text,
  Transformer,
  Line,
} from "react-konva";
import {
  Collapse,
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  Tooltip,
} from "reactstrap";
import { ComponentProps, useEffect, useRef, useState } from "react";
import RobotControl from "./components/RobotControl";
import RobotList from "./components/RobotList";
import TableList from "./components/TableList";
import JobList from "./components/JobList";
import img from "./components/image/map.jpg";
import Konva from "konva";
import "./DashbordePage.css";
import _ from "lodash";

let color = "red";

export const DashbordePage = () => {
  const mapRef: ComponentProps<typeof Group>["ref"] = useRef();
  const imageRef: ComponentProps<typeof Image>["ref"] = useRef(null);
  const robotRef = useRef();
  const table1Ref = useRef();
  const table2Ref = useRef();
  const table3Ref = useRef();
  const table4Ref = useRef();
  const table5Ref = useRef();
  const table6Ref = useRef();
  let searchRef = useRef(null);
  let controlRef = useRef(null);

  const [image, setImage] = useState<HTMLImageElement>();

  const [isSelected, setIsSelected] = useState(false);

  const [didTouchStage, setDidTouchStage] = useState(false);
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [stage, setStage] = useState({
    scale: 1,
    x: 0,
    y: 0,
  });

  const [robottooltipOpen, setrobotTooltipOpen] = useState(false);
  const robotToggle = () => setrobotTooltipOpen(!robottooltipOpen);

  const [taskTooltipOpen, setTaskTooltipOpen] = useState(false);
  const taskToggle = () => setTaskTooltipOpen(!taskTooltipOpen);

  const [mapTooltipOpen, setMapTooltipOpen] = useState(false);
  const MapToggle = () => setMapTooltipOpen(!mapTooltipOpen);

  const [tableTooltipOpen, setTableTooltipOpen] = useState(false);
  const TableToggle = () => setTableTooltipOpen(!tableTooltipOpen);

  const [robotControlIsOpen, setRobotControlIsOpen] = useState(false);
  const toggleRobotControl = () => {
    color = "white";

    setRobotControlIsOpen(true);
  };

  const [robotListIsOpen, setRobotlistIsOpen] = useState(false);
  const toggleRobotlist = () => {
    setTableListIsOpen(false);
    setRobotlistIsOpen(true);
    setJoblistIsOpen(false);
  };

  const [tableListIsOpen, setTableListIsOpen] = useState(false);
  const toggleTablelist = () => {
    setTableListIsOpen(true);
    setRobotlistIsOpen(false);
    setJoblistIsOpen(false);
  };

  const [JobListIsOpen, setJoblistIsOpen] = useState(false);
  const toggleJoblist = () => {
    setTableListIsOpen(false);
    setRobotlistIsOpen(false);
    setJoblistIsOpen(true);
  };

  const transformerRef = useRef<any>();

  const mapImage = new window.Image();
  mapImage.src = img;

  function selectHandler(data) {
    setIsSelected(data);
  }

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `Editable DshBorard`;
  }, []);

  useEffect(() => {
    if (isSelected) {
      transformerRef.current.nodes([
        imageRef.current,
        table1Ref.current,
        table2Ref.current,
        table3Ref.current,
        table4Ref.current,
        table5Ref.current,
        table6Ref.current,
        robotRef.current,
      ]);
    }
  }, [isSelected]);

  useEffect(() => {
    if (didTouchStage) {
      selectHandler(false);
    }
  }, [didTouchStage]);

  useEffect(() => {
    mapImage.onload = () => {
      setImage(mapImage);
    };

    const tween = new Konva.Tween({
      node: robotRef.current,
      duration: 2,
      x: 900,
      y: 50,
    });

    const test = new Konva.Tween({
      node: robotRef.current,
      duration: 5,
      x: 840 * imageRef.current.scaleX(),
      yoyo: true,
      onFinish: () => {},
    });

    test.play();
  }, []);

  let [inputFocus, setInputFocus] = useState(false);

  useEffect(() => {
    function handleOutside(e) {
      if (controlRef.current && !controlRef.current.contains(e.target)) {
        setRobotControlIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  }, [controlRef]);

  useEffect(() => {
    function handleOutside(e) {
      // current.contains(e.target) : 컴포넌트 특정 영역 외 클릭 감지를 위해 사용
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setInputFocus(false);

        setTableListIsOpen(false);
        setRobotlistIsOpen(false);
        setJoblistIsOpen(false);
      } else if (controlRef.current && !controlRef.current.contains(e.target)) {
        setRobotControlIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  }, [searchRef]);

  useEffect(() => {
    const checkSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const setMapFit = () => {
    mapRef.current.x(0);
    mapRef.current.y(-25.5);
    setStage({
      scale: 1.061208,
      x: -63.533903999999886,
      y: -34.27065131378061,
    });

    setImage(mapImage);
  };

  const handleWheel = (e) => {
    e.evt.preventDefault();

    const scaleBy = 1.02;
    const stage = e.target.getStage();
    const oldScale = stage.scaleX();
    const mousePointTo = {
      x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
      y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale,
    };

    const newScale = e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy;

    setStage({
      scale: newScale,
      x: (stage.getPointerPosition().x / newScale - mousePointTo.x) * newScale,
      y: (stage.getPointerPosition().y / newScale - mousePointTo.y) * newScale,
    });
  };

  function checkDeselect(e) {
    const didTouchStage = e.target === e.target.getStage();
    setDidTouchStage(didTouchStage);
  }

  return (
    <div style={{ backgroundColor: "#c5c3c3" }}>
      <div style={{ backgroundColor: "#c8c8c8" }}>
        <div>
          <Navbar style={{ backgroundColor: "#57a2ea" }} expand="md">
            <NavbarBrand href="/" className={"ms-3 me-2"}></NavbarBrand>
            <Collapse navbar style={{ flexGrow: "unset" }}>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <i
                    id="map"
                    style={{
                      fontSize: "30px",
                      color: "white",
                      paddingLeft: "5px",
                      paddingRight: "5px",
                    }}
                    onClick={setMapFit}
                    className="bi bi-aspect-ratio"
                  ></i>
                  <Tooltip
                    autohide={true}
                    flip={true}
                    isOpen={mapTooltipOpen}
                    target="map"
                    toggle={MapToggle}
                    placement="bottom"
                  >
                    Map Fit
                  </Tooltip>
                </NavItem>
                <NavItem>
                  <i
                    id="task"
                    style={{
                      fontSize: "30px",
                      color: "white",
                      paddingLeft: "5px",
                      paddingRight: "5px",
                    }}
                    onClick={toggleJoblist}
                    className="bi bi-clipboard"
                  ></i>
                  <Tooltip
                    autohide={true}
                    flip={true}
                    isOpen={taskTooltipOpen}
                    target="task"
                    toggle={taskToggle}
                    placement="bottom"
                  >
                    Task
                  </Tooltip>
                </NavItem>
                <NavItem>
                  <i
                    id="robot"
                    style={{
                      fontSize: "30px",
                      color: "white",
                      paddingLeft: "5px",
                      paddingRight: "5px",
                    }}
                    onClick={toggleRobotlist}
                    className="bi bi-robot"
                  ></i>
                  <Tooltip
                    autohide={true}
                    flip={true}
                    isOpen={robottooltipOpen}
                    target="robot"
                    toggle={robotToggle}
                    placement="bottom"
                  >
                    Robot
                  </Tooltip>
                </NavItem>
                <NavItem>
                  <i
                    id="table1"
                    style={{
                      fontSize: "30px",
                      color: "white",
                      paddingLeft: "5px",
                      paddingRight: "5px",
                    }}
                    onClick={toggleTablelist}
                    className="bi bi-tablet"
                  ></i>
                  <Tooltip
                    autohide={true}
                    flip={true}
                    isOpen={tableTooltipOpen}
                    target="table1"
                    toggle={TableToggle}
                    placement="bottom"
                  >
                    Table
                  </Tooltip>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>

        <div
          ref={controlRef}
          style={{
            position: "absolute",
            zIndex: 2,
            left: "0%",
            overflow: "hidden",
          }}
        >
          <RobotControl isOpen={robotControlIsOpen} />
        </div>

        <div
          ref={searchRef}
          style={{
            position: "absolute",
            zIndex: 2,
            right: "0%",
            overflow: "hidden",
          }}
        >
          {(function () {
            if (robotListIsOpen) {
              return (
                <RobotList isOpen={robotListIsOpen} size={size.height - 216} />
              );
            } else if (tableListIsOpen)
              return (
                <TableList isOpen={tableListIsOpen} size={size.height - 216} />
              );
            else if (JobListIsOpen)
              return (
                <JobList isOpen={JobListIsOpen} size={size.height - 216} />
              );
            else {
              return <div></div>;
            }
          })()}
        </div>
      </div>
      <div>
        <Stage
          width={size.width - 267}
          height={size.height - 60.5}
          onWheel={handleWheel}
          scaleX={stage.scale}
          scaleY={stage.scale}
          x={stage.x}
          y={stage.y}
          onMouseDown={checkDeselect}
          onTouchStart={checkDeselect}
        >
          <Layer>
            <Group
              ref={mapRef}
              draggable
              keepRatio
              onTap={() => {
                selectHandler(true);
              }}
              onClick={() => {
                selectHandler(true);
              }}
            >
              {isSelected && (
                <Transformer
                  ref={transformerRef}
                  enabledAnchors={[
                    "top-left",
                    "top-right",
                    "bottom-left",
                    "bottom-right",
                  ]}
                />
              )}
              <Image x={545} y={30} image={image} ref={imageRef} />

              <Group ref={table1Ref} x={935} y={485}>
                <Rect width={50} height={50} fill="red" shadowBlur={10} />
                <Text
                  text="1"
                  width={50}
                  height={50}
                  fontSize={20}
                  strokeWidth={1}
                  verticalAlign="middle"
                  align="center"
                />
              </Group>

              <Group ref={table2Ref} x={1265} y={485}>
                <Rect width={50} height={50} fill="green" shadowBlur={10} />
                <Text
                  text="2"
                  width={50}
                  height={50}
                  fontSize={20}
                  strokeWidth={1}
                  verticalAlign="middle"
                  align="center"
                />
              </Group>

              <Group ref={table3Ref} x={935} y={570}>
                <Rect width={50} height={50} fill="blue" shadowBlur={10} />
                <Text
                  width={50}
                  height={50}
                  fontSize={20}
                  text="3"
                  verticalAlign="middle"
                  align="center"
                />
              </Group>
              <Group ref={table4Ref} x={1265} y={570}>
                <Rect width={50} height={50} fill="yellow" shadowBlur={10} />
                <Text
                  width={50}
                  height={50}
                  text="4"
                  fontSize={20}
                  verticalAlign="middle"
                  align="center"
                />
              </Group>
              <Group ref={table6Ref} x={1265} y={780}>
                <Rect width={50} height={50} fill="red" shadowBlur={10} />
                <Text
                  width={50}
                  height={50}
                  text="6"
                  fontSize={20}
                  verticalAlign="middle"
                  align="center"
                />
              </Group>
              <Group ref={table5Ref} x={935} y={780}>
                <Rect width={50} height={50} fill="red" shadowBlur={10} />
                <Text
                  width={50}
                  height={50}
                  text="5"
                  fontSize={20}
                  verticalAlign="middle"
                  align="center"
                />
              </Group>

              <Group
                ref={robotRef}
                x={1335}
                y={860}
                onClick={toggleRobotControl}
              >
                <Rect width={50} height={50} fill="#3a4c99" shadowBlur={10} />

                <Line
                  x={40}
                  y={44}
                  points={[0, 0, 40, 0, 20, -30]}
                  closed
                  stroke="black"
                  rotation={270}
                  fill="#707278"
                />

                <Text
                  x={0}
                  y={-45}
                  width={60}
                  height={60}
                  fontSize={20}
                  text="R_001"
                  verticalAlign="middle"
                  align="center"
                />
              </Group>
            </Group>
          </Layer>
        </Stage>
      </div>
    </div>
  );
};
