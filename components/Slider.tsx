import React from "react";

interface ISlider {
    label: string;
    id: string;
    name: string;
    min: number;
    max: number;
    value: number;
    step: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Slider = ({
    label,
    id,
    name,
    min,
    max,
    value,
    step,
    onChange,
}: ISlider) => {
    return (
        <div>
            <label
                htmlFor={id}
                className="block mt-2 font-semi-bold text-default">{label}</label>
            <input
                type="range"
                id={id}
                name={name}
                min={min}
                max={max}
                value={value}
                step={step}
                onChange={onChange}
                className="w-full h-2 rounded-lg appearance-none bg-background cursor-pointer"
            />
            <output
                htmlFor="fontSize"
                className='pb-2 text-default border-b border-background'>{value}</output>
        </div>
    );
};

export default Slider;
