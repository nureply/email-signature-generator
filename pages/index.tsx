import { useEffect, useState } from "react";
import Head from "next/head";
import clsx from "clsx";
import Header from "@/components/Header";
import Welcome from "@/components/Welcome";
import Step from "@/components/Step";
import { useStepStore } from "@/store/stepStore";
import { useTemplateStore } from "@/store/templateStore";
import Template from "@/components/Template";
import Infos from "@/components/Infos";
import Customization from "@/components/Customization";
import { Preview } from "@/components/Preview";

export default function Home() {
  const { step, setStep } = useStepStore();
  const { template } = useTemplateStore();

  const [isDisabled, setIsDisabled] = useState(false);
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

  const handleNextClick = () => {
    if (step === 0) {
      setStep(1);
    } else if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };
  const handlePreviousClick = () => {
    if (step === 3) {
      setStep(2);
    } else if (step === 2) {
      setStep(1);
    } else if (step === 1) {
      setStep(0);
    }
  };

  useEffect(() => {
    if (template.id === "plainText" || template.id === "initial") {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [template.id]);

  return (
    <>
      <Head>
        <title>Email Signature Generator - Nureply</title>
      </Head>

      <Header />

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
          <main className={clsx("bg-window border-l-2 border-gray-400 pt-5")}>
            {step === 0 && <Welcome />}
            {step === 1 && <Template />}
            {step === 2 && <Infos />}
            {step === 3 && <Customization />}
            {step === 4 && (
              <div className="px-5 pt-10">
                <Preview />
              </div>
            )}
          </main>
        </div>

        {step !== 0 && isWideScreen && (
          <div className="w-9/12 bg-window border-x-2 border-gray-400">
            <div className="m-10 sticky top-28">
              <Preview />
              <div className="flex mx-auto justify-evenly max-w-xs mt-5">
                {step !== 0 && (
                  <button
                    className="px-2 w-28 sm:px-4 py-2.5 text-sm font-semibold text-white rounded-md shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background bg-nureply-blue hover:bg-nureply-blue/75"
                    onClick={handlePreviousClick}
                  >
                    Previous
                  </button>
                )}
                {step !== 3 && (
                  <button
                    className={`px-2 w-28 sm:px-4 py-2.5 text-sm font-semibold text-white rounded-md shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background ${
                      isDisabled
                        ? "bg-disabled cursor-not-allowed"
                        : "bg-nureply-blue hover:bg-nureply-blue/75"
                    }`}
                    onClick={handleNextClick}
                    disabled={isDisabled}
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
