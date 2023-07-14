import React from "react";

interface IHeading {
  primary: string;
  secondary: string;
}
const Heading = ({ primary, secondary }: IHeading) => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-nureply-blue-full underline decoration-nureply-blue-tint">
          {primary}
        </h1>
        <p className="text-default">{secondary}</p>
      </div>
    </>
  );
};

export default Heading;
