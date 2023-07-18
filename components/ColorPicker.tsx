import React, { useState } from "react";

type ChangeOrMouseEvent = React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>;

interface IColorPicker {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (event: ChangeOrMouseEvent) => void;
}

const ColorPicker = ({ label, id, name, value, onChange }: IColorPicker) => {
  const [color, setColor] = useState("");

  const handleDefaultColorClick = (defaultColor: string) => {
    setColor(defaultColor);
    onChange({ target: { name, value: defaultColor } } as ChangeOrMouseEvent); 
  };

  const onColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
    onChange(e);
  };

  return (
    <>
      <div className="m-2">
        <label className="block pb-2 font-semibold text-default" htmlFor={id}>
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
        <div>
          <button
            className="px-2 py-1 mt-2 mr-2 text-sm font-semibold text-white bg-nureply-blue-full rounded-lg cursor-pointer"
            onClick={() => handleDefaultColorClick("#f44336")} 
          >
            Default
          </button>
          <button
            className="px-2 py-1 mt-2 mr-2 text-sm font-semibold text-white bg-black rounded-lg cursor-pointer"
            onClick={() => handleDefaultColorClick("#000000")} 
          >
            Black
          </button>
          <button
            className="px-2 py-1 mt-2 mr-2 text-sm font-semibold text-white bg-[#FF00FF] rounded-lg cursor-pointer"
            onClick={() => handleDefaultColorClick("#FF00FF")} 
          >
            Fuchsia
          </button>
        </div>
      </div>
    </>
  );
};

export default ColorPicker;
