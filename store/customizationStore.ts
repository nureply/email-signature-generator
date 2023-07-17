import { create } from "zustand";
import { ChangeEvent } from "react";

type State = {
  customizationOutput: {
    fontSize: number;
    iconSize: number;
    imageSize: number;

    nameColor: string;
    textColor: string;
    linkColor: string;
  };
  setCustomizationOutput: (newCustomizationOutput: Partial<State["customizationOutput"]>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const useCustomizationStore = create<State>((set) => ({
  customizationOutput: {
    fontSize: 12,
    iconSize: 16,
    imageSize: 100,

    nameColor: "",
    textColor: "",
    linkColor: "",
  },
  setCustomizationOutput: (newCustomizationOutput) =>
    set((state) => ({ customizationOutput: { ...state.customizationOutput, ...newCustomizationOutput } })),
  handleChange: (e) => {
    const { name, value } = e.target;
    set((state) => ({ customizationOutput: { ...state.customizationOutput, [name]: value } }));
  },
}));

export default useCustomizationStore;
