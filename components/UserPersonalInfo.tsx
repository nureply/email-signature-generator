import useCustomizationStore from "@/store/customizationStore";
import useInfoStore from "@/store/infoStore";

import { MapPin, Mail, Globe, Phone } from "lucide-react";

const UserPersonalInfo = () => {
  const {
    signOff,
    fullName,
    jobTitle,
    company,
    workAddress,
    phoneNumber,
    workEmail,
    website,
  } = useInfoStore();
  const { fontSize, nameFont, linkColor, textColor, nameColor, iconSize } =
    useCustomizationStore();

  return (
    <table
      cellPadding={0}
      cellSpacing={0}
      style={{
        fontSize: `${fontSize}px`,
        fontFamily: nameFont,
        color: textColor,
        borderCollapse: "collapse",
      }}
    >
      <tr>
        <td>{signOff}</td>
      </tr>
      <tr style={{ color: nameColor }}>
        <td>{fullName}</td>
      </tr>
      <tr>
        <td>
          {jobTitle}
          {jobTitle && company ? " | " : ""}
          {company}
        </td>
      </tr>
      <tr>
        <td style={{ display: "flex" }}>
          {workEmail && (
            <>
              <Mail size={iconSize} />
            </>
          )}
          {workEmail}
        </td>
      </tr>
      <tr style={{ color: linkColor }}>
        <td style={{ display: "flex" }}>
          {website && (
            <>
              <Globe size={iconSize} />
            </>
          )}
          {website}
        </td>
      </tr>
      <tr>
        <td style={{ display: "flex" }}>
          {phoneNumber && (
            <>
              <Phone size={iconSize} />
            </>
          )}
          {phoneNumber}
        </td>
      </tr>
      <tr>
        <td style={{ display: "flex" }}>
          {workAddress && (
            <>
              <MapPin size={iconSize} />
            </>
          )}
          {workAddress}
        </td>
      </tr>
    </table>
  );
};

export default UserPersonalInfo;
