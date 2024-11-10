import { LabelHTMLAttributes } from "react"
import Input, { InputProps } from "../input/input"

export default function FormGroup(props: FormGroupProps) {
    return (
        <div className="mb-4">
            <label {...props.labelProps}
             className="block text-gray-700 text-sm font-bold mb-2">{props.labelText}
            </label>
            <Input {...props.inputProps} />
        </div>
    )
}

type LabelProps = Extract<LabelHTMLAttributes<HTMLLabelElement>, unknown>

interface FormGroupProps {
    labelText: string;
    labelProps: LabelProps;
    inputProps: InputProps;
}