import useCustomizationStore from "../store/customizationStore";

import Heading from "./Heading";
import Slider from "./Slider";
import ColorPicker from "./ColorPicker";

const Customization = () => {
  const { customizationOutput, setCustomizationOutput, handleChange } = useCustomizationStore();

  const sliderData = [
    {
      label: "Font Size",
      id: "fontSize",
      name: "fontSize",
      min: 12,
      max: 16,
      value: customizationOutput.fontSize,
      step: 1,
    },
    {
      label: "Icon Size",
      id: "iconSize",
      name: "iconSize",
      min: 16,
      max: 24,
      value: customizationOutput.iconSize,
      step: 1,
    },
    {
      label: "Image Size",
      id: "imageSize",
      name: "imageSize",
      min: 100,
      max: 120,
      value: customizationOutput.imageSize,
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
          <Heading
            primary="Customization"
            secondary="Customize the styling of your email signature"
          />
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
