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
import Upload from "@/components/Upload";

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

      <div className="flex w-full bg-background">
        <aside className="sticky hidden basis-1/12 h-screen top-8 lg:block bg-window ">
          {/* Left column area */}
          <div className="grid justify-items-end">
            <Step />
          </div>
        </aside>

        <main
          className={clsx(
            " bg-window overflow-y-auto max-h-screen border-l-2 border-gray-400",
            step === 0 ? "basis-11/12" : "basis-3/12"
          )}
        >
          {step === 0 && <Upload />}
          {step === 1 && <Template />}
          {step === 2 && <Info />}
          {step === 3 && <Customization />}
        </main>

        {step !== 0 && (
          <aside className="sticky hidden basis-8/12 h-screen top-8 p-5 xl:block bg-window border-x-2 border-gray-400">
            <div className="p-10">
              <Preview />
            </div>
          </aside>
        )}
      </div>
    </>
  );
}
