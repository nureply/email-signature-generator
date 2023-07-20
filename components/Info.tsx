import useInfoStore from "../store/infoStore";
import Heading from "./Heading";
import Description from "./Description";
import InputText from "./InputText";

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
    image,
    handleChange,
    onImageChange,
  } = useInfoStore();

  const signOffData = [
    {
      label: "Sign-off",
      id: "signOff",
      name: "signOff",
      value: signOff,
    },
  ];
  const inputTextData = [
    {
      label: "Full Name",
      id: "fullName",
      name: "fullName",
      value: fullName,
      type: "text",
    },
    {
      label: "Job Title",
      id: "jobTitle",
      name: "jobTitle",
      value: jobTitle,
      type: "text",
    },
    {
      label: "Company",
      id: "company",
      name: "company",
      value: company,
      type: "text",
    },
    {
      label: "Work Address",
      id: "workAddress",
      name: "workAddress",
      value: workAddress,
      type: "text",
    },
    {
      label: "Phone Number",
      id: "phoneNumber",
      name: "phoneNumber",
      value: phoneNumber,
      type: "text",
    },
    {
      label: "Work Email",
      id: "workEmail",
      name: "workEmail",
      value: workEmail,
      type: "email",
    },
    {
      label: "Website",
      id: "website",
      name: "website",
      value: website,
    },
  ];
  const inputTextLinkData = [
    {
      label: "LinkedIn",
      id: "LinkedInLink",
      name: "LinkedInLink",
      value: LinkedInLink,
    },
    {
      label: "GitHub",
      id: "GitHubLink",
      name: "GitHubLink",
      value: GitHubLink,
    },
    {
      label: "YouTube",
      id: "YouTubeLink",
      name: "YouTubeLink",
      value: YouTubeLink,
    },
    {
      label: "Twitter",
      id: "TwitterLink",
      name: "TwitterLink",
      value: TwitterLink,
    },
    {
      label: "Facebook",
      id: "FacebookLink",
      name: "FacebookLink",
      value: FacebookLink,
    },
    {
      label: "Instagram",
      id: "InstagramLink",
      name: "InstagramLink",
      value: InstagramLink,
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
              label={item.label}
              id={item.id}
              name={item.name}
              value={item.value}
              onChange={handleChange}
            />
          ))}
          <select className="block w-full py-2 pl-2 pr-8 rounded-md border-2 border-highlight focus:outline-none text-fade" name="signOff" onChange={handleChange}>
            <option value="">Select a sign-off</option>
            <option value="Regards,">Regards,</option>
            <option value="Best regards,">Best regards,</option>
            <option value="Kind regards,">Kind regards,</option>
          </select>
        </div>
        <div className="my-4 pb-4 border-b border-background">
          <div className="m-2 py-4">
            <Description
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
    value={item.value}
    onChange={handleChange}
    type={item.type as "text" | "email"}
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
          {inputTextLinkData.map((item) => (
  <InputText
    key={item.id}
    label={item.label}
    id={item.id}
    name={item.name}
    value={item.value}
    onChange={handleChange}
    type="link"
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
            className="block w-fit my-6 p-4 bg-background rounded-lg border-2 border-nureply-blue-full font-semibold text-nureply-blue-full hover:text-nureply-blue transition-colors"
            htmlFor="image"
          >
            Upload Image
          </label>
          <input
            className="hidden"
            type="file"
            id="image"
            name="image"
            accept="image/*" // currently accepting all
            onChange={onImageChange}
          />
        </div>
      </div>
    </>
  );
};

export default Info;
