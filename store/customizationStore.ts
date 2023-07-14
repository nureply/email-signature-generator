import { create } from "zustand";
import { ChangeEvent } from "react";

type State = {
  output: {
    fontSize: number;
    iconSize: number;
    imageSize: number;

    nameColor: string;
    textColor: string;
    linkColor: string;
  };
  setOutput: (newOutput: Partial<State["output"]>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const useCustomizationStore = create<State>((set) => ({
  output: {
    fontSize: 12,
    iconSize: 16,
    imageSize: 100,

    nameColor: "",
    textColor: "",
    linkColor: "",
  },
  setOutput: (newOutput) =>
    set((state) => ({ output: { ...state.output, ...newOutput } })),
  handleChange: (e) => {
    const { name, value } = e.target;
    set((state) => ({ output: { ...state.output, [name]: value } }));
  },
}));

export default useCustomizationStore;
