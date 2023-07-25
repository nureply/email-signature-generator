import useCustomizationStore from "@/store/customizationStore";
import useInfoStore from "@/store/infoStore";
import { useTemplateStore } from "@/store/templateStore";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

const UserLinkIcons = () => {
  const {
    LinkedInLink,
    GitHubLink,
    YouTubeLink,
    TwitterLink,
    FacebookLink,
    InstagramLink,
  } = useInfoStore();
  const { iconSize } = useCustomizationStore();
  const { template } = useTemplateStore();

  if (template.id === "plainText") {
    return null;
  }
  return (
    <table style={{ display: "flex", gap: "0.125rem", padding: "1rem" }}>
      {LinkedInLink && (
        <a href={LinkedInLink} target="_blank" rel="noopener noreferrer">
          <Linkedin size={iconSize} color="#343A40" />
        </a>
      )}
      {GitHubLink && (
        <a href={GitHubLink} target="_blank" rel="noopener noreferrer">
          <Github size={iconSize} color="#343A40" />
        </a>
      )}
      {YouTubeLink && (
        <a href={YouTubeLink} target="_blank" rel="noopener noreferrer">
          <Youtube size={iconSize} color="#343A40" />
        </a>
      )}
      {TwitterLink && (
        <a href={TwitterLink} target="_blank" rel="noopener noreferrer">
          <Twitter size={iconSize} color="#343A40" />
        </a>
      )}
      {FacebookLink && (
        <a href={FacebookLink} target="_blank" rel="noopener noreferrer">
          <Facebook size={iconSize} color="#343A40" />
        </a>
      )}
      {InstagramLink && (
        <a href={InstagramLink} target="_blank" rel="noopener noreferrer">
          <Instagram size={iconSize} color="#343A40" />
        </a>
      )}
    </table>
  );
};

export default UserLinkIcons;
