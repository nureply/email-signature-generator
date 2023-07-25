import React from "react";

interface DescriptionProps {
  primary: string;
  secondary: string;
}

const Description: React.FC<DescriptionProps> = ({ primary, secondary }) => {
  return (
    <div>
      <h1 className="text-xl font-bold text-default">
        {primary}
      </h1>
      <p className="text-sm text-default">{secondary}</p>
    </div>
  );
};

export default Description;
