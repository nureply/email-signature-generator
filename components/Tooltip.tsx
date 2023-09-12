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
      style={{ width: '30px', height: '30px', borderRadius: '50%' }}
    >
      <span className="">?</span>
      {showTooltip && (
        <div className="absolute bottom-0 right-4 transform translate-x-1/4 translate-y-1/4 text-sm text-highlight bg-background rounded-md p-2 px-4 border border-highlight">
          {tooltipText}
        </div>
      )}
    </div>
  );


};


export default Tooltip;