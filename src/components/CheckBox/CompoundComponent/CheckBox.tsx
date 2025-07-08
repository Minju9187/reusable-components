import { useState } from "react";

export default function CheckBox() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
      <span>체크박스 만들기</span>
    </label>
  );
}
