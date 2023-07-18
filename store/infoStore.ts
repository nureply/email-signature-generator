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

    signOff: "Regards",

    fullName: "John Smith",
    occupation: "Occupation",
    jobTitle: "Marketing Specialist",
    company: "NuReply",
    workAddress: "Work Address",
    phoneNumber: "500-530-530",
    workEmail: "johns@nureply.com",
    website: "https://nureply.com/",

    LinkedInLink: "https://www.linkedin.com/",
    GitHubLink: "https://github.com/",
    ArtStationLink: "",
    YouTubeLink: "https://www.youtube.com/",
    TwitterLink: "https://twitter.com/",
    InstagramLink: "https://www.instagram.com/",

    image: "/initialIcon.png",
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
