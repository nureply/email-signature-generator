import React from "react";
import clsx from "clsx";

interface IInput {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "email" | "link";
  isValidEmail?: boolean;
  isValidLink?: boolean;
}
const Input = ({
  label,
  id,
  name,
  value,
  onChange,
  type,
  isValidEmail = true,
  isValidLink = true,
}: IInput) => {
  let isValid = true;
  if (type === "email") {
    isValid = isValidEmail;
  } else if (type === "link") {
    isValid = isValidLink;
  }

  return (
    <>
      <div>
        <label className="block p-2 font-semibold text-default" htmlFor={id}>
          {label}
        </label>
        <input
          className={clsx("w-full my-2 p-2 rounded border-2 border-highlight text-input focus:outline-none", {
            border: (type === "email" || type === "link") && value.length > 0,
            "border-valid": (type === "email" || type === "link") && isValid && value.length > 0,
            "border-invalid": (type === "email" || type === "link") && !isValid && value.length > 0,
          })}
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Input;
