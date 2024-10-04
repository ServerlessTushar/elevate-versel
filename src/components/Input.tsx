import { Path, UseFormRegister } from "react-hook-form"

export type IFormValues = any
export type InputProps = {
    label: Path<IFormValues>
    register: UseFormRegister<IFormValues>
    required: boolean
    title: string
    subLabel: string
    patternValue?: any
    patternMessage?: any
    error: any
}

// The following component is an example of your existing Input Component
const Input = ({ label, subLabel, title, register, required, patternValue, patternMessage, error }: InputProps) => {
    return <div className="flex flex-col w-auto" >
        <div className="flex gap-2 items-center">
            <label htmlFor={label} className="text-textDarkBlue text-sm md:text-base">{title}</label>
            <p className="text-neutral-700 opacity-50 text-sm">{subLabel}</p>
        </div>
        <input title={label} className="h-10 border-[#9ecbf4] border-[0.5px] rounded-lg outline-none pl-2"  {...register(label, { pattern: { value: patternValue, message: patternMessage }, required })} />
        {error && <p className="text-red-400">{error?.message}</p>}
    </div>
}

export default Input