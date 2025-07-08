import { useCheckBoxContext } from "./useCheckBoxContext";
import type { InputHTMLAttributes } from "react";

export default function CheckBox(props: InputHTMLAttributes<HTMLInputElement>) {
  const { id, isChecked, onChange } = useCheckBoxContext();

  return (
    <input
      type="checkbox"
      id={id}
      checked={isChecked}
      onChange={onChange}
      {...props}
    />
  );
}
