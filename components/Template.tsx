import React from "react";
import { Info, UserCircle } from "lucide-react";
import clsx from "clsx";

import { useTemplateStore } from "@/store/templateStore";
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
    label: "Image Left",
    id: "template1Left",
  },
  {
    label: "Image Right",
    id: "template1Right",
  },
  {
    label: "Icons Left",
    id: "template2Left",
  },
  {
    label: "Icons Right",
    id: "template2Right",
  },
  {
    label: "Image Top",
    id: "template3Top",
  },
  {
    label: "Image Bottom",
    id: "template3Bottom",
  },
];

const Template = () => {
  const { template, setTemplate } = useTemplateStore();

  return (
    <div className="py-[36px]">
      <div className="px-12 py-4">
        <Heading
          primary="Templates"
          secondary="Choose a template to start building your email signature"
        />
        <div className="flex items-center pt-3">
          <Info className="w-4 h-4 text-fade" />
          <p className="ml-1 text-sm text-fade">
            Next steps are locked for plain text signatures
          </p>
        </div>
      </div>

      {templateData.map((item) => (
        <div
          key={item.id}
          onClick={() => {
            setTemplate(item.id);
          }}
          className={clsx(
            "flex-auto w-4/5 mx-auto mt-10 bg-background border-2 border-fade rounded-lg text-center text-xs md:max-lg:w-1/2 lg:max-xl:w-3/5 cursor-pointer",
            {
              "font-semibold shadow-[0_0px_0px_3px_rgba(73,80,87,1)]":
                item.id === template.id,
            }
          )}
        >
          {item.label}
          <div className="p-5 bg-window border-t-2 border-fade rounded-lg">
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

    case "Image Right":
      return (
        <div className="flex justify-around lg:max-xl:justify-center m-3">
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

    case "Image Left":
      return (
        <div className="flex justify-around lg:max-xl:justify-center m-3">
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

    case "Icons Left":
      return (
        <div className="flex justify-around lg:max-xl:justify-center m-3">
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

    case "Icons Right":
      return (
        <div className="flex justify-around lg:max-xl:justify-center m-3">
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

    case "Image Top":
      return (
        <div className="flex flex-col items-center gap-2">
          <UserCircle size={75} color="#CFD4DA" />
          <Text />
          <Icons />
        </div>
      );

    case "Image Bottom":
      return (
        <div className="flex flex-col items-center gap-2">
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
    <div className="flex mt-5 px-3 gap-3">
      {numbers.map((item) => (
        <div key={item} className="w-3 h-3 bg-highlight rounded-full"></div>
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
          className="w-[116px] sm:w-[165px] lg:max-xl:w-[216px] h-[12px] bg-highlight rounded-full"
        ></div>
      ))}
    </div>
  );
}
export default Template;
