import { create } from "zustand";
import { ChangeEvent } from "react";
import { validateLink } from "../utils/validation";

type State = {
  signOff: string;

  fullName: string;
  jobTitle: string;
  company: string;
  workAddress: string;
  phoneNumber: string;
  workEmail: string;
  website: string;

  LinkedInLink: string;
  GitHubLink: string;
  YouTubeLink: string;
  TwitterLink: string;
  FacebookLink: string;
  InstagramLink: string;

  image: string;

  setInfoOutput: (newInfoOutput: Partial<State>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isValidLink: (linkName: string) => boolean;
};

const useInfoStore = create<State>((set) => ({
  signOff: "",

  fullName: "",
  jobTitle: "",
  company: "",
  workAddress: "",
  phoneNumber: "",
  workEmail: "",
  website: "",

  LinkedInLink: "",
  GitHubLink: "",
  YouTubeLink: "",
  TwitterLink: "",
  FacebookLink: "",
  InstagramLink: "",

  image: "/initialIcon.png",

  setInfoOutput(newInfoOutput) {
    set((state) => ({ ...state, ...newInfoOutput }));
  },
  
  handleChange(e) {
    const { name, value } = e.target as HTMLInputElement | HTMLSelectElement;
    set((state) => ({
      ...state,
      [name]: value,
    }));
  },
  
  onImageChange(e) {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      set((state) => ({
        ...state,
        image: URL.createObjectURL(file),
      }));
    }
  },
  
  isValidLink(linkValue) {
    return validateLink(linkValue);
  },
}));

export default useInfoStore;
