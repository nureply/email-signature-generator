import Head from "next/head";

import iconLinkedIn from "../assets/iconLinkedIn.png";
import iconGitHub from "../assets/iconGitHub.png";
import iconArtStation from "../assets/iconArtStation.png";
import iconYouTube from "../assets/iconYouTube.png";
import iconTwitter from "../assets/iconTwitter.png";
import iconInstagram from "../assets/iconInstagram.png";

import Header from "@/components/Header";
import Customization from "@/components/Customization";
import Info from "@/components/Info";
import Step from "@/components/Step";
import Template from "@/components/Template";
import { useStepStore } from "@/store/stepStore";
import { useTemplateStore } from "@/store/templateStore";
import { Preview } from "@/components/Preview";

export default function Home() {
  const { step } = useStepStore();
  const { template } = useTemplateStore();
  return (
    <>
      <Head>
        <title>Email Signature Generator - Nureply</title>
      </Head>

      <div className="">
        <Header />
      </div>

      <div className="flex w-full max-w-[1440px] mx-auto px-4 py-10 sm:px-6 lg:px-8 bg-background gap-8">
        <aside className="sticky hidden basis-1/6 h-screen top-8 lg:block bg-window ">
          {/* Left column area */}
          <Step />
        </aside>

        <main className=" basis-2/6 bg-window overflow-y-auto">
          {step === 1 && <Template />}
          {step === 2 && <Info />}
          {step === 3 && <Customization />}
        </main>

        <aside className="sticky hidden  basis-3/6 h-screen top-8 p-5 xl:block bg-window">
          <Preview
            outerDiv={template.id}
            profileIcon={template.id}
            userInfo={template.id}
            linkIcons={template.id}
          />
        </aside>
      </div>
    </>
  );
}
