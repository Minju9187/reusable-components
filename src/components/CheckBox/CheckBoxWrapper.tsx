import type { CheckBoxContextProps } from "./context";
import { CheckBoxContext } from "./context";
import CheckBox from "./CheckBox";
import Label from "./Label";
import type { ReactNode } from "react";

type CheckBoxProps = CheckBoxContextProps & {
  children: ReactNode;
};

function CheckBoxWrapper({ id, isChecked, onChange, children }: CheckBoxProps) {
  const value = { id, isChecked, onChange };

  return (
    <CheckBoxContext.Provider value={value}>
      {children}
    </CheckBoxContext.Provider>
  );
}

CheckBoxWrapper.CheckBox = CheckBox;
CheckBoxWrapper.Label = Label;

export default CheckBoxWrapper;
