import { ChangeEvent } from "react";
import { create } from "zustand";

type State = {
  output: {
    textInput: string;
    fullName: string;
    occupation: string;
    jobTitle: string;
    company: string;
    workAddress: string;
    phoneNumber: string;
    workEmail: string;
    website: string;

    LinkedInLink: string;
    GitHubLink: string;
    ArtStationLink: string;
    YouTubeLink: string;
    TwitterLink: string;
    InstagramLink: string;

    image: string;
  };
  setOutput: (newOutput: Partial<State["output"]>) => void;
  onImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChange: (e: any) => void;
};

const useInfoStore = create<State>((set) => ({
  output: {
    textInput: "",
    fullName: "",
    occupation: "",
    jobTitle: "",
    company: "",
    workAddress: "",
    phoneNumber: "",
    workEmail: "",
    website: "",

    LinkedInLink: "",
    GitHubLink: "",
    ArtStationLink: "",
    YouTubeLink: "",
    TwitterLink: "",
    InstagramLink: "",

    image: "",
  },
  setOutput: (newOutput) =>
    set((state) => ({ output: { ...state.output, ...newOutput } })),
  handleChange: (e) => {
    const { name, value } = e.target;
    set((state) => ({ output: { ...state.output, [name]: value } }));
  },
  onImageChange: (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      set((state) => ({
        output: { ...state.output, image: URL.createObjectURL(file) },
      }));
    }
  },
}));

export default useInfoStore;
