import React from "react";

interface HeadingProps {
  primary: string;
  secondary: string;
}

const Heading: React.FC<HeadingProps> = ({ primary, secondary }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-default">{primary}</h1>
      <p className="text-default">{secondary}</p>
    </div>
  );
};

export default Heading;
