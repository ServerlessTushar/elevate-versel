import React, { useState } from 'react';
import { UseFormSetValue, FieldValues } from 'react-hook-form';

interface Option {
    value: string;
    label: string;
}

interface MultiSelectProps {
    options: Option[];
    title: string
    setValue: UseFormSetValue<FieldValues>
    value: string[]
}

const MultiSelect: React.FC<MultiSelectProps> = ({ options, title, setValue, value: selectedOptions }) => {

    const handleOptionToggle = (value: string) => {
        if (selectedOptions.includes(value)) {
            setValue(title, selectedOptions.filter(option => option !== value));
        } else {
            setValue(title, [...selectedOptions, value]);
        }
    };

    return (
        <div>
            <div className='flex flex-wrap justify-center gap-2'
            >
                {options.map(option => {
                    const isSelected = selectedOptions?.includes(option.value)
                    return <button key={option.value} className={`${isSelected ? "bg-[#c0d4e8]" : "bg-sky-100"} p-2 rounded-lg text-sm`} onClick={() => handleOptionToggle(option.value)}>
                        {option.label}
                    </button>
                })}
            </div>
        </div>
    );
};

export default MultiSelect;
