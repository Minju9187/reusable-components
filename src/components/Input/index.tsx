import type { InputHTMLAttributes } from "react";

type InputProps = {
  label?: string;
  error?: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  label,
  error,
  className,
  ...props
}: InputProps) {
  return (
    <>
      {label && (
        <label htmlFor={props.id} className="">
          {label}
        </label>
      )}
      <input {...props} />
      {error && <p className="">{error}</p>}
    </>
  );
}
