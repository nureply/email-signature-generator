import clsx from "clsx";
import React, { Dispatch, SetStateAction } from "react";
import { useTemplateStore } from "@/store/templateStore";
import { AlignJustify, UserCircle } from "lucide-react";

const templateData: {
  label: string;
  id:
    | "plainText"
    | "template1Left"
    | "template1Right"
    | "template2Left"
    | "template2Right"
    | "template3Top"
    | "template3Bottom"
    | "initial";
}[] = [
  {
    label: "Plain Text",
    id: "plainText",
  },
  {
    label: "Template 1 Left",
    id: "template1Left",
  },
  {
    label: "Template 1 Right",
    id: "template1Right",
  },
  {
    label: "Template 2 Left",
    id: "template2Left",
  },
  {
    label: "Template 2 Right",
    id: "template2Right",
  },
  {
    label: "Template 3 Top",
    id: "template3Top",
  },
  {
    label: "Template 3 Bottom",
    id: "template3Bottom",
  },
];

const Template = () => {
  const { template, setTemplate } = useTemplateStore();

  return (
    <>
      {templateData.map((item) => (
        <div
          key={item.id}
          onClick={() => {
            setTemplate(item.id);
          }}
          className={clsx(
            "bg-gray-200 mt-10 rounded-lg text-center w-2/3 mx-auto cursor-pointer flex-auto",
            {
              "shadow-[0_0px_0px_5px_rgba(0,0,0,0.3)]": item.id === template.id,
            }
          )}
        >
          {item.label}
          <div className="bg-gray-100 rounded-lg">
            {templatePicker(item.label)}
          </div>
        </div>
      ))}
    </>
  );
};

const templatePicker = (type: string) => {
  switch (type) {
    case "Plain Text":
      return (
        <div className="flex justify-center">
          <AlignJustify size={96} color="#36383a" />
          <AlignJustify size={96} color="#36383a" />
        </div>
      );
    case "Template 1 Right":
      return (
        <div className="flex justify-around p-5 pl-10 align-center">
          <div>
            <div className="flex">
              <AlignJustify size={96} color="#36383a" />
              <AlignJustify size={96} color="#36383a" />
            </div>
            <Icons />
          </div>
          <div className="flex justify-center mt-5 mr-5">
            <UserCircle size={60} color="#36383a" />
          </div>
        </div>
      );
    case "Template 1 Left":
      return (
        <div className="flex justify-around p-4 align-center">
          <div className="flex justify-center mt-7 ml-5">
            <UserCircle size={60} color="#36383a" />
          </div>
          <div>
            <div className="flex">
              <AlignJustify size={96} color="#36383a" />
              <AlignJustify size={96} color="#36383a" />
            </div>
            <Icons />
          </div>
        </div>
      );
    case "Template 2 Left":
      return (
        <div className="grid grid-cols-2 p-5">
          <div className="flex order-3">
            <AlignJustify size={96} color="#36383a" />
            <AlignJustify size={96} color="#36383a" />
          </div>
          <div>
            <UserCircle className="order-2 ml-5" size={60} color="#36383a" />
            <div className="m-3 gap-2 flex order-1">
              <Icons />
            </div>
          </div>
        </div>
      );
    case "Template 2 Right":
      return (
        <div className="grid grid-cols-2 p-5">
          <div className="flex">
            <AlignJustify size={96} color="#36383a" />
            <AlignJustify size={96} color="#36383a" />
          </div>
          <div>
            <UserCircle className="ml-8" size={60} color="#36383a" />
            <div className="m-3 gap-2 flex">
              <Icons />
            </div>
          </div>
        </div>
      );
    case "Template 3 Top":
      return (
        <div className="flex-col p-5 flex items-center">
          <UserCircle size={60} color="#36383a" />
          <div className="flex">
            <AlignJustify size={96} color="#36383a" />
            <AlignJustify size={96} color="#36383a" />
          </div>
          <div className="m-3 gap-2 flex">
            <Icons />
          </div>
        </div>
      );
    case "Template 3 Bottom":
      return (
        <div className="flex-col p-5 flex items-center">
          <div className="flex">
            <AlignJustify size={96} color="#36383a" />
            <AlignJustify size={96} color="#36383a" />
          </div>
          <div className="m-3 gap-2 flex">
            <Icons />
          </div>
          <UserCircle size={60} color="#36383a" />
        </div>
      );
    default:
      return null;
  }
};

function Icons() {
  const numbers = [1, 2, 3, 4];

  return (
    <div className="flex mt-5 gap-5">
      {numbers.map((item) => (
        <div key={item} className="w-4 h-4 bg-gray-800 rounded-full"></div>
      ))}
    </div>
  );
}

export default Template;
