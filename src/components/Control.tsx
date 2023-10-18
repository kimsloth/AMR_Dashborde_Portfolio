import img from "./components/image/map.jpg";
import _ from "lodash";
import { ComponentProps, useEffect, useRef, useState } from "react";

import { Stage, Layer, Rect, Image } from "react-konva";

export const PageTwo = () => {
  const [image, setImage] = useState<HTMLImageElement>();
  const imageRef: ComponentProps<typeof Image>["ref"] = useRef(null);

  useEffect(() => {
    const mapImage = new window.Image();
    mapImage.src = img;

    mapImage.onload = () => {
      imageRef.current.crop({ x: 0, y: 0, width: 700, height: 700 });
      imageRef.current.width(1600);
      imageRef.current.height(1600);
      console.log(mapImage, "mapImage");

      setImage(mapImage);
    };
  }, []);

  const deleteLayoutItem = () => {
    console.log("currentLayout2");
  };

  return (
    <div className="container-fluid">
      <Stage width={window.innerWidth - 20} height={window.innerHeight - 20}>
        <Layer>
          <Image image={image} ref={imageRef} />

          <Rect
            x={50}
            y={50}
            width={50}
            height={50}
            fill={"red"}
            stroke={"black"}
            shadowBlur={3}
            draggable={true}
            onClick={deleteLayoutItem}
          />
          <Rect
            x={75}
            y={75}
            width={50}
            height={50}
            fill={"gray"}
            stroke={"black"}
            shadowBlur={3}
            draggable={true}
          />
        </Layer>
      </Stage>
    </div>
  );
};
