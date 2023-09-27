import { useEffect, useState } from "react";
import Head from "next/head";
import clsx from "clsx";
import Header from "@/components/Header";
import Welcome from "@/components/Welcome";
import Step from "@/components/Step";
import { useStepStore } from "@/store/stepStore";
import Template from "@/components/Template";
import Info from "@/components/Info";
import Customization from "@/components/Customization";
import { Preview } from "@/components/Preview";

export default function Home() {
  const { step } = useStepStore();
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isWideScreen = windowWidth >= 1280;

  return (
    <>
      <Head>
        <title>Email Signature Generator - Nureply</title>
      </Head>

      <div>
        <Header />
      </div>

      <div className="flex flex-row w-full bg-window">
        <div
          className={clsx(
            "flex-row",
            step === 0 || !isWideScreen ? "w-full" : "w-3/12"
          )}
        >
          <div className="grid xl:grid-cols-4 grid-cols-5 justify-items-center bg-gray-100 border-b-2 border-b-gray-400 ">
            <Step />
          </div>
          <div>
            <main className={clsx("bg-window border-l-2 border-gray-400 pt-5")}>
              {step === 0 && <Welcome />}
              {step === 1 && <Template />}
              {step === 2 && <Info />}
              {step === 3 && <Customization />}
              {step === 4 && (
                <div className="px-5 pt-10">
                  <Preview />
                </div>
              )}
            </main>
          </div>
        </div>

        {step !== 0 && isWideScreen && (
          <div className="w-9/12 bg-window border-x-2 border-gray-400">
            <div className="m-10">
              <Preview />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
