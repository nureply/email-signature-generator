import useCustomizationStore from "../store/customizationStore";

import Slider from "./Slider";
import ColorPicker from "./ColorPicker";

const Customization = () => {
  const { output, setOutput, handleChange } = useCustomizationStore();

  const sliderData = [
    {
      label: "Font Size",
      id: "fontSize",
      name: "fontSize",
      min: 12,
      max: 16,
      value: output.fontSize,
      step: 1,
    },
    {
      label: "Icon Size",
      id: "iconSize",
      name: "iconSize",
      min: 16,
      max: 24,
      value: output.iconSize,
      step: 1,
    },
    {
      label: "Image Size",
      id: "imageSize",
      name: "imageSize",
      min: 100,
      max: 120,
      value: output.imageSize,
      step: 1,
    },
  ];
  const colorPickerData = [
    {
      label: "Name Color",
      id: "nameColor",
      name: "nameColor",
    },
    {
      label: "Text Color",
      id: "textColor",
      name: "textColor",
    },
    {
      label: "Link Color",
      id: "linkColor",
      name: "linkColor",
    },
  ];

  return (
    <>
      <div className="m-8">
        <div className="w-full p-4 border-b border-background">
          <h1 className="text-2xl font-bold text-nureply-blue-full underline decoration-nureply-blue">
            Customization
          </h1>
          <p className="text-base text-default">
            Customize the styling of your email signature
          </p>
        </div>

        <div className="w-full p-4">
          {sliderData.map((item) => (
            <Slider key={item.id} {...item} onChange={handleChange} />
          ))}
        </div>
        {colorPickerData.map((item) => (
          <ColorPicker
            key={item.id}
            {...item}
            value="nureply-blue-full"
            onChange={handleChange}
          />
        ))}
      </div>
    </>
  );
};

export default Customization;
