import React from "react";
import { SetStateAction, useState } from "react";

import Image from "next/image";

import iconLinkedIn from "../assets/iconLinkedIn.png";
import iconGitHub from "../assets/iconGitHub.png";
import iconArtStation from "../assets/iconArtStation.png";
import iconYouTube from "../assets/iconYouTube.png";
import iconTwitter from "../assets/iconTwitter.png";
import iconInstagram from "../assets/iconInstagram.png";

import Step from "@/components/Step";
import TemplateTitle from "@/components/Heading";
import Template from "@/components/Template";
import Info from "@/components/Info";
import Customization from "@/components/Customization";

import { Inter } from "next/font/google";
import Heading from "@/components/Heading";

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
  const [step, setStep] = useState(1);
  const [template, setTemplate] = useState("");

  const handleTemplateChange = (selectedTemplate: SetStateAction<string>) => {
    setTemplate(selectedTemplate);
  };

  const handleSetStep = (selectedStep: SetStateAction<number>) => {
    setStep(selectedStep);
  };

  return (
    <div
      className="flex w-full max-w-[1440px] mx-auto px-4 py-10 sm:px-6 lg:px-8 gap-x-8 items-start
    bg-background"
    >
      <aside
        className="hidden sticky shrink-0 h-screen top-8
      w-44 lg:block
      bg-window overflow-wrap p-6"
      >
        {/* Left column area */}
        <Step setStep={handleSetStep} step={step} />
      </aside>

      <main
        className="flex-1 h-[200vh]
      bg-window overflow-y-scroll"
      >
        {step === 1 && (
          <Template
            templateType={template}
            handleTemplate={handleTemplateChange}
          />
        )}
        {step === 2 && (
          <Info templateType={template} handleTemplate={handleTemplateChange} />
        )}
        {step === 3 && <div>{/* Style Changer Component */}</div>}
      </main>

      <aside
        className="hidden sticky shrink-0 h-screen top-8
      w-96 xl:block
      bg-window"
      >
        {/* Preview Component */}
      </aside>
    </div>
  );
}
