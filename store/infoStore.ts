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
  imageUrl: string | ArrayBuffer | null;

  setInfoOutput: (newInfoOutput: Partial<State>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const useInfoStore = create<State>((set) => ({
  signOff: "Best regards,",
  fullName: "John Smith",
  jobTitle: "Manager",
  company: "Nureply",
  workAddress: "0000 SE 1st Street Rd, Miami FL 00000-0000",
  phoneNumber: "+000 000 000 0000",
  workEmail: "johnsmith@nureply.com",
  website: "nureply.com",
  LinkedInLink: "https://www.linkedin.com/in/nureply/",
  YouTubeLink: "https://www.youtube.com/user/nureply/",
  TwitterLink: "https://www.twitter.com/nureply/",
  FacebookLink: "https://www.facebook.com/nureply/",
  InstagramLink: "https://www.instagram.com/nureply/",
  image: "/initialIcon.png",
  imageUrl: "/initialIcon.png", // since this is not a URL, copying this won't work, custom images currently seem to work

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

  onImageChange: (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUrl = reader.result;
        set((state) => ({
          ...state,
          imageUrl: dataUrl,
        }));
      };
      reader.readAsDataURL(file);
    }
  },
}));

export default useInfoStore;
