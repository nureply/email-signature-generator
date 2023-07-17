import useCustomizationStore from "@/store/customizationStore";
import useInfoStore from "@/store/infoStore";
import { useTemplateStore } from "@/store/templateStore";
import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";

const previewVariants = cva(`m-5 gap-0.1 flex`, {
  variants: {
    outerDiv: {
      plainText: ``,
      template1Left: `grid grid-cols-2 items-center p-4}`,
      template1Right: `grid grid-cols-2 items-center p-4`,
      template2Left: `grid grid-cols-2 items-center`,
      template2Right: `grid grid-cols-2 items-center`,
      template3Top: `flex-col items-center`,
      template3Bottom: `flex-col items-center`,
      initial: "hidden",
    },
    userInfo: {
      plainText: `flex-col gap-1`,
      template1Left: `flex-col gap-1`,
      template1Right: `order-1 flex-col gap-1`,
      template2Left: `flex-col gap-1`,
      template2Right: `flex-col order-1 gap-1`,
      template3Top: `flex-col gap-1`,
      template3Bottom: `flex-col order-1 gap-1`,
      initial: "",
    },
    profileIcon: {
      plainText: `hidden `,
      template1Left: ``,
      template1Right: `order-2 ml-10`,
      template2Left: `ml-10`,
      template2Right: `order-2`,
      template3Top: ``,
      template3Bottom: `order-3`,
      initial: "",
    },
    linkIcons: {
      plainText: `hidden `,
      template1Left: `flex gap-2 col-start-2 col-end-3`,
      template1Right: `flex gap-2 order-3 `,
      template2Left: `flex gap-2`,
      template2Right: `flex gap-2 col-start-2 col-end-3 order-3`,
      template3Top: `flex gap-2`,
      template3Bottom: `flex gap-2 order-2`,
      initial: "",
    },
    contactInfo: {
      plainText: ` `,
      template1Left: ``,
      template1Right: ``,
      template2Left: ``,
      template2Right: ``,
      template3Top: ``,
      template3Bottom: `flex gap-2 order-2`,
      initial: "",
    },
  },
});

export interface PreviewProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof previewVariants> {}

const Preview = ({
  className,
  outerDiv,
  userInfo,
  profileIcon,
  linkIcons,
  ...props
}: PreviewProps) => {
  const { output } = useInfoStore();

  let signOff = output.signOff;
  let fullName = output.fullName;
  let occupation = output.occupation;
  let jobTitle = output.jobTitle;
  let company = output.company;
  let workAddress = output.workAddress;
  let phoneNumber = output.phoneNumber;
  let workEmail = output.workEmail;
  let website = output.website;
  let LinkedInLink = output.LinkedInLink;
  let GitHubLink = output.GitHubLink;
  let ArtStataionLink = output.ArtStationLink;
  let YouTubeLink = output.YouTubeLink;
  let TwitterLink = output.TwitterLink;
  let InstagramLink = output.InstagramLink;
  let image = output.image;

  const { output: custom } = useCustomizationStore();

  let fontSize = custom.fontSize.toString();
  let iconSize = custom.iconSize;
  let imageSize = custom.imageSize;
  let nameColor = custom.nameColor;
  let textColor = custom.textColor;
  let linkColor = custom.linkColor;

  const template = useTemplateStore();

  return (
    <div className="w-full rounded-tl-lg rounded-tr-lg bg-grays-0">
      <div className="w-full h-7 bg-grays-1 flex gap-3">
        <div className="w-3 h-3 rounded-full bg-[#FD4646] mt-2"></div>
        <div className="w-3 h-3 rounded-full bg-[#FEB024] mt-2"></div>
        <div className="w-3 h-3 rounded-full bg-[#2AC131] mt-2"></div>
      </div>
      <div className={`mt-15 ${cn(previewVariants({ outerDiv }))}`}>
        <div className={`${cn(previewVariants({ profileIcon }))}`}>
          <div className=" rounded-full mt-5">
            <Image
              src={image}
              alt="Profile Image"
              width={imageSize}
              height={imageSize}
            />
          </div>
        </div>
        <div
          key="personalInfo "
          className={`text-[${fontSize}px] ${cn(
            previewVariants({ userInfo })
          )}`}
        >
          <div key="sign-of">{signOff}</div>
          <div key="name">{fullName} </div>
          <div key="jobInfo">
            {occupation}
            {occupation && jobTitle ? " |" : ""}
            {jobTitle}
            {jobTitle && company ? " | " : ""}
            {company}
          </div>
          <div>
            <div key="workMail">{workEmail}</div>
            <div key="website">{website}</div>
            <div key="phoneNumber">{phoneNumber}</div>
            <div key="address">{workAddress}</div>
          </div>
        </div>
        <div className={cn(previewVariants({ linkIcons }))}>
          {LinkedInLink && (
            <a href={LinkedInLink} target="_blank" rel="noopener noreferrer">
              <Linkedin size={iconSize} />
            </a>
          )}
          {GitHubLink && (
            <a href={GitHubLink} target="_blank" rel="noopener noreferrer">
              <Github size={iconSize} />
            </a>
          )}
          {YouTubeLink && (
            <a href={YouTubeLink} target="_blank" rel="noopener noreferrer">
              <Youtube size={iconSize} />
            </a>
          )}
          {TwitterLink && (
            <a href={TwitterLink} target="_blank" rel="noopener noreferrer">
              <Twitter size={iconSize} />
            </a>
          )}
          {InstagramLink && (
            <a href={InstagramLink} target="_blank" rel="noopener noreferrer">
              <Instagram size={iconSize} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export { Preview, previewVariants };
