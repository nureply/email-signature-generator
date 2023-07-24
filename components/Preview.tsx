import useCustomizationStore from "@/store/customizationStore";
import useInfoStore from "@/store/infoStore";
import { useTemplateStore } from "@/store/templateStore";
import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const previewVariants = cva(`m-5 gap-0.1 flex`, {
  variants: {
    outerDiv: {
      plainText: ``,
      template1Left: `grid grid-cols-2 items-center p-4`,
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
      template1Right: `order-1 flex-col gap-1 justify-self-end`,
      template2Left: `flex-col gap-1`,
      template2Right: `flex-col order-1 gap-1 justify-self-end`,
      template3Top: `flex-col gap-1`,
      template3Bottom: `flex-col order-1 gap-1`,
      initial: "",
    },
    profileIcon: {
      plainText: `hidden `,
      template1Left: `justify-self-end`,
      template1Right: `order-2 ml-10`,
      template2Left: `ml-10 justify-self-end`,
      template2Right: `order-2 `,
      template3Top: ``,
      template3Bottom: `order-3`,
      initial: "",
    },
    linkIcons: {
      plainText: `hidden `,
      template1Left: `flex gap-2 col-start-2 col-end-3`,
      template1Right: `flex gap-2 order-3 justify-self-end`,
      template2Left: `flex gap-2 justify-self-end`,
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

const Preview = ({ className, ...props }: PreviewProps) => {
  const {
    fontSize,
    nameFont,
    linkColor,
    textColor,
    nameColor,
    imageSize,
    iconSize,
  } = useCustomizationStore();
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
  } = useInfoStore();
  const { template, setTemplate } = useTemplateStore();
  const [signature, setSignature] = useState({
    outerDivStyle: {},
    userInfoStyle: {},
    contactInfoStyle: {},
    profileIconStyle: {},
    linkIconsStyle: {},
  });

  const outputSignature = (
    <div style={signature.userInfoStyle}>
      <div style={signature.profileIconStyle}>
        <div className="rounded-full mt-5">
          <Image
            src={image}
            alt="Profile Image"
            width={imageSize}
            height={imageSize}
          />
        </div>
      </div>
      <div
        key="personalInfo"
        style={{
          fontSize: `${fontSize.toString()}px`,
          color: textColor,
          ...signature.userInfoStyle,
        }}
      >
        <div>{signOff}</div>
        <div style={{ color: nameColor }}>{fullName}</div>
        <div key="jobInfo">
          {jobTitle}
          {jobTitle && company ? " | " : ""}
          {company}
        </div>
        <div>
          <div>{workEmail}</div>
          <div style={{ color: linkColor }}>{website}</div>
          <div>{phoneNumber}</div>
          <div>{workAddress}</div>
        </div>
      </div>
      <div style={signature.linkIconsStyle}>
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
        {FacebookLink && (
          <a href={FacebookLink} target="_blank" rel="noopener noreferrer">
            <Facebook size={iconSize} />
          </a>
        )}
        {InstagramLink && (
          <a href={InstagramLink} target="_blank" rel="noopener noreferrer">
            <Instagram size={iconSize} />
          </a>
        )}
      </div>
    </div>
  );

  useEffect(() => {
    if (template.id === "plainText") {
      setSignature({
        ...signature,
        userInfoStyle: {
          marginTop: "15px",
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
        },
        profileIconStyle: {
          display: "none",
        },
        linkIconsStyle: {
          display: "none",
        },
      });
    } else if (template.id === "template1Left") {
      setSignature({
        ...signature,
        outerDivStyle: {
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          alignItems: "center",
          padding: "1rem",
        },
        userInfoStyle: {
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
        },
        contactInfoStyle: {},
        profileIconStyle: { justifySelf: "end" },
        linkIconsStyle: {
          display: "flex",
          gap: "0.5rem",
          gridColumnStart: "2",
          gridColumnEnd: "3",
        },
      });
    } else if (template.id === "template1Right") {
      setSignature({
        ...signature,
        outerDivStyle: {
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          alignItems: "center",
          padding: "1rem",
        },
        userInfoStyle: {
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
        },
        contactInfoStyle: {},
        profileIconStyle: { marginLeft: "10px" },
        linkIconsStyle: {
          display: "flex",
          gap: "0.5rem",
          justifySelf: "end",
        },
      });
    } else if (template.id === "template2Left") {
      setSignature({
        ...signature,
        outerDivStyle: {
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          alignItems: "center",
        },
        userInfoStyle: {
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
        },
        contactInfoStyle: {},
        profileIconStyle: { marginLeft: "10px", justifySelf: "end" },
        linkIconsStyle: {
          display: "flex",
          gap: "0.5rem",
        },
      });
    } else if (template.id === "template2Right") {
      setSignature({
        ...signature,
        outerDivStyle: {
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          alignItems: "center",
        },
        userInfoStyle: {
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
        },
        contactInfoStyle: {},
        profileIconStyle: { justifySelf: "end" },
        linkIconsStyle: {
          display: "flex",
          gap: "0.5rem",
          gridColumnStart: "2",
          gridColumnEnd: "3",
        },
      });
    } else if (template.id === "template3Top") {
      setSignature({
        ...signature,
        outerDivStyle: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
        userInfoStyle: {
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
        },
        contactInfoStyle: {},
        profileIconStyle: {},
        linkIconsStyle: { display: "flex", gap: "0.5rem" },
      });
    } else if (template.id === "template3Bottom") {
      setSignature({
        ...signature,
        outerDivStyle: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
        userInfoStyle: {
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          order: "1",
        },
        contactInfoStyle: { display: "flex", gap: "0.5rem", order: "2" },
        profileIconStyle: {},
        linkIconsStyle: {},
      });
    }
  }, [template.id]);

  let templateId = template.id;

  return (
    <div className="w-full rounded-lg bg-gray-100">
      <div className="w-full h-7 rounded-lg bg-gray-100 flex gap-3">
        <div className="w-3 h-3 rounded-full bg-[#FD4646] ml-3 mt-2"></div>
        <div className="w-3 h-3 rounded-full bg-[#FEB024] mt-2"></div>
        <div className="w-3 h-3 rounded-full bg-[#2AC131] mt-2"></div>
      </div>
      <div className="pl-4 border-t-2 border-gray-300">
        Send from: emma@woodpecker.com Emma Smith
      </div>
      <div className="pl-4 border-y-2  border-gray-300">
        Subject: Get new company email signatures
      </div>

      <div className="m-5">
        <div>{"Hi {{Name}},"}</div>
        <div>
          Apparently, email signatures can mess up deliverability. Did you know
          that? News to me.
        </div>
        <span>-----</span>
      </div>
      <div className={`mt-15 ${cn(previewVariants({ outerDiv: templateId }))}`}>
        <div className={`${cn(previewVariants({ profileIcon: templateId }))}`}>
          <div className="rounded-full mt-5">
            <Image
              src={image}
              alt="Profile Image"
              width={imageSize}
              height={imageSize}
            />
          </div>
        </div>
        <div
          key="personalInfo"
          style={{ fontSize: `${fontSize.toString()}px`, color: textColor }}
          className={`${cn(previewVariants({ userInfo: templateId }))}`}
        >
          <div>{signOff}</div>
          <div style={{ color: nameColor }}>{fullName} </div>
          <div key="jobInfo">
            {jobTitle}
            {jobTitle && company ? " | " : ""}
            {company}
          </div>
          <div>
            <div>{workEmail}</div>
            <div style={{ color: linkColor }}>{website}</div>
            <div>{phoneNumber}</div>
            <div>{workAddress}</div>
          </div>
        </div>
        <div className={cn(previewVariants({ linkIcons: templateId }))}>
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
          {FacebookLink && (
            <a href={FacebookLink} target="_blank" rel="noopener noreferrer">
              <Facebook size={iconSize} />
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
