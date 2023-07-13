import clsx from "clsx";
import React, { Dispatch, SetStateAction } from "react";

interface TemplateProps {
  templateType: string;
  handleTemplate: Dispatch<SetStateAction<string>>;
}

const templates = [
  "Plain Text",
  "Template 1 Left",
  "Template 1 Right",
  "Template 2 Left",
  "Template 2 Right",
  "Template 3 Top",
  "Template 3 Bottom",
];

const Template = ({ templateType, handleTemplate }: TemplateProps) => {
  return (
    <>
      {templates.map((item) => {
        return (
          <div
            key={item}
            onClick={() => handleTemplate(item)}
            className={clsx(
              "bg-gray-200 mt-10 rounded-lg text-center w-2/3 mx-auto cursor-pointer flex-auto",
              {
                "shadow-[0_0px_0px_3px_rgba(0,0,0,0.3)]": item === templateType,
              }
            )}
          >
            {item}
            <div className="bg-gray-100">{templatePicker(item)}</div>
          </div>
        );
      })}
    </>
  );
};

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
        <div className="flex justify-around p-4 align-center">
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

function Texts() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="grid grid-cols-3 gap-12 p-4">
      {numbers.map((item) => (
        <div key={item} className="w-20 h-2 bg-slate-400 rounded-3xl"></div>
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
