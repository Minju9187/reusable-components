import { useCheckBoxContext } from "./useCheckBoxContext";
import type { LabelHTMLAttributes } from "react";

export default function Label({
  children,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  const { id } = useCheckBoxContext();

  return (
    <label htmlFor={id} {...props}>
      {children}
    </label>
  );
}
