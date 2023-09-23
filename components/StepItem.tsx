import React from "react";
import clsx from "clsx";
import { Info, LayoutTemplate, UserCircle, Wrench, Eye } from "lucide-react";

interface StepItemProps {
  mapStep: number;
  step: number;
  isSmallScreen: boolean;
  handleStepClick: (mapStep: number) => void;
  isStepClickable: (mapStep: number) => boolean;
}

const stepLabels = ["Info", "Step 1", "Step 2", "Step 3", "View"];

const StepItem: React.FC<StepItemProps> = ({
  mapStep,
  step,
  isSmallScreen,
  handleStepClick,
  isStepClickable,
}) => {
  const icons = [Info, LayoutTemplate, UserCircle, Wrench, Eye];

  const IconComponent = icons[mapStep];
  const labelText = stepLabels[mapStep];

  return (
    <div
      className={clsx("my-5 -mb-[2px] mx-[2px] bg-window text-highlight", {
        "cursor-pointer": isStepClickable(mapStep),
        "xl:hidden ": mapStep === 4,
      })}
      onClick={() => handleStepClick(mapStep)}
    >
      <div
        className={clsx("flex justify-center py-2 sm:px-2 sm:text-lg text-xs", {
          "border-b-2 border-b-gray-400  ": step !== mapStep,
          "text-nureply-blue": step === mapStep,
          "border-t-2 border-t-gray-400 max-lg:rounded-t-md ": step === mapStep,
          "border-b-window ": step === mapStep,
          "border-x-2 border-x-gray-400 ": step === mapStep,
        })}
      >
        <div className="flex flex-col gap-2">
          <IconComponent
            width={isSmallScreen ? 18 : 28}
            height={isSmallScreen ? 18 : 28}
            color={step === mapStep ? "#4B67FA" : "#CFD4DA"}
          />
          <div>{labelText}</div>
        </div>
      </div>
    </div>
  );
};

export default StepItem;
