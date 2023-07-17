import { create } from "zustand";
import { ChangeEvent } from "react";

type State = {
  infoOutput: {
    textInput: string;

    signOff: string;

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
  setInfoOutput: (newInfoOutput: Partial<State["infoOutput"]>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const useInfoStore = create<State>((set) => ({
  infoOutput: {
    textInput: "",

    signOff: "",

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
  setInfoOutput: (newInfoOutput) =>
    set((state) => ({ infoOutput: { ...state.infoOutput, ...newInfoOutput } })),
  handleChange: (e) => {
    const { name, value } = e.target;
    set((state) => ({ infoOutput: { ...state.infoOutput, [name]: value } }));
  },
  onImageChange: (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      set((state) => ({
        infoOutput: { ...state.infoOutput, image: URL.createObjectURL(file) },
      }));
    }
  },
}));

export default useInfoStore;
