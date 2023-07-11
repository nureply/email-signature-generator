import React from "react";
import { SetStateAction, useState } from "react";

import InputText from "./InputText";

const Info = () => {
  const [output, setOutput] = useState({
    textInput: "",
    fullName: "",
    occupation: "",
    jobTitle: "",
    company: "",
    workAdress: "",
    phoneNumber: "",
    workEmail: "",
    website: "",

    LinkedInLink: "",
    GitHubLink: "",
    ArtStationLink: "",
    YouTubeLink: "",
    TwitterLink: "",
    InstagramLink: "",
  });

  const handleChange = (e) => {
    setOutput({ ...output, [e.target.name]: e.target.value });
  };

  const [image, setImage] = useState("");

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const inputTextDataDefault = [
    {
      label: "Full Name",
      id: "fullName",
      name: "fullName",
      value: output.fullName,
    },
    {
      label: "Occupation",
      id: "occupation",
      name: "occupation",
      value: output.occupation,
    },
    {
      label: "Job Title",
      id: "jobTitle",
      name: "jobTitle",
      value: output.jobTitle,
    },
    {
      label: "Company",
      id: "company",
      name: "company",
      value: output.company,
    },
    {
      label: "Work Adress",
      id: "workAdress",
      name: "workAdress",
      value: output.workAdress,
    },
    {
      label: "Phone Number",
      id: "phoneNumber",
      name: "phoneNumber",
      value: output.phoneNumber,
    },
    {
      label: "Work Email",
      id: "workEmail",
      name: "workEmail",
      value: output.workEmail,
    },
    {
      label: "Website",
      id: "website",
      name: "website",
      value: output.website,
    },
  ];
  const inputTextDataColored = [
    {
      label: "LinkedIn",
      id: "LinkedInLink",
      name: "LinkedInLink",
      value: output.LinkedInLink,
    },
    {
      label: "GitHub",
      id: "GitHubLink",
      name: "GitHubLink",
      value: output.GitHubLink,
    },
    {
      label: "ArtStation",
      id: "ArtStationLink",
      name: "ArtStationLink",
      value: output.ArtStationLink,
    },
    {
      label: "YouTube",
      id: "YouTubeLink",
      name: "YouTubeLink",
      value: output.YouTubeLink,
    },
    {
      label: "Twitter",
      id: "TwitterLink",
      name: "TwitterLink",
      value: output.TwitterLink,
    },
    {
      label: "Instagram",
      id: "InstagramLink",
      name: "InstagramLink",
      value: output.InstagramLink,
    },
  ];

  return (
    <>
      <div className="m-8">
        <div
          className="w-full p-4
        border-b border-gray-100"
        >
          <h1 className="text-2xl font-bold text-nureply-blue-full underline decoration-nureply-blue">
            Your info
          </h1>
          <p className="text-base text-gray-600">
            Enter your data and see how it looks on your selected layout
          </p>
        </div>
        <div className="my-4 pb-4 border-b border-background">
          {inputTextDataDefault.map((item) => (
            <InputText
              label={item.label}
              id={item.id}
              name={item.name}
              value={item.value}
              onChange={handleChange}
            />
          ))}
        </div>

        <div className="my-4 pb-4 border-b border-background">
          {inputTextDataColored.map((item) => (
            <InputText
              colored
              label={item.label}
              id={item.id}
              name={item.name}
              value={item.value}
              onChange={handleChange}
            />
          ))}
        </div>

        <label
          htmlFor="image"
          className="block p-1 text-base font-semibold text-nureply-blue-full hover:text-nureply-blue"
        >
          Upload Image
        </label>
        <input
          className="hidden"
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={onImageChange}
        />
      </div>
    </>
  );
};

export default Info;
