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
  const { setCustomizationOutput } = useCustomizationStore();
  const color = useCustomizationStore((state) => state[name as keyof typeof state]) as string;

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
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
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
              className={`w-full h-[40px] px-2 border-2 ${isValidHex === null
                ? ""
                : isValidHex
                  ? "border-valid"
                  : "border-invalid"
                } rounded-md focus:outline-none placeholder-fade`}
              placeholder="#"
              type="text"
              id={id}
              name={name}
              value={color}
              onChange={handleInputChange}
              onClick={(e) => {
                if (!e.currentTarget.value) {
                  setCustomizationOutput({ [name]: "#" });
                }
              }}
            />
          </div>
          <div className="ml-4">
            <button
              className="my-2 mr-2 p-4 rounded-full text-sm font-semibold bg-[#F6F158] text-white cursor-pointer"
              onClick={() => handleDefaultColorClick("#F6F158")}
            ></button>
            <button
              className="my-2 mr-2 p-4 rounded-full text-sm font-semibold bg-[#FFC300] text-white cursor-pointer"
              onClick={() => handleDefaultColorClick("#FFC300")}
            ></button>
            <button
              className="my-2 mr-2 p-4 rounded-full text-sm font-semibold bg-[#88F353] text-white cursor-pointer"
              onClick={() => handleDefaultColorClick("#88F353")}
            ></button>
            <button
              className="my-2 mr-2 p-4 rounded-full text-sm font-semibold bg-[#4DA000] text-white cursor-pointer"
              onClick={() => handleDefaultColorClick("#4DA000")}
            ></button>
            <button
              className="my-2 mr-2 p-4 rounded-full text-sm font-semibold bg-[#006B20] text-white cursor-pointer"
              onClick={() => handleDefaultColorClick("#006B20")}
            ></button>
            <button
              className="my-2 mr-2 p-4 rounded-full text-sm font-semibold bg-[#3B82F6] text-white cursor-pointer"
              onClick={() => handleDefaultColorClick("#3B82F6")}
            ></button>
            <button
              className="my-2 mr-2 p-4 rounded-full text-sm font-semibold bg-[#808DFF] text-white cursor-pointer"
              onClick={() => handleDefaultColorClick("#808DFF")}
            ></button>
            <button
              className="my-2 mr-2 p-4 rounded-full text-sm font-semibold bg-[#FF5733] text-white cursor-pointer"
              onClick={() => handleDefaultColorClick("#FF5733")}
            ></button>
            <button
              className="my-2 mr-2 p-4 rounded-full text-sm font-semibold bg-[#FF604B] text-white cursor-pointer"
              onClick={() => handleDefaultColorClick("#FF604B")}
            ></button>
            <button
              className="my-2 mr-2 p-4 rounded-full text-sm font-semibold bg-[#900C22] text-white cursor-pointer"
              onClick={() => handleDefaultColorClick("#900C22")}
            ></button>
            <button
              className="my-2 mr-2 p-4 rounded-full text-sm font-semibold bg-[#000000] text-white cursor-pointer"
              onClick={() => handleDefaultColorClick("#000000")}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorPicker;
