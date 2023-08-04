import React, { useState } from "react";

interface TooltipProps {
  tooltipText: string;
}

const Tooltip: React.FC<TooltipProps> = ({ tooltipText }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className="absolute p-2 top-0 right-0 text-highlight border-highlight border bg-background rounded-full cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative inline-block">
        <span className="">?</span>
        {showTooltip && (
          <div className="absolute bottom-0 right-4 transform translate-x-1/3 translate-y-1/4 text-sm text-default bg-white rounded-md p-2 px-4 border border-default">
            {tooltipText}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tooltip;
