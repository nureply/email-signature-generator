import Head from "next/head";

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

      <div className="flex w-full max-w-[1440px] mx-auto px-4 py-10 sm:px-6 lg:px-8 gap-x-8 items-start bg-background">
        <aside className="hidden sticky shrink-0 h-screen top-8 w-44 lg:block bg-window overflow-wrap">
          {/* Left column area */}
          <Step />
        </aside>

        <main className="flex-1 bg-window">
          {step === 1 && <Template />}
          {step === 2 && <Info />}
          {step === 3 && <Customization />}
        </main>

        <aside className="hidden sticky shrink-0 h-screen top-8 w-96 xl:block bg-window">
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
