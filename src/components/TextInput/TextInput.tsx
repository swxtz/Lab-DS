import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";


export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div
      className={clsx(`flex items-center h-12 gap-3 py-4 px-3 w-full text-gray-100 text-xs 
      placerholder:text-gray-400 rounded bg-gray-800 focus:within:ring-2 ring-cyan-500`)}
    >
      {props.children}
    </div>
  );
}

export interface TextInputIconsProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconsProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {props.children}
    </Slot>
  )
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}


function TextInputInput(props: TextInputInputProps) {
  return <input className=" bg-transparent flex-1 outline-none text-gray-100 text-xs placerholder:text-gray-400" {...props} />;
}


export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}