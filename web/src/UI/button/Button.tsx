import { ButtonHTMLAttributes } from "react"
import { PropsWithRequiredChildren } from "../../helpers/customer-props.helper"

export default function Button(props: PropsWithRequiredChildren<ButtonProps>) {
    return(
        <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            type={props.type}>{props.children}</button>
    )
}


type ButtonType = Extract<ButtonHTMLAttributes<HTMLButtonElement>['type'], string>

interface ButtonProps {
    type: ButtonType
}