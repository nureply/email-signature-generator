import { useEffect, useState } from "react";
import clsx from "clsx";

import { useStepStore } from "@/store/stepStore";
import { useTemplateStore } from "@/store/templateStore";
import { Info, LayoutTemplate, UserCircle, Wrench, Eye } from "lucide-react";

const steps = [0, 1, 2, 3, 4];

const Step = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window != "undefined" ? window.innerWidth : 0
  );
  const xlWidth = 1280;
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const { step, setStep } = useStepStore();
  const { template } = useTemplateStore();

  const isStepClickable = (mapStep: number) => {
    const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;

    if (mapStep === 0) {
      return true;
    } else if (template.id === "initial") {
      return mapStep === 1;
    } else if (template.id === "plainText" && mapStep === 3) {
      return mapStep >= 1 && mapStep <= 2;
    } else if (mapStep === 4 && windowWidth > xlWidth) {
      return false;
    }

    return true;
  };
  const handleStepClick = (mapStep: number) => {
    if (step === 4 && windowWidth > xlWidth) {
      setStep(3);
    } else if (isStepClickable(mapStep)) {
      setStep(mapStep);
    }
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [step, setStep]);
  useEffect(() => {
    if (step === 4 && windowWidth > xlWidth) {
      setStep(3);
    }
  }, [setStep, step, windowWidth]);

  let stepsMap = [0, 1, 2, 3, 4];

  if (windowWidth > 768) {
    stepsMap = [0, 1, 2, 3];
  }

  return (
    <>
      {stepsMap.map((mapStep) => {
        return (
          <div
            key={mapStep}
            className={clsx(
              "my-5 -mb-[2px] mx-[2px] bg-window text-highlight",
              {
                "cursor-pointer": isStepClickable(mapStep),
              }
            )}
            onClick={() => handleStepClick(mapStep)}
          >
            <div
              className={clsx("flex justify-center py-2 px-1 ", {
                "border-b-2 border-b-gray-400  ": step !== mapStep,
                "text-nureply-blue": step === mapStep,
                "border-t-2 border-t-gray-400 max-lg:rounded-t-md ":
                  step === mapStep,
                "border-b-window ": step === mapStep,
                "border-x-2 border-x-gray-400 ": step === mapStep,
              })}
            >
              {stepsPicker(mapStep, step, isSmallScreen)}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Step;

const stepsPicker = (mapStep: number, step: number, isSmallScreen: boolean) => {
  switch (mapStep) {
    case 0:
      return (
        <div className="flex flex-col gap-2 ">
          <Info
            width={isSmallScreen ? 20 : 28}
            height={isSmallScreen ? 20 : 28}
            color={step === mapStep ? "#4B67FA" : "#CFD4DA"}
          />
          <div>Info</div>
        </div>
      );
    case 1:
      return (
        <div className="flex flex-col gap-2 ">
          <LayoutTemplate
            width={isSmallScreen ? 20 : 28}
            height={isSmallScreen ? 20 : 28}
            color={step === mapStep ? "#4B67FA" : "#CFD4DA"}
          />
          <div>Step 1</div>
        </div>
      );
    case 2:
      return (
        <div className="flex flex-col gap-2 ">
          <UserCircle
            width={isSmallScreen ? 20 : 28}
            height={isSmallScreen ? 20 : 28}
            color={step === mapStep ? "#4B67FA" : "#CFD4DA"}
          />
          <div>Step 2</div>
        </div>
      );
    case 3:
      return (
        <div className="flex flex-col gap-2 ">
          <Wrench
            width={isSmallScreen ? 20 : 28}
            height={isSmallScreen ? 20 : 28}
            color={step === mapStep ? "#4B67FA" : "#CFD4DA"}
          />
          <div>Step 3</div>
        </div>
      );
    case 4:
      return (
        <div className="flex flex-col gap-2 ">
          <Eye
            width={isSmallScreen ? 20 : 28}
            height={isSmallScreen ? 20 : 28}
            color={step === mapStep ? "#4B67FA" : "#CFD4DA"}
          />
          <div>View</div>
        </div>
      );
  }
};
