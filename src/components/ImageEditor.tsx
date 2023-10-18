import { useEffect, useRef, useState } from "react";

// import { img } from "./image/화면 캡처 2023-09-17 230652.png";
import { Card, CardBody, CardHeader } from "reactstrap";

export function ImageEditor({ item, currentLayout }) {
  const cardBodyMargin = 30 * 2;
  const paddingDrag = 10;
  const maxRow = 55;
  const sumStatic = cardBodyMargin - paddingDrag;

  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);

  const [isDrawing, setIsDrawing] = useState(false);

  const img = new Image();

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 500;
    canvas.height = 500;

    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 5;
    contextRef.current = context;
    // img.src = "../img/img_patrn.png";
    // img.src = "../img/img_patrn.png";

    img.onload = function () {
      context.drawImage(img, 100, 100);
    };
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    setIsDrawing(true);
    nativeEvent.preventDefault();
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }

    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    nativeEvent.preventDefault();
  };

  const stopDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const setToDraw = () => {
    contextRef.current.globalCompositeOperation = "source-over";
  };

  const setToErase = () => {
    contextRef.current.globalCompositeOperation = "destination-out";
  };

  const saveImageToLocal = (event) => {
    let link = event.currentTarget;
    link.setAttribute("download", "canvas.png");
    let image = canvasRef.current.toDataURL("image/png");
    link.setAttribute("href", image);
  };

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
      <CardHeader className={"drag-header"}>
        Chart2 - Drag & Drop of Heder
      </CardHeader>
      <CardBody>
        <div>
          <button onClick={setToDraw}>Draw</button>
          <button onClick={setToErase}>Erase</button>
          <a
            id="download_image_link"
            href="download_link"
            onClick={saveImageToLocal}
          >
            Download Image
          </a>

          <canvas
            className="canvas-container"
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
          ></canvas>
          <div></div>
        </div>
      </CardBody>
    </Card>
  );
}
