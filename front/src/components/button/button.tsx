import { ComponentProps } from "react";

export function Button({}: ButtonProps) {
  return <>Button</>;
}

type ButtonProps = ComponentProps<"button">;
