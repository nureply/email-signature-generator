import React from "react";
import { SetStateAction, useState } from "react";

import Image from "next/image";

import iconLinkedIn from "../assets/iconLinkedIn.png";
import iconGitHub from "../assets/iconGitHub.png";
import iconTwitter from "../assets/iconTwitter.png";

import { Inter } from "next/font/google";
import Template from "@/components/Template";
import Step from "@/components/Step";

const inter = Inter({ subsets: ["latin"] });
const templates = [
  "Plain Text",
  "Template 1 Left",
  "Template 1 Right",
  "Template 2 Left",
  "Template 2 Right",
  "Template 3 Top",
  "Template 3 Bottom",
];
const parts = [1, 2, 3];

export default function Home() {
  const [template, setTemplate] = useState("");
  const handleTemplateChange = (selectedTemplate: SetStateAction<string>) => {
    setTemplate(selectedTemplate);
  };
  return (
    <div className="mx-auto flex w-full max-w-[1440px] items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8">
      <aside className="sticky h-screen bg-red-200 top-8 hidden w-44 shrink-0 lg:block">
        {/* Left column area */}
        <div className="">
          {parts.map((item) => (
            <Step part={item} key={item} />
          ))}
        </div>
      </aside>

      <main className="flex-1 h-[200vh] bg-green-200">
        {/* Main area */}
        <div className="">
          {templates.map((item) => (
            <Template
              isSelected={item === template}
              templateType={item}
              handleTemplate={handleTemplateChange}
              key={item}
            />
          ))}
        </div>
      </main>

      <aside className="sticky top-8 bg-blue-200 h-screen hidden w-96 shrink-0 xl:block">
        {/* Right column area */}
      </aside>
    </div>
  );
}
