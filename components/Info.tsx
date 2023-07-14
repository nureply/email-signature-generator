import useInfoStore from "../store/infoStore";

import Heading from "./Heading";
import Description from "./Description";
import InputText from "./InputText";

const Info = () => {
  const { output, setOutput, handleChange, onImageChange } = useInfoStore();

  const {
    textInput,

    signOff,

    fullName,
    occupation,
    jobTitle,
    company,
    workAddress,
    phoneNumber,
    workEmail,
    website,

    LinkedInLink,
    GitHubLink,
    ArtStationLink,
    YouTubeLink,
    TwitterLink,
    InstagramLink,

    image,
  } = output;

  const signOffData = [
    {
      label: "Sign-off",
      id: "signOff",
      name: "signOff",
      value: output.signOff,
    },
  ];
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
      label: "Work Address",
      id: "workAddress",
      name: "workAddress",
      value: output.workAddress,
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
        <div className="p-4 border-b border-background">
          <Heading
            primary="Your info"
            secondary="Enter your data and see how it looks on your selected layout"
          />
        </div>

        <div className="m-4 pb-4 border-b border-background">
          {signOffData.map((item) => (
            <InputText
              key={item.id}
              colored
              label={item.label}
              id={item.id}
              name={item.name}
              value={item.value}
              onChange={handleChange}
            />
          ))}
        </div>

        <div className="my-4 pb-4 border-b border-background">
          <div className="m-2 py-4">
            <Description
              primary="Personal info & contacts"
              secondary="Start filling in your data, unused fields can be left blank"
            />
          </div>
          {inputTextDataDefault.map((item) => (
            <InputText
              key={item.id}
              label={item.label}
              id={item.id}
              name={item.name}
              value={item.value}
              onChange={handleChange}
            />
          ))}
        </div>

        <div className="my-4 pb-4 border-b border-background">
          <div className="m-2 py-4">
            <Description
              primary="Social media links"
              secondary="Add URLs of your social media profiles"
            />
          </div>
          {inputTextDataColored.map((item) => (
            <InputText
              key={item.id}
              colored
              label={item.label}
              id={item.id}
              name={item.name}
              value={item.value}
              onChange={handleChange}
            />
          ))}
        </div>

        <div className="my-4 pb-4 border-b border-background">
          <div className="mx-2 my-4">
            <Description
              primary="Add a photo"
              secondary="Can be both square or round"
            />
          </div>
          <label
            className="block w-fit p-4 bg-background border border-nureply-blue-full rounded-lg font-semibold text-nureply-blue-full hover:text-nureply-blue transition-colors"
            htmlFor="image"
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
      </div>
    </>
  );
};

export default Info;
