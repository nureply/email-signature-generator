import useCustomizationStore from "@/store/customizationStore";
import useInfoStore from "@/store/infoStore";
import { useTemplateStore } from "@/store/templateStore";
import Image from "next/image";

const UserLinkIcons = () => {
  const {
    LinkedInLink,
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
    <>
      <tr>
        <td style={{ paddingLeft: "6px" }}>
          {LinkedInLink && (
            <a href={LinkedInLink} target="_blank" rel="noopener noreferrer">
              <Image
                src="https://i.imgur.com/85qsHCu.png"
                height={iconSize}
                width={iconSize}
                alt="LinkedIn Icon"
              />
            </a>
          )}
        </td>
        <td style={{ paddingLeft: "6px" }}>
          {YouTubeLink && (
            <a href={YouTubeLink} target="_blank" rel="noopener noreferrer">
              <Image
                src="https://i.imgur.com/fUBlfhT.png"
                height={iconSize}
                width={iconSize}
                alt="Youtube Icon"
              />
            </a>
          )}
        </td>
        <td style={{ paddingLeft: "6px" }}>
          {TwitterLink && (
            <a href={TwitterLink} target="_blank" rel="noopener noreferrer">
              <Image
                src="https://imgur.com/gmuTUFy.png"
                height={iconSize}
                width={iconSize}
                alt="Twitter Icon"
              />
            </a>
          )}
        </td>
        <td style={{ paddingLeft: "6px" }}>
          {FacebookLink && (
            <a href={FacebookLink} target="_blank" rel="noopener noreferrer">
              <Image
                src="https://i.imgur.com/H5XUTzh.png"
                height={iconSize}
                width={iconSize}
                alt="Facebook Icon"
              />
            </a>
          )}
        </td>
        <td style={{ paddingLeft: "6px" }}>
          {InstagramLink && (
            <a href={InstagramLink} target="_blank" rel="noopener noreferrer">
              <Image
                src="https://i.imgur.com/Z9Gkdd6.png"
                height={iconSize}
                width={iconSize}
                alt="Instagram Icon"
              />
            </a>
          )}
        </td>
      </tr>
    </>
  );
};

export default UserLinkIcons;
