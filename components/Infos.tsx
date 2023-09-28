import React from "react";
import { Info } from "lucide-react";
import useInfoStore from "../store/infoStore";
import Heading from "./Heading";
import InputText from "./InputText";
import Tooltip from "./Tooltip";
import Slider from "./Slider";
import useCustomizationStore from "@/store/customizationStore";
import { useTemplateStore } from "@/store/templateStore";

const sliderData = [
  {
    label: "Image Size",
    id: "imageSize",
    name: "imageSize",
    min: 100,
    max: 120,
    step: 1,
  },
];

const imageData = [
  {
    label: "Image URL",
    id: "imageURL",
    name: "imageURL",
    type: "text",
    tooltip: "Add the URL of your profile picture",
    maxLength: 200,
  },
];
const signOffOptions = [
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
    maxLength: 50,
  },
  {
    label: "Job Title",
    id: "jobTitle",
    name: "jobTitle",
    type: "text",
    maxLength: 25,
  },
  {
    label: "Company",
    id: "company",
    name: "company",
    type: "text",
    maxLength: 50,
  },
  {
    label: "Work Address",
    id: "workAddress",
    name: "workAddress",
    type: "text",
    maxLength: 100,
  },
  {
    label: "Phone Number",
    id: "phoneNumber",
    name: "phoneNumber",
    type: "text",
    maxLength: 15,
  },
  {
    label: "Work Email",
    id: "workEmail",
    name: "workEmail",
    type: "email",
    maxLength: 50,
  },
  {
    label: "Website",
    id: "website",
    name: "website",
    maxLength: 100,
  },
];
const inputTextLinkData = [
  {
    label: "LinkedIn",
    id: "LinkedInLink",
    name: "LinkedInLink",
    maxLength: 100,
  },
  {
    label: "YouTube",
    id: "YouTubeLink",
    name: "YouTubeLink",
    maxLength: 100,
  },
  {
    label: "Twitter",
    id: "TwitterLink",
    name: "TwitterLink",
    maxLength: 100,
  },
  {
    label: "Facebook",
    id: "FacebookLink",
    name: "FacebookLink",
    maxLength: 100,
  },
  {
    label: "Instagram",
    id: "InstagramLink",
    name: "InstagramLink",
    maxLength: 100,
  },
];

const Infos = () => {
  const {
    imageURL,
    signOff,
    fullName,
    jobTitle,
    company,
    workAddress,
    phoneNumber,
    workEmail,
    website,
    LinkedInLink,
    YouTubeLink,
    TwitterLink,
    FacebookLink,
    InstagramLink,
    handleChange,
  } = useInfoStore();

  const { imageSize, handleCustomizationChange } = useCustomizationStore();
  const { template } = useTemplateStore();

  return (
    <div className="p-4 overflow-y-scroll h-[82vh]">
      <div className="m-2 py-4 border-b border-background">
        <Heading
          primary="Your info"
          secondary="Enter your data and see how it looks on your selected layout"
          type="Description"
        />
      </div>

      {template.id !== "plainText" && (
        <div className="my-4 pb-4 border-b border-background">
          <div className="mx-2 my-4">
            <Heading
              type="Description"
              primary="Add a photo"
              secondary="Add the link of your image"
            />
          </div>
          {imageData.map((item) => (
            <div key={item.id} className="relative">
              <InputText
                label={item.label}
                id={item.id}
                name={item.name}
                value={imageURL}
                onChange={handleChange}
                type="text"
                maxLength={item.maxLength}
              />
              {item.tooltip && <Tooltip tooltipText={item.tooltip} />}
            </div>
          ))}

          <div className="w-full p-4">
            {sliderData.map(({ label, id, name, min, max, step }) => {
              let value;
              switch (name) {
                case "imageSize":
                  value = imageSize;
                  break;
                default:
                  value = 0;
              }
              return (
                <Slider
                  key={id}
                  label={label}
                  id={id}
                  name={name}
                  min={min}
                  max={max}
                  step={step}
                  value={value}
                  onChange={handleCustomizationChange}
                />
              );
            })}
          </div>
        </div>
      )}

      <div className="pb-4 border-b border-background">
        <label
          htmlFor="signOff"
          className="block px-2 font-semibold text-default"
        >
          Select a sign-off
        </label>
        <select
          className="block w-full mt-4 py-2 pl-2 pr-8 bg-window rounded-md border-2 border-highlight focus:outline-none text-fade"
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
            maxLength={item.maxLength}
          />
        ))}
      </div>

      {template.id !== "plainText" && (
        <div className="my-4 pb-4 border-b border-background">
          <div className="m-2 py-4">
            <Heading
              type="Description"
              primary="Social media links"
              secondary="Add URLs of your social media profiles"
            />
            <div className="flex items-center mt-2">
              <Info className="w-4 h-4 text-fade" />
              <p className="ml-1 text-sm text-fade">
                Simply clear the input fields to remove social media icons.
              </p>
            </div>
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
              maxLength={item.maxLength}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Infos;
