import Head from "next/head";
import { useStepStore } from "@/store/stepStore";
import { useTemplateStore } from "@/store/templateStore";
import { Preview } from "@/components/Preview";
import Step from "@/components/Step";
import Template from "@/components/Template";
import Info from "@/components/Info";
import Customization from "@/components/Customization";

export default function Home() {
  const { step } = useStepStore();
  const { template } = useTemplateStore();

  return (
    <>
      <Head>
        <title>Email Signature Generator - Nureply</title>
      </Head>

      <div className="flex w-full py-10 bg-background">
        <aside className="sticky hidden basis-2/12 h-screen top-8 lg:block bg-window border-x-2 border-grays-4">
          <div className="grid justify-items-end"> <Step /></div>
        </aside>

        <main className=" basis-4/12 bg-window overflow-y-auto max-h-screen">
          {step === 1 && <Template />}
          {step === 2 && <Info />}
          {step === 3 && <Customization />}
        </main>

        <aside className="sticky hidden basis-6/12 h-screen top-8 p-5 xl:block bg-window border-x-2 border-grays-4">
          <div className="p-10">
            <Preview
              outerDiv={template.id}
              profileIcon={template.id}
              userInfo={template.id}
              linkIcons={template.id}
            />
          </div>
        </aside>
      </div>
    </>
  );
}

{
  /*overflow-y-auto basis-3/8 bg-window px-5 py-10 max-h-screen
sticky hidden basis-1/8 h-screen top-8 lg:block bg-window border-x-2 border-grays-4
basis-4/8 sticky hidden h-screen top-8 p-5 xl:block bg-window border-x-2 border-grays-4*/
}
