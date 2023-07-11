import React from "react";
import clsx from "clsx";

interface IInputText {
  colored?: boolean;
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputText = ({
  colored,
  label,
  id,
  name,
  value,
  onChange,
}: IInputText) => {
  return (
    <>
      <div>
        <label
          className={clsx("block p-2 font-semibold text-default", {
            "text-nureply-blue-full": colored === true,
          })}
          htmlFor={id}
        >
          {label}
        </label>
        <input
          className="p-2 border rounded text-input"
          type="text"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default InputText;
