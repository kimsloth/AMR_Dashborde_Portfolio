import { useMemo, useState } from "react";

import { Joystick } from "react-joystick-component";
import { IJoystickUpdateEvent } from "react-joystick-component/build/lib/Joystick";

const JoystickController = ({ move, start, stop, opactiy = 1.0, size }) => {
  const [activeTab, setActiveTab] = useState("1");

  const baseColor = useMemo(
    () =>
      `radial-gradient(circle at 50% 50%, rgba(100,100,100,${opactiy}), rgba(100,100,100,${opactiy}), rgba(100,100,100,${opactiy}),  rgba(5,5,5,${opactiy}))`,
    [opactiy]
  );
  const stickColor = useMemo(
    () =>
      `radial-gradient(circle at 50% 50%, rgba(70,70,70,${opactiy}), rgba(70,70,70,${opactiy}), rgba(5,5,5,${opactiy}))`,
    [opactiy]
  );

  return (
    <div>
      <Joystick
        size={size}
        baseColor={baseColor}
        stickColor={stickColor}
        throttle={200}
        move={move}
        stop={stop}
        start={start}
      />
    </div>
  );
};

export default JoystickController;
