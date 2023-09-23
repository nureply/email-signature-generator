import { useTemplateStore } from "@/store/templateStore";
import useInfoStore from "@/store/infoStore";
import useCustomizationStore from "@/store/customizationStore";

const UserLinkIcons = () => {
  const {
    LinkedInLink,
    YouTubeLink,
    TwitterLink,
    FacebookLink,
    InstagramLink,
  } = useInfoStore();
  const { template } = useTemplateStore();
  const { iconSize } = useCustomizationStore();

  if (template.id === "plainText") {
    return null;
  }
  return (
    <>
      <tr>
        <td style={{ paddingLeft: "6px" }}>
          {LinkedInLink && (
            <a href={LinkedInLink} target="_blank" rel="noopener noreferrer">
              <img
                src="https://i.imgur.com/V1taUrJ.png"
                alt="LinkedIn Icon"
                style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
              />
            </a>
          )}
        </td>
        <td style={{ paddingLeft: "6px" }}>
          {YouTubeLink && (
            <a href={YouTubeLink} target="_blank" rel="noopener noreferrer">
              <img
                src="https://i.imgur.com/jasTiCn.png"
                alt="Youtube Icon"
                style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
              />
            </a>
          )}
        </td>
        <td style={{ paddingLeft: "6px" }}>
          {TwitterLink && (
            <a href={TwitterLink} target="_blank" rel="noopener noreferrer">
              <img
                src="https://imgur.com/gmuTUFy.png"
                alt="Twitter Icon"
                style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
              />
            </a>
          )}
        </td>
        <td style={{ paddingLeft: "6px" }}>
          {FacebookLink && (
            <a href={FacebookLink} target="_blank" rel="noopener noreferrer">
              <img
                src="https://i.imgur.com/lrRAdSk.png"
                alt="Facebook Icon"
                style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
              />
            </a>
          )}
        </td>
        <td style={{ paddingLeft: "6px" }}>
          {InstagramLink && (
            <a href={InstagramLink} target="_blank" rel="noopener noreferrer">
              <img
                src="https://i.imgur.com/tLtySgz.png"
                alt="Instagram Icon"
                style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
              />
            </a>
          )}
        </td>
      </tr>
    </>
  );
};

export default UserLinkIcons;
