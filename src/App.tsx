import { useState } from "react";
import { CheckBoxWrapper } from "./components/CheckBox/";

function App() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  return (
    <>
      <CheckBoxWrapper
        id="checkbox-1"
        isChecked={isChecked2}
        onChange={() => setIsChecked2((prev) => !prev)}
      >
        <CheckBoxWrapper.CheckBox />
        <CheckBoxWrapper.Label>체크박스 만들기</CheckBoxWrapper.Label>
      </CheckBoxWrapper>
    </>
  );
}

export default App;
