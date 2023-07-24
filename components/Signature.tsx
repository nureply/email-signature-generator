import useCustomizationStore from "@/store/customizationStore";
import useInfoStore from "@/store/infoStore";
import { useTemplateStore } from "@/store/templateStore";
import {
  Linkedin,
  Github,
  Youtube,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import { useEffect, useState } from "react";

const Signature = () => {
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

  let templateId = template.id;

  useEffect(() => {
    if (template.id === "plainText") {
      setSignature({
        contactInfoStyle: {},
        outerDivStyle: {},
        userInfoStyle: {
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
        outerDivStyle: {
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          alignItems: "center",
          padding: "1rem",
          gap: "1rem",
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
          order: 1,
        },
        contactInfoStyle: {},
        profileIconStyle: { marginLeft: "10px", order: 2 },
        linkIconsStyle: {
          display: "flex",
          gap: "0.5rem",
          justifySelf: "end",
          order: 3,
          margin: "1.25rem",
        },
      });
    } else if (template.id === "template2Left") {
      setSignature({
        outerDivStyle: {
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          alignItems: "center",
        },
        userInfoStyle: {
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          order: 2,
        },
        contactInfoStyle: {},
        profileIconStyle: {
          marginLeft: "10px",
          justifySelf: "end",
          order: 1,
          margin: "1.25rem",
        },
        linkIconsStyle: {
          display: "flex",
          gap: "0.5rem",
          order: 3,
          marginLeft: "1.25rem",
        },
      });
    } else if (template.id === "template2Right") {
      setSignature({
        outerDivStyle: {
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          alignItems: "center",
        },
        userInfoStyle: {
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          order: 1,
        },
        contactInfoStyle: {},
        profileIconStyle: { justifySelf: "end", margin: "1.25rem", order: 2 },
        linkIconsStyle: {
          display: "flex",
          gap: "0.5rem",
          gridColumnStart: "2",
          gridColumnEnd: "3",
          order: 3,
        },
      });
    } else if (template.id === "template3Top") {
      setSignature({
        outerDivStyle: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
        userInfoStyle: {
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          marginTop: "1.25rem",
          marginBottom: "1.25rem",
        },
        contactInfoStyle: {},
        profileIconStyle: {},
        linkIconsStyle: { display: "flex", gap: "0.5rem" },
      });
    } else if (template.id === "template3Bottom") {
      setSignature({
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
        profileIconStyle: { order: 3 },
        linkIconsStyle: {
          display: "flex",
          gap: "0.5rem",
          order: 2,
          marginTop: "1.25rem",
          marginBottom: "1.25rem",
        },
      });
    }
  }, [template.id]);
  return (
    <div style={{ margin: "1.25rem", gap: "0.1rem", display: "flex" }}>
      <div style={signature.outerDivStyle}>
        <div style={signature.profileIconStyle}>
          <img
            src={image}
            alt="Profile Image"
            width={imageSize}
            height={imageSize}
          />
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
          <div
            style={{
              color: nameColor,
            }}
          >
            {fullName}
          </div>
          <div key="jobInfo">
            {jobTitle}
            {jobTitle && company ? " | " : ""}
            {company}
          </div>
          <div>
            <div>{workEmail}</div>
            <div
              style={{
                color: linkColor,
              }}
            >
              {website}
            </div>
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
    </div>
  );
};

export default Signature;
