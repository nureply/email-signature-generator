import React from "react";
import { useForm } from "react-hook-form";

interface IInput {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "email" | "link";
}

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

function isEmailValid(email: string): boolean {
  return email === "" || emailRegex.test(email);
}

function isLinkValid(link: string): boolean {
  try {
    const url = new URL(link);
    const { hostname, pathname } = url;

    switch (hostname) {
      case "linkedin.com":
        return pathname.startsWith("/in/");
      case "github.com":
        return pathname.split("/").length === 2;
      case "youtube.com":
        return pathname.startsWith("/user/");
      case "twitter.com":
        return pathname.split("/").length === 2;
      case "facebook.com":
        return pathname.startsWith("/");
      case "instagram.com":
        return pathname.split("/").length === 2;
      default:
        return false;
    }
  } catch (e) {
    return false;
  }
}

const Input = ({ label, id, name, value, onChange, type = "text" }: IInput) => {
  const { register, formState } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: { [name]: value },
  });

  const isValid =
    (type === "email" && isEmailValid(value)) ||
    (type === "link" && isLinkValid(value));

  const isValidationNeeded = type === "email" || type === "link";
  const showValidBorder = isValidationNeeded && isValid && value.length > 0;
  const showInvalidBorder = isValidationNeeded && !isValid && value.length > 0;

  return (
    <div>
      <label className="block p-2 font-semibold text-default" htmlFor={id}>
        {label}
      </label>
      <input
        {...register(name, {
          validate: (value) =>
            !isValidationNeeded ||
            (type === "email" && isEmailValid(value)) ||
            (type === "link" && isLinkValid(value)),
        })}
        className={`w-full my-2 p-2 rounded border-2 border-highlight text-input focus:outline-none ${
          showValidBorder ? "border-valid" : ""
        } ${showInvalidBorder ? "border-invalid" : ""}`}
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
      {formState.errors[name] && (
        <p className="text-xs text-invalid">
          {type === "email"
            ? "This doesn't look like a valid email"
            : type === "link"
            ? "This doesn't look like a valid profile link"
            : ""}
        </p>
      )}
    </div>
  );
};

export default Input;
