import { create } from "zustand";

type State = {
  output: {
    fontSize: string;
    iconSize: string;
    imageSize: string;

    nameColor: string;
    textColor: string;
    linkColor: string;
  };
  setOutput: (newOutput: Partial<State["output"]>) => void;
  handleChange: (e: any) => void;
};

const useCustomizationStore = create<State>((set) => ({
  output: {
    fontSize: "",
    iconSize: "",
    imageSize: "",

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
