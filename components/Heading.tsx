import React from "react";

interface HeadingProps {
  primary: string;
  secondary: string;
  type?: "Heading" | "Description";
}

const Heading: React.FC<HeadingProps> = ({
  primary,
  secondary,
  type = "Heading",
}) => {
  return (
    <div>
      <h1
        className={
          type === "Heading"
            ? "text-2xl font-bold text-default"
            : "text-xl font-bold text-default"
        }
      >
        {primary}
      </h1>
      <p
        className={type === "Heading" ? "text-default" : "text-sm text-default"}
      >
        {secondary}
      </p>
    </div>
  );
};

export default Heading;
