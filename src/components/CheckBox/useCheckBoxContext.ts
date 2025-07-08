import { useContext } from "react";
import { CheckBoxContext } from "./context";

export function useCheckBoxContext() {
  const context = useContext(CheckBoxContext);
  if (!context) {
    throw new Error("useCheckBoxContext must be used within a CheckBoxWrapper");
  }
  return context;
}
