import { useStepStore } from "@/store/stepStore";
import { useTemplateStore } from "@/store/templateStore";
import clsx from "clsx";
import { Info, LayoutTemplate, UserCircle, Wrench, Eye } from "lucide-react";

const steps = [0, 1, 2, 3, 4];

const Step = () => {
  const { step, setStep } = useStepStore();
  const { template } = useTemplateStore();
  const isStepClickable = (mapStep: number) => {
    const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    const xlWidth = 1280;

    if (mapStep === 0) {
      // Step 0 (Info) is always clickable
      return true;
    } else if (template.id === "initial") {
      // If the template is "initial", only Step 1 is clickable
      return mapStep === 1;
    } else if (template.id === "plainText" && mapStep === 3) {
      // If the template is "plainText", only Step 1 and Step 2 are clickable
      return mapStep >= 1 && mapStep <= 2;
    } else if (mapStep === 4 && windowWidth > xlWidth) {
      // If the screen size is smaller than 'xl', Step 4 is not clickable
      return false;
    }

    // For other templates and non-zero steps, all steps are clickable
    return true;
  };

  const handleStepClick = (mapStep: number) => {
    if (isStepClickable(mapStep)) {
      setStep(mapStep);
    }
  };

  return (
    <>
      {steps.map((mapStep) => {
        return (
          <div
            key={mapStep}
            className={clsx(
              " bg-window lg:-mr-[1.5px] -mb-[1.5px] my-5 lg:mx-5 xl:w-3/5 text-[#CFD4DA]",
              {
                "cursor-pointer": isStepClickable(mapStep),
              }
            )}
            onClick={() => handleStepClick(mapStep)}
          >
            <div
              className={clsx(
                "flex items-center py-3 xl:pl-2 md:max-xl:px-8 max-md:px-2",
                {
                  "xl:border-r-2   xl:border-r-gray-400 max-xl:border-b-2 max-xl:border-b-gray-400":
                    step !== mapStep,
                  "text-[#4B67FA]": step === mapStep,
                  "xl:border-l-2 border-t-2 xl:rounded-l-md rounded-t-md xl:border-l-gray-400 border-t-gray-400":
                    step === mapStep,
                  "xl:border-r-2 xl:border-r-window border-b-window":
                    step === mapStep,
                  "xl:border-y-2 border-x-2 xl:rounded-l-md border-x-gray-400 xl:border-y-gray-400":
                    step === mapStep,
                }
              )}
            >
              {stepsPicker(mapStep, step)}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Step;

const stepsPicker = (mapStep: number, step: number) => {
  switch (mapStep) {
    case 0:
      return (
        <div className="flex flex-col pl-2 justify-center items-center gap-2">
          <Info
            width={32}
            height={32}
            color={step === mapStep ? "#4B67FA" : "#CFD4DA"}
          />
          <div>Info</div>
        </div>
      );
    case 1:
      return (
        <div className="flex flex-col justify-center items-center gap-2">
          <LayoutTemplate
            width={32}
            height={32}
            color={step === mapStep ? "#4B67FA" : "#CFD4DA"}
          />
          <div>Step1</div>
        </div>
      );
    case 2:
      return (
        <div className="flex flex-col justify-center  items-center gap-2">
          <UserCircle
            width={32}
            height={32}
            color={step === mapStep ? "#4B67FA" : "#CFD4DA"}
          />
          <div>Step2</div>
        </div>
      );
    case 3:
      return (
        <div className="flex flex-col justify-center  items-center gap-2">
          <Wrench
            width={32}
            height={32}
            color={step === mapStep ? "#4B67FA" : "#CFD4DA"}
          />
          <div>Step3</div>
        </div>
      );
    case 4:
      return (
        <div className="flex flex-col justify-center items-center gap-2 xl:hidden">
          <Eye
            width={32}
            height={32}
            color={step === mapStep ? "#4B67FA" : "#CFD4DA"}
          />
          <div>View</div>
        </div>
      );
  }
};
