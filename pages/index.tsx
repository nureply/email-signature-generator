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

      <div className="flex w-full py-[16px] bg-background">
        <aside className="sticky hidden basis-2/12 h-screen top-8 lg:block bg-window border-x-2 border-gray-400">
          {/* Left column area */}
          <div className="grid justify-items-end">
            <Step />
          </div>
        </aside>

        <main
          className={clsx(
            " basis-4/12 bg-window overflow-y-auto max-h-screen",
            {
              "basis-10/12": step === 0,
            }
          )}
        >
          {step === 1 && <Template />}
          {step === 2 && <Info />}
          {step === 3 && <Customization />}
        </main>

        {step != 0 && (
          <aside className="sticky hidden basis-6/12 h-screen top-8 p-5 xl:block bg-window border-x-2 border-gray-400">
            <div className="p-10">
              <Preview />
            </div>
          </aside>
        )}
      </div>
    </>
  );
}
