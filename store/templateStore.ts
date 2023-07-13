import { create } from "zustand";

interface TemplateStoreState {
  template: string;
  setTemplate: (status: string) => void;
}

export const useTemplateStore = create<TemplateStoreState>((set) => ({
  template: "",
  setTemplate: (status) => set(() => ({ template: status })),
}));
