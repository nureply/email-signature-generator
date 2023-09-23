import React, { useState } from "react";
type ChangeOrMouseEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.MouseEvent<HTMLButtonElement>;
interface IColorPicker {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (event: ChangeOrMouseEvent, color: string) => void;
}
const ColorPicker = ({ label, id, name, value, onChange }: IColorPicker) => {
  const [color, setColor] = useState("#000");
  const handleDefaultColorClick = (defaultColor: string) => {
    setColor(defaultColor);
    onChange({} as ChangeOrMouseEvent, defaultColor);
  };
  const onColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
    onChange(e, e.target.value);
  };
  return (
    <>
      <div
        className="m-2"
        style={{
          backgroundColor: "white",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <label
          className="block pb-2 font-semibold text-default"
          htmlFor={id}
          style={{ fontFamily: "inherit" }}
        >
          {label}
        </label>
        <div className="flex relative w-full justify-between items-center gap-2">
          <div
            style={{
              border: "2px solid #CBD5E0",
              borderRadius: "5px",
              width: "91%",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>{value}</p>
          </div>
          <div className="border-2 border-[#CBD5E0] rounded-full w-[40px] h-[40px] flex justify-center items-center">
            <input
              style={{
                opacity: 0,
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              type="color"
              id={id}
              name={name}
              value={value}
              onChange={onColorChange}
            />
            <div
              style={{
                backgroundColor: value,
                borderRadius: "100%",
                width: "80%",
                height: "80%",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ColorPicker;
function convertHexToRGB(hex: string): string {
  hex = hex.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgb(${r}, ${g}, ${b})`;
}
