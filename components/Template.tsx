import clsx from "clsx";
import React, { Dispatch, SetStateAction } from "react";

interface TemplateProps {
  templateType: string;
  handleTemplate: Dispatch<SetStateAction<string>>;
  isSelected: boolean;
}

const Template: React.FC<TemplateProps> = ({
  templateType,
  handleTemplate,
  isSelected,
}) => {
  const templatePicker = (type: string) => {
    switch (type) {
      case "Plain Text":
        return <Texts />;
      case "Template 1 Right":
        return (
          <div className="flex justify-around p-4 align-center">
            <div>
              <Texts />
              <Icons />
            </div>
            <ProfileIcon />
          </div>
        );
      case "Template 1 Left":
        return (
          <div className="flex justify-around p-4 alaign-center">
            <ProfileIcon />
            <div>
              <Texts />
              <Icons />
            </div>
          </div>
        );
      case "Template 2 Left":
        return (
          <div className="flex justify-around gap-5 p-4 align-center">
            <div className="flex-col">
              <ProfileIcon />
              <Icons />
            </div>
            <Texts />
          </div>
        );
      case "Template 2 Right":
        return (
          <div className="flex justify-around p-4 align-center">
            <Texts />
            <div className="flex-col">
              <ProfileIcon />
              <Icons />
            </div>
          </div>
        );
      case "Template 3 Top":
        return (
          <div className="flex-col gap-5 p-5">
            <ProfileIcon />
            <Texts />
            <Icons />
          </div>
        );
      case "Template 3 Bottom":
        return (
          <div className="flex-col gap-5 p-5">
            <Texts />
            <Icons />
            <ProfileIcon />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={clsx(
        "bg-gray-200 mt-10 rounded-lg text-center w-2/3 mx-auto cursor-pointer flex-auto",
        { "shadow-[0_0px_0px_3px_rgba(0,0,0,0.3)]": isSelected === true }
      )}
      onClick={() => handleTemplate(templateType)}
    >
      {templateType}
      <div className="bg-white rounded-lg">{templatePicker(templateType)}</div>
    </div>
  );
};

function Texts() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="grid grid-cols-3 gap-12 p-4">
      {numbers.map((item) => (
        <div key={item} className="w-20 h-2 bg-slate-200 rounded-3xl"></div>
      ))}
    </div>
  );
}

function Icons() {
  const numbers = [1, 2, 3, 4];

  return (
    <div className="flex mt-5 gap-5">
      {numbers.map((item) => (
        <div key={item} className="w-4 h-4 bg-stone-400 rounded-full"></div>
      ))}
    </div>
  );
}

function ProfileIcon() {
  return <div className="w-14 h-14 bg-stone-400 rounded-full mt-5"></div>;
}

export default Template;
