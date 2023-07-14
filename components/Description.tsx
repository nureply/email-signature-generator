import React from "react";

interface IDescription {
  primary: string;
  secondary: string;
}
const Description = ({ primary, secondary }: IDescription) => {
  return (
    <>
      <div>
        <h1 className="text-xl font-bold text-nureply-blue-full underline decoration-nureply-blue-tint">
          {primary}
        </h1>
        <p className="text-sm text-default">{secondary}</p>
      </div>
    </>
  );
};

export default Description;
