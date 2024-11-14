import { ButtonHTMLAttributes } from 'react';
import { PropsWithRequiredChildren } from '../../helpers/customer-props.helper';

export default function Button(props: PropsWithRequiredChildren<ButtonProps>) {
  return (
    <button
      className={
        `text-white font-bold py-2 px-4 rounded-full` +
        ` ${props.buttonAttributes.disabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 '}`
      }
      {...props.buttonAttributes}>
      {props.children}
    </button>
  );
}

type ButtonAttributes = Extract<ButtonHTMLAttributes<HTMLButtonElement>, unknown>;

interface ButtonProps {
  buttonAttributes: ButtonAttributes;
}
