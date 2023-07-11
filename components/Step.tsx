import clsx from "clsx";
import { LayoutTemplate, UserCircle, Wrench } from "lucide-react";

interface StepProps {
  part: string;
  handleStep: React.Dispatch<React.SetStateAction<string>>;
  isSelected: boolean;
}

const Step = ({ part, handleStep, isSelected }: StepProps) => {
  return (
    <div
      className={clsx("cursor-pointer justify-around", {
        "shadow-[0_0px_0px_3px_rgba(0,0,0,0.3)]": isSelected === true,
      })}
      onClick={() => handleStep(part)}
    >
      <div className="flex items-center p-4">{stepsPicker(part)}</div>
    </div>
  );
};

export default Step;

const stepsPicker = (part: string) => {
  switch (part) {
    case "Step 1":
      return (
        <div className="flex items-center ">
          <LayoutTemplate />
          {part}
        </div>
      );
    case "Step 2":
      return (
        <div className="flex items-center">
          <UserCircle />
          {part}
        </div>
      );
    case "Step 3":
      return (
        <div className="flex items-center">
          <Wrench />
          {part}
        </div>
      );
  }
};
