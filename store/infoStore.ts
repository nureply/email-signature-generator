import { create } from "zustand";
import { ChangeEvent } from "react";

interface State {
  signOff: string;
  fullName: string;
  jobTitle: string;
  company: string;
  workAddress: string;
  phoneNumber: string;
  workEmail: string;
  website: string;
  LinkedInLink: string;
  YouTubeLink: string;
  TwitterLink: string;
  FacebookLink: string;
  InstagramLink: string;
  image: string;
  imageURL: string;

  setInfoOutput: (newInfoOutput: Partial<State>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onImageChange: (url: string) => void;
}

const useInfoStore = create<State>((set) => ({
  signOff: "",
  fullName: "John Smith",
  jobTitle: "Manager",
  company: "Nureply",
  workAddress: "0000 SE 1st Street Rd, Miami FL 00000-0000",
  phoneNumber: "+000 000 000 0000",
  workEmail: "johnsmith@nureply.com",
  website: "nureply.com",
  LinkedInLink: "https://www.linkedin.com/in/",
  YouTubeLink: "https://www.youtube.com/user/",
  TwitterLink: "https://www.twitter.com/",
  FacebookLink: "https://www.facebook.com/",
  InstagramLink: "https://www.instagram.com/",
  image: "/initialIcon.png",
  imageURL: "/initialIcon.png",

  setInfoOutput: (newInfoOutput) => {
    set((state) => ({ ...state, ...newInfoOutput }));
  },

  handleChange: (e) => {
    const { name, value } = e.target as HTMLInputElement | HTMLSelectElement;
    set((state) => ({
      ...state,
      [name]: value,
    }));
  },

  onImageChange: (url) => {
    set((state) => ({
      ...state,
      imageURL: url,
    }));
  },
}));

export default useInfoStore;