import React, { ChangeEvent } from "react";
import useCustomizationStore from "../store/customizationStore";

interface IColorPicker {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const ColorPicker = ({ label, id, name }: IColorPicker) => {
  const { customizationOutput, setCustomizationOutput } =
    useCustomizationStore();
  const color = customizationOutput[name as keyof typeof customizationOutput];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCustomizationOutput({ [name]: value.toUpperCase() });
  };
  const handleDefaultColorClick = (defaultColor: string) => {
    setCustomizationOutput({ [name]: defaultColor });
  };

  const isValidHex = color
    ? /^#[0-9A-Fa-f]{3}$|^#[0-9A-Fa-f]{6}$/.test(color.toString())
    : null;
  function getContrast(hexcolor: string) {
    if (hexcolor.length === 4) {
      hexcolor =
        "#" +
        hexcolor[1] +
        hexcolor[1] +
        hexcolor[2] +
        hexcolor[2] +
        hexcolor[3] +
        hexcolor[3];
    }
    const r = parseInt(hexcolor.slice(1, 3), 16);
    const g = parseInt(hexcolor.slice(3, 5), 16);
    const b = parseInt(hexcolor.slice(5, 7), 16);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000; // calculates the YIQ value of a color based on its RGB values
    return yiq >= 128 ? "black" : "white";
  }
  const textColor = isValidHex ? getContrast(color as string) : "black";

  return (
    <>
      <div className="m-2">
        <label className="block pb-2 font-semibold text-default" htmlFor={id}>
          {label}
        </label>
        <div className="flex items-center">
          <div className="relative">
            <input
              style={{
                width: "80px",
                backgroundColor: color as string,
                color: textColor,
              }}
              className={`w-full h-[40px] px-2 border-2 ${
                isValidHex === null
                  ? ""
                  : isValidHex
                  ? "border-valid"
                  : "border-invalid"
              } rounded-md focus:outline-none`}
              type="text"
              id={id}
              name={name}
              value={color}
              onChange={handleInputChange}
            />
          </div>
          <div className="ml-4">
            <button
              className="my-2 mr-2 px-2 py-1 rounded-lg text-sm font-semibold bg-[#000000] text-white cursor-pointer"
              onClick={() => handleDefaultColorClick("#000000")}
            >
              Default
            </button>
            <button
              className="my-2 mr-2 px-2 py-1 rounded-lg text-sm font-semibold bg-[#3B82F6] text-white cursor-pointer"
              onClick={() => handleDefaultColorClick("#3B82F6")}
            >
              Blue
            </button>
            <button
              className="my-2 mr-2 px-2 py-1 rounded-lg text-sm font-semibold bg-[#88F353] text-white cursor-pointer"
              onClick={() => handleDefaultColorClick("#88F353")}
            >
              Green
            </button>
            <button
              className="my-2 mr-2 px-2 py-1 rounded-lg text-sm font-semibold bg-[#F6F158] text-white cursor-pointer"
              onClick={() => handleDefaultColorClick("#F6F158")}
            >
              Yellow
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorPicker;
