import Head from "next/head";
import Customization from "@/components/Customization";
import Header from "@/components/Header";
import Info from "@/components/Info";
import { Preview } from "@/components/Preview";
import Step from "@/components/Step";
import Template from "@/components/Template";
import { useStepStore } from "@/store/stepStore";
import { useTemplateStore } from "@/store/templateStore";
import Signature from "@/components/Signature";
import clsx from "clsx";
import Welcome from "@/components/Welcome";
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

      <div className="flex flex-col xl:flex-row w-full bg-background">
        <aside className="xl:sticky xl:basis-1/12 xl:h-screen xl:top-8 xl:block bg-window ">
          {/* Left column area */}
          <div className=" flex xl:flex-col xl:grid flex-row justify-items-end">
            <Step />
          </div>
        </aside>

        <main
          className={clsx(
            " bg-window overflow-y-auto max-h-screen border-l-2 border-gray-400",
            step === 0 ? "xl:basis-11/12" : "xl:basis-4/12",
          )}
        >
          {step === 0 && <Welcome />}
          {step === 1 && <Template />}
          {step === 2 && <Info />}
          {step === 3 && <Customization />}
          {step === 4 && <Preview />}
        </main>

        {step !== 0 && (
          <aside className="hidden xl:block sticky basis-7/12 h-screen top-8 p-5 bg-window border-x-2 border-gray-400">
            <div className="p-10">
              <Preview />
            </div>
          </aside>
        )}
      </div>
    </>
  );
}
