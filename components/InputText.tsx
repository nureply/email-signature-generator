import React from "react";
import clsx from "clsx";

interface IInput {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "email" | "link";
}

function isEmailValid(email: string): boolean {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return email === '' || emailRegex.test(email);
}

function isLinkValid(link: string): boolean {
  try {
    const url = new URL(link);
    const hostname = url.hostname;
    const pathname = url.pathname;

    switch (true) {
      case hostname.includes('linkedin.com') && pathname.startsWith('/in/'):
        return true;
      case hostname.includes('github.com') && pathname.split('/').length === 2:
        return true;
      case hostname.includes('youtube.com') && pathname.startsWith('/user/'):
        return true;
      case hostname.includes('twitter.com') && pathname.split('/').length === 2:
        return true;
      case hostname.includes('facebook.com') && pathname.startsWith('/'):
        return true;
      case hostname.includes('instagram.com') &&
        pathname.split('/').length === 2:
        return true;
      default:
        return false;
    }
  } catch (e) {
    return false;
  }
}

const Input = ({
  label,
  id,
  name,
  value,
  onChange,
  type,
}: IInput) => {
  let isValid = true;
  if (type === "email") {
    isValid = isEmailValid(value);
  } else if (type === "link") {
    isValid = isLinkValid(value);
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
