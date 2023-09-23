import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useStepStore } from "@/store/stepStore";
import { useTemplateStore } from "@/store/templateStore";
import StepItem from "./StepItem";

interface StepProps {}

const Step: React.FC<StepProps> = () => {
  const { step, setStep } = useStepStore();
  const { template } = useTemplateStore();
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  const XL_WIDTH = 1280;

  const isStepClickable = (mapStep: number): boolean => {
    const currentWindowWidth =
      typeof window !== "undefined" ? window.innerWidth : 0;

    if (mapStep === 0) {
      return true;
    } else if (template.id === "initial") {
      return mapStep === 1;
    } else if (template.id === "plainText" && mapStep === 3) {
      return mapStep >= 1 && mapStep <= 2;
    } else if (mapStep === 4 && currentWindowWidth > XL_WIDTH) {
      return false;
    }

    return true;
  };

  const handleStepClick = (mapStep: number): void => {
    if (step === 4 && windowWidth > XL_WIDTH) {
      setStep(3);
    } else if (isStepClickable(mapStep)) {
      setStep(mapStep);
    }
  };

  useEffect(() => {
    const handleResize = (): void => {
      const currentWindowWidth = window.innerWidth;
      setWindowWidth(currentWindowWidth);
      setIsSmallScreen(currentWindowWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [step, setStep]);

  useEffect(() => {
    const newStepsMap = windowWidth > 768 ? [0, 1, 2, 3] : [0, 1, 2, 3, 4];

    setStepsMap(newStepsMap);
  }, [windowWidth]);

  const [stepsMap, setStepsMap] = useState<number[]>(
    windowWidth > 768 ? [0, 1, 2, 3, 4] : [0, 1, 2, 3, 4]
  );

  return (
    <>
      {stepsMap.map((mapStep) => (
        <StepItem
          key={mapStep}
          mapStep={mapStep}
          step={step}
          isSmallScreen={isSmallScreen}
          handleStepClick={handleStepClick}
          isStepClickable={isStepClickable}
        />
      ))}
    </>
  );
};

export default Step;
