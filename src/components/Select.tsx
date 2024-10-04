import React from "react"
import { UseFormRegister } from "react-hook-form"
import { IFormValues } from "./Input"

// eslint-disable-next-line react/display-name
const SelectOption = React.forwardRef<
    HTMLSelectElement,
    { label: string, options: string[], title: string, placeholder: string, error: any, } & ReturnType<UseFormRegister<IFormValues>>
>(({ onChange, onBlur, name, label, options, title, placeholder, error }, ref) => {

    return <div className="flex flex-col flex-1">
        <label htmlFor={label} className="text-textDarkBlue text-sm md:text-base">{title}</label>
        <select title={label} name={label} ref={ref} className="pl-2 outline-none h-10 border-[#9ecbf4] border-[0.5px] rounded-lg" onChange={onChange} onBlur={onBlur}>
            <option value="" defaultValue={""} >{"  " + placeholder}</option>
            {options?.map(op => <option key={op} value={op}>{op}</option>
            )}
        </select>
        {error && <p className="text-red-400">{error?.message}</p>}
    </div>
})

export default SelectOption