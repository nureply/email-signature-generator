import clsx from "clsx";
import React, { Dispatch, SetStateAction } from "react";
import { useTemplateStore } from "@/store/templateStore";
import { AlignJustify, UserCircle } from "lucide-react";
import Heading from "./Heading";

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
    <div className="py-[36px] ">
      <div className="px-12 py-4">
        <Heading
          primary="Templates"
          secondary="Choose a template to start building your email signature"
        />
        <p className="text-fade text-sm">
          (The customization step is locked for plain text signatures)
        </p>
      </div>

      {templateData.map((item) => (
        <div
          key={item.id}
          onClick={() => {
            setTemplate(item.id);
          }}
          className={clsx(
            "bg-gray-200 mt-10 rounded-lg text-center w-4/5 lg:max-xl:w-1/3 md:max-lg:w-1/2 mx-auto cursor-pointer text-sm flex-auto border-2 border-gray-700",
            {
              "shadow-[0_0px_0px_3px_rgba(73,80,87,1)] font-semibold":
                item.id === template.id,
            }
          )}
        >
          {item.label}
          <div className="bg-window rounded-lg p-5 border-t-2 border-gray-700">
            {templatePicker(item.label)}
          </div>
        </div>
      ))}
    </div>
  );
};

const templatePicker = (type: string) => {
  switch (type) {
    case "Plain Text":
      return (
        <div className="flex flex-col justify-center ">
          <Text />
        </div>
      );
    case "Template 1 Right":
      return (
        <div className="flex justify-around m-3">
          <div>
            <div>
              <Text />
            </div>
            <div>
              <Icons />
            </div>
          </div>
          <div className="ml-4">
            <UserCircle size={75} color="#CFD4DA" />
          </div>
        </div>
      );
    case "Template 1 Left":
      return (
        <div className="flex justify-around m-3">
          <div className="mr-4">
            <UserCircle size={75} color="#CFD4DA" />
          </div>
          <div>
            <div>
              <Text />
            </div>
            <div>
              <Icons />
            </div>
          </div>
        </div>
      );
    case "Template 2 Left":
      return (
        <div className="flex justify-around m-3">
          <div>
            <div className="ml-8">
              <UserCircle size={75} color="#CFD4DA" />
            </div>
            <div>
              <Icons />
            </div>
          </div>
          <div>
            <Text />
          </div>
        </div>
      );
    case "Template 2 Right":
      return (
        <div className="flex justify-around m-3">
          <div>
            <Text />
          </div>
          <div>
            <div className="ml-4">
              <UserCircle size={75} color="#CFD4DA" />
            </div>
            <div>
              <Icons />
            </div>
          </div>
        </div>
      );
    case "Template 3 Top":
      return (
        <div className="flex-col gap-2 flex items-center">
          <UserCircle size={75} color="#CFD4DA" />
          <Text />
          <Icons />
        </div>
      );
    case "Template 3 Bottom":
      return (
        <div className="flex-col gap-2 flex items-center">
          <Text />
          <Icons />
          <UserCircle size={75} color="#CFD4DA" />
        </div>
      );
    default:
      return null;
  }
};

function Icons() {
  const numbers = [1, 2, 3, 4];

  return (
    <div className="flex mt-5 gap-3 px-3">
      {numbers.map((item) => (
        <div key={item} className="w-4 h-4 bg-gray-500 rounded-full"></div>
      ))}
    </div>
  );
}

function Text() {
  const numbers = [1, 2, 3, 4];

  return (
    <div className="flex flex-col gap-3">
      {numbers.map((item) => (
        <div
          key={item}
          className="w-[184px] max-sm:w-[116px] h-[12px] bg-gray-500 rounded-full"
        ></div>
      ))}
    </div>
  );
}
export default Template;
