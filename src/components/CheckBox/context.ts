import { createContext } from "react";

export type CheckBoxContextProps = {
  id: string;
  isChecked: boolean;
  onChange: () => void;
};

export const CheckBoxContext = createContext<CheckBoxContextProps | null>(null);
