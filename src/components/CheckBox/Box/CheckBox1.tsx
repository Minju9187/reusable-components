type CheckBoxProps = {
  label: string;
  isChecked: boolean;
  onChange: () => void;
};

export default function CheckBox1({
  label,
  isChecked,
  onChange,
}: CheckBoxProps) {
  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      <span>{label}</span>
    </label>
  );
}
