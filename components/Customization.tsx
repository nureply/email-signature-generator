import useCustomizationStore from "../store/customizationStore";

import Heading from "./Heading";
import FontChanger from "./FontChanger";
import Slider from "./Slider";
import ColorPicker from "./ColorPicker";

const Customization = () => {
  const {
    fontSize,
    iconSize,
    imageSize,
    backgroundColor,
    nameColor,
    textColor,
    linkColor,
    nameFont,
    handleChange
  } = useCustomizationStore();

  const sliderData = [
    {
      label: "Font Size",
      id: "fontSize",
      name: "fontSize",
      min: 12,
      max: 16,
      value: fontSize,
      step: 1,
    },
    {
      label: "Icon Size",
      id: "iconSize",
      name: "iconSize",
      min: 16,
      max: 24,
      value: iconSize,
      step: 1,
    },
    {
      label: "Image Size",
      id: "imageSize",
      name: "imageSize",
      min: 100,
      max: 120,
      value: imageSize,
      step: 1,
    },
  ];
  const colorPickerData = [
    {
      label: "Background Color",
      id: "backgroundColor",
      name: "backgroundColor",
      value: backgroundColor,
    },
    {
      label: "Name Color",
      id: "nameColor",
      name: "nameColor",
      value: nameColor,
    },
    {
      label: "Text Color",
      id: "textColor",
      name: "textColor",
      value: textColor,
    },
    {
      label: "Link Color",
      id: "linkColor",
      name: "linkColor",
      value: linkColor,
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
            style={{ fontFamily: nameFont }}
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
