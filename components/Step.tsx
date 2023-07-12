import clsx from "clsx";
import { LayoutTemplate, UserCircle, Wrench } from "lucide-react";

interface StepProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
const steps = [1, 2, 3];

const Step = ({ step, setStep }: StepProps) => {
  return (
    <>
      {steps.map((item) => {
        return (
          <div
            key={item}
            className={clsx("cursor-pointer justify-around m-5 bg-gray-200", {
              "shadow-[0_0px_0px_3px_rgba(0,0,0,0.3)]": step === item,
            })}
            onClick={() => setStep(item)}
          >
            <div className="flex items-center p-4">{stepsPicker(item)}</div>
          </div>
        );
      })}
    </>
  );
};

export default Step;

const stepsPicker = (step: number) => {
  switch (step) {
    case 1:
      return (
        <div className="flex items-center ">
          <LayoutTemplate />
          Step {step}
        </div>
      );
    case 2:
      return (
        <div className="flex items-center">
          <UserCircle />
          Step {step}
        </div>
      );
    case 3:
      return (
        <div className="flex items-center">
          <Wrench />
          Step {step}
        </div>
      );
  }
};
