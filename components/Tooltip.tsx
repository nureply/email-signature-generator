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
      className="absolute top-2 right-0 text-highlight bg-background cursor-pointer flex items-center justify-center border border-highlight"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        background: "linear-gradient(to bottom left, #F8F9FA, #FFFFFF)",
      }}
    >
      <span className="">?</span>
      {showTooltip && (
        <div
          className="absolute bottom-0 right-full transform translate-x-[35px] translate-y-1 text-sm text-fade bg-background rounded-full p-2 px-4 border border-highlight"
          style={{
            width: "251px",
            background: "linear-gradient(to bottom left, #F8F9FA, #FFFFFF)",
          }}
        >
          {tooltipText}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
