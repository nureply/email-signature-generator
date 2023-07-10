import React from 'react';

function InputText({
    color,

    label,

    id,
    name,
    value,
    onChange }) {
    return (
        <div>
            <label className={`${color} block p-1 text-base font-semibold`}
                htmlFor={id}>{label}</label>
            <input className='border-2 p-1 rounded text-input'
                type="text"
                id={id}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default InputText;
