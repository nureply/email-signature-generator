import React from "react";
import useInfoStore from "../store/infoStore";
import Heading from "./Heading";
import InputText from "./InputText";

const signOffOptions = [
  { value: "", label: "Select a sign-off" },
  { value: "Best,", label: "Best," },
  { value: "Regards,", label: "Regards," },
  { value: "Best regards,", label: "Best regards," },
  { value: "Kind regards,", label: "Kind regards," },
];
const inputTextData = [
  {
    label: "Full Name",
    id: "fullName",
    name: "fullName",
    type: "text",
  },
  {
    label: "Job Title",
    id: "jobTitle",
    name: "jobTitle",
    type: "text",
  },
  {
    label: "Company",
    id: "company",
    name: "company",
    type: "text",
  },
  {
    label: "Work Address",
    id: "workAddress",
    name: "workAddress",
    type: "text",
  },
  {
    label: "Phone Number",
    id: "phoneNumber",
    name: "phoneNumber",
    type: "text",
  },
  {
    label: "Work Email",
    id: "workEmail",
    name: "workEmail",
    type: "email",
  },
  {
    label: "Website",
    id: "website",
    name: "website",
  },
];
const inputTextLinkData = [
  {
    label: "LinkedIn",
    id: "LinkedInLink",
    name: "LinkedInLink",
  },
  {
    label: "GitHub",
    id: "GitHubLink",
    name: "GitHubLink",
  },
  {
    label: "YouTube",
    id: "YouTubeLink",
    name: "YouTubeLink",
  },
  {
    label: "Twitter",
    id: "TwitterLink",
    name: "TwitterLink",
  },
  {
    label: "Facebook",
    id: "FacebookLink",
    name: "FacebookLink",
  },
  {
    label: "Instagram",
    id: "InstagramLink",
    name: "InstagramLink",
  },
];

const Info = () => {
  const {
    signOff,
    fullName,
    jobTitle,
    company,
    workAddress,
    phoneNumber,
    workEmail,
    website,
    LinkedInLink,
    GitHubLink,
    YouTubeLink,
    TwitterLink,
    FacebookLink,
    InstagramLink,
    handleChange,
    onImageChange,
  } = useInfoStore();

  return (
    <div className="m-8">
      <div className="p-4 border-b border-background">
        <Heading
          primary="Your info"
          secondary="Enter your data and see how it looks on your selected layout"
        />
      </div>

      <div className="m-4 pb-4 border-b border-background">
        <select
          className="block w-full py-2 pl-2 pr-8 rounded-md border-2 border-highlight focus:outline-none text-fade"
          name="signOff"
          onChange={handleChange}
          value={signOff}
        >
          {signOffOptions.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div className="my-4 pb-4 border-b border-background">
        <div className="m-2 py-4">
          <Heading
            type="Description"
            primary="Personal info & contacts"
            secondary="Start filling in your data, unused fields can be left blank"
          />
        </div>
        {inputTextData.map((item) => (
          <InputText
            key={item.id}
            label={item.label}
            id={item.id}
            name={item.name}
            value={
              item.name === "fullName"
                ? fullName
                : item.name === "jobTitle"
                ? jobTitle
                : item.name === "company"
                ? company
                : item.name === "workAddress"
                ? workAddress
                : item.name === "phoneNumber"
                ? phoneNumber
                : item.name === "workEmail"
                ? workEmail
                : item.name === "website"
                ? website
                : ""
            }
            onChange={handleChange}
            type={item.type as "text" | "email"}
          />
        ))}
      </div>

      <div className="my-4 pb-4 border-b border-background">
        <div className="m-2 py-4">
          <Heading
            type="Description"
            primary="Social media links"
            secondary="Add URLs of your social media profiles"
          />
        </div>
        {inputTextLinkData.map((item) => (
          <InputText
            key={item.id}
            label={item.label}
            id={item.id}
            name={item.name}
            value={
              item.name === "LinkedInLink"
                ? LinkedInLink
                : item.name === "GitHubLink"
                ? GitHubLink
                : item.name === "YouTubeLink"
                ? YouTubeLink
                : item.name === "TwitterLink"
                ? TwitterLink
                : item.name === "FacebookLink"
                ? FacebookLink
                : item.name === "InstagramLink"
                ? InstagramLink
                : ""
            }
            onChange={handleChange}
            type="link"
          />
        ))}
      </div>

      <div className="my-4 pb-4 border-b border-background">
        <div className="mx-2 my-4">
          <Heading
            type="Description"
            primary="Add a photo"
            secondary="Can be both square or round"
          />
        </div>
        <div className="flex items-center justify-center">
          <label
            className="group block w-fit my-6 p-4 bg-background rounded-lg border-2 border-nureply-blue-full font-semibold text-nureply-blue-full hover:text-nureply-blue transition-colors relative overflow-hidden"
            htmlFor="image"
          >
            Upload Image
            <span className="absolute bottom-0 left-0 w-full h-0 bg-nureply-blue-tint transition-all duration-500 group-hover:h-full"></span>
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
      </div>
    </div>
  );
};

export default Info;
