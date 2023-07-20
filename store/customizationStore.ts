import { create } from "zustand";
import { ChangeEvent } from "react";

type ChangeOrMouseEvent =
  | ChangeEvent<HTMLInputElement>
  | React.MouseEvent<HTMLButtonElement>;

type State = {
  fontSize: number;
  iconSize: number;
  imageSize: number;
  backgroundColor: string;
  nameColor: string;
  textColor: string;
  linkColor: string;
  nameFont: string;

  setCustomizationOutput: (newCustomizationOutput: Partial<State>) => void;
  handleChange: (event: ChangeOrMouseEvent) => void;
};

const useCustomizationStore = create<State>((set) => ({
  fontSize: 12,
  iconSize: 16,
  imageSize: 100,
  backgroundColor: "",
  nameColor: "",
  textColor: "",
  linkColor: "",
  nameFont: "",

  setCustomizationOutput(newCustomizationOutput) {
    set((state) => ({ ...state, ...newCustomizationOutput }));
  },
  
  handleChange(event) {
    const { name, value } = event.target as HTMLInputElement;
    set((state) => ({
      ...state,
      [name]: value,
    }));
  },
}));

export default useCustomizationStore;
