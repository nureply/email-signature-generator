import useCustomizationStore from "../store/customizationStore";

import Heading from "./Heading";
import FontChanger from "./FontChanger";
import Slider from "./Slider";
import ColorPicker from "./ColorPicker";

const Customization = () => {
  const { customizationOutput, handleChange } = useCustomizationStore();

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
      value: customizationOutput.nameColor,
    },
    {
      label: "Text Color",
      id: "textColor",
      name: "textColor",
      value: customizationOutput.textColor,
    },
    {
      label: "Link Color",
      id: "linkColor",
      name: "linkColor",
      value: customizationOutput.linkColor,
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

        <div>
          <p
            className="mt-4 px-4"
            style={{ fontFamily: customizationOutput.nameFont }}
          >
            Select a custom font
          </p>
          <FontChanger />
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
            value={item.value}
            onChange={handleChange}
          />
        ))}
      </div>
    </>
  );
};

export default Customization;
