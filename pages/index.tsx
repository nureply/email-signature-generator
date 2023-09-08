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

      <div className="flex w-full py-10 bg-background">
        <aside className="sticky hidden lg:block basis-2/12 h-screen top-8 bg-window border-x-2 border-gray-400">
          {/* Sol sütun alanı */}
          <div className="grid justify-items-end">
            <Step />
          </div>
        </aside>

        <main className={`basis-${step === 0 ? '10' : '4'}/12 bg-window overflow-y-auto max-h-screen`}>
          {step === 0 && <Upload />}
          {step === 1 && <Template />}
          {step === 2 && <Info />}
          {step === 3 && <Customization />}
        </main>

        {step !== 0 && (
          <aside className="sticky hidden xl:block basis-6/12 h-screen top-8 p-5 bg-window border-x-2 border-gray-400">
            <div className="p-10">
              <Preview />
            </div>
          </aside>
        )}
      </div>
    </>
  );
}
