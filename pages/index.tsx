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
import { useEffect, useState } from "react";

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

  return (
    <>
      <Head>
        <title>Email Signature Generator - Nureply</title>
      </Head>

      <div>
        <Header />
      </div>

      <div className="flex flex-row w-full bg-background">
        <div
          className={clsx(
            "flex-row",
            step === 0 || windowWidth < 1280 ? "w-full" : "w-3/12"
          )}
        >
          <div className="grid grid-cols-5 justify-center bg-window border-b-2 border-b-gray-400">
            <Step />
          </div>
          <div>
            <main
              className={clsx(" bg-window border-l-2 border-gray-400 pt-5")}
            >
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

        {step !== 0 && windowWidth >= 1280 && (
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
