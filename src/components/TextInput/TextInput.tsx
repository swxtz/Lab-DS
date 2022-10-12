import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { ReactNode } from "react";

export interface TextInputProps {}

export function TextInput({}: TextInputProps) {
  return <input className={clsx(``)} />;
}
