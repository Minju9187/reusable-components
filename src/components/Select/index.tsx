import type { ChangeEvent } from "react";

type SelectProps = {
  id: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: { label: string; value: string }[];
  placeholder?: string;
  classNames?: {
    wrapper?: string;
    label?: string;
    select?: string;
  };
};

export default function Select({
  id,
  label,
  value,
  onChange,
  options,
  placeholder,
  classNames = {},
}: SelectProps) {
  return (
    <>
      <div className="flex flex-col gap-3 rounded-lg bg-green-50 p-4">
        <label htmlFor={id} className="text-red-500">
          {label}
        </label>
        <select id={id} value={value} onChange={onChange} className="text-2xl">
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
