import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInput(props: TextInputProps) {
  return (
    <input
      className={clsx(`py-4 px-3 w-full rounded bg-gray-800 text-gray-100 text-xs 
      placerholder:text-gray-400 outline-none focus:ring-2 ring-cyan-500`)}
      {...props}
    />
  );
}
