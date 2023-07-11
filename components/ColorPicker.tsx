import React from "react";
import { SetStateAction, useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("");

  const onColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <input
        style={{ backgroundColor: color }}
        className="w-[40px] h-[40px] p-4 border-4 border-nureply-blue-full rounded-lg overflow-hidden"
        type="color"
        id="colorPicker"
        name="colorPicker"
        value={color}
        onChange={onColorChange}
      />
    </>
  );
};

export default ColorPicker;
