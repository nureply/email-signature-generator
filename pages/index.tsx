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
import { useStepStore } from "@/store/stepStore";
import { Preview } from "@/components/Preview";
import { useTemplateStore } from "@/store/templateStore";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { step } = useStepStore();
  const { template } = useTemplateStore();

  return (
    <div
      className="flex w-full max-w-[1440px] mx-auto px-4 py-10 sm:px-6 lg:px-8 gap-x-8 items-start
    bg-background"
    >
      <aside
        className="hidden sticky shrink-0 h-screen top-8
      w-44 lg:block
      bg-window overflow-wrap "
      >
        {/* Left column area */}
        <Step />
      </aside>

      <main
        className="flex-1
      bg-window"
      >
        {step === 1 && <Template />}
        {/*  {step === 2 && (
          <Info templateType={template} handleTemplate={handleTemplateChange} />
        )} */}
        {step === 3 && <div>{/* Style Changer Component */}</div>}
      </main>

      <aside
        className="hidden sticky shrink-0 h-screen top-8
      w-96 xl:block
      bg-window"
      >
        {/* Preview Component */}
        <Preview
          outerDiv={template.id}
          profileIcon={template.id}
          linkIcons={template.id}
          userInfo={template.id}
        />
      </aside>
    </div>
  );
}
