import { useStepStore } from "@/store/stepStore";
import clsx from "clsx";
import { LayoutTemplate, UserCircle, Wrench } from "lucide-react";

const steps = [1, 2, 3];

const Step = () => {
  const { step, setStep } = useStepStore();
  return (
    <>
      {steps.map((mapStep) => {
        return (
          <div
            key={item}
            className={clsx(
              "bg-gray-200 rounded-lg cursor-pointer justify-around m-5 ",
              {
                "shadow-[0_0px_0px_3px_rgba(0,0,0,0.3)]": step === item,
              },
            )}
            onClick={() => setStep(item)}
          >
            <div
              className={clsx("flex items-center p-4", {
                "text-[#2AC131]": step === mapStep,
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
    case 1:
      return (
        <div className="flex items-center gap-3">
          <LayoutTemplate color={step === mapStep ? "#2AC131" : "#CFD4DA"} />
          Step {mapStep}
        </div>
      );
    case 2:
      return (
        <div className="flex items-center gap-3">
          <UserCircle color={step === mapStep ? "#2AC131" : "#CFD4DA"} />
          <p className=""> Step {mapStep}</p>
        </div>
      );
    case 3:
      return (
        <div className="flex items-center gap-3">
          <Wrench color={step === mapStep ? "#2AC131" : "#CFD4DA"} />
          Step {mapStep}
        </div>
      );
  }
};
