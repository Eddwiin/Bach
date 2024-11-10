import { InputHTMLAttributes } from 'react';

export default function Input(props: InputProps) {
  return (
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      {...props.inputAttributes}
    />
  );
}

export type InputAttributes = Extract<InputHTMLAttributes<HTMLInputElement>, unknown>;

export interface InputProps {
  inputAttributes: InputAttributes;
}
