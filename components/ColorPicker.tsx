import React from "react";
import { SetStateAction, useState } from "react";

interface IColorPicker {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const ColorPicker = ({ label, id, name, value, onChange }: IColorPicker) => {
  const [color, setColor] = useState("");

  const onColorChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setColor(e.target.value);
  };

  return (
    <>
      <label className="block p-2 font-semibold text-default" htmlFor={id}>
        {label}
      </label>
      <input
        style={{ backgroundColor: color }}
        className="w-[40px] h-[40px] p-4 border-4 border-nureply-blue-full rounded-lg overflow-hidden"
        type="color"
        id={id}
        name={name}
        value={color}
        onChange={onColorChange}
      />
    </>
  );
};

export default ColorPicker;
