import React from "react";
import { SetStateAction, useState } from "react";

import Slider from "./Slider";
import ColorPicker from "./ColorPicker";

const Customization = () => {
  const [output, setOutput] = useState({
    fontSize: "",
    iconSize: "",
  });

  const handleChange = (e) => {
    setOutput({ ...output, [e.target.name]: e.target.value });
  };

  const sliderData = [
    {
      label: "Font Size",
      id: "fontSize",
      name: "fontSize",
      min: 12,
      max: 16,
      value: 12,
      step: 1,
    },
    {
      label: "Icon Size",
      id: "iconSize",
      name: "iconSize",
      min: 16,
      max: 24,
      value: 16,
      step: 1,
    },
  ];

  return (
    <>
      <div className="m-8">
        <div
          className="w-full p-4
        border-b border-gray-100"
        >
          <h1 className="text-2xl font-bold text-nureply-blue-full underline decoration-nureply-blue">
            Customization
          </h1>
          <p className="text-base text-default">
            Customize the styling of your email signature
          </p>
        </div>
        <div className="w-full p-4">
          {sliderData.map((item) => (
            <Slider
              label={item.label}
              id={item.id}
              name={item.name}
              min={item.min}
              max={item.max}
              value={item.value}
              step={item.step}
              onChange={handleChange}
            />
          ))}
        </div>
        <ColorPicker />
      </div>
    </>
  );
};

export default Customization;
