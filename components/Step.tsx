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
              " bg-window lg:-mr-[1.5px] -mb-[1.5px] my-5 mx-5 w-3/5 text-[#CFD4DA]",
              {
                "cursor-pointer": isStepClickable(mapStep),
              },
            )}
            onClick={() => handleStepClick(mapStep)}
          >
            <div
              className={clsx("flex items-center py-3 pl-2", {
                "border-r-2 border-r-gray-400": step !== mapStep,
                "text-[#4B67FA]": step === mapStep,
                "border-l-2 rounded-l-md border-l-gray-400": step === mapStep,
                "border-r-2 border-r-window": step === mapStep,
                "border-y-2 rounded-l-md border-y-gray-400": step === mapStep,
              })}
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
        <div className="flex flex-col pl-2 justify-center items-center gap-3">
          <Info color={step === mapStep ? "#4B67FA" : "#CFD4DA"} />
          <div className="">Info</div>
        </div>
      );
    case 1:
      return (
        <div className="flex flex-col justify-center items-center gap-3">
          <LayoutTemplate color={step === mapStep ? "#4B67FA" : "#CFD4DA"} />
          <div className="">Step 1</div>
        </div>
      );
    case 2:
      return (
        <div className="flex flex-col justify-center  items-center gap-3">
          <UserCircle color={step === mapStep ? "#4B67FA" : "#CFD4DA"} />
          <div>Step 2</div>
        </div>
      );
    case 3:
      return (
        <div className="flex flex-col justify-center  items-center gap-3">
          <Wrench color={step === mapStep ? "#4B67FA" : "#CFD4DA"} />
          <div>Step 3</div>
        </div>
      );
    case 4:
      return (
        <div
          className={clsx(
            "flex flex-col pl-2 justify-center items-center gap-3",
            { "xl:hidden xl:": step !== mapStep },
          )}
        >
          <Eye color={step === mapStep ? "#4B67FA" : "#CFD4DA"} />
          <div>View</div>
        </div>
      );
  }
};
