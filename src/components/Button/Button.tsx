import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Button({
  children,
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        `px-4 py-3 w-full text-sm bg-cyan-500 font-semibold 
  text-black rounded hover:bg-cyan-300 duration-200 fous:ring-2 ring-white-600`,

        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
