import useCustomizationStore from "@/store/customizationStore";
import useInfoStore from "@/store/infoStore";

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
              <img src="https://i.imgur.com/JTfwuQG.png" width={iconSize} height={iconSize} />
               
            </>
          )}
          {workEmail}
        </td>
      </tr>
      <tr style={{ color: linkColor }}>
        <td style={{ display: "flex" }}>
          {website && (
            <>
              <img src="https://i.imgur.com/HLoZI2E.png" width={iconSize} height={iconSize} />
               
            </>
          )}
          {website}
        </td>
      </tr>
      <tr>
        <td style={{ display: "flex" }}>
          {phoneNumber && (
            <>
              <img src="https://i.imgur.com/m6mkG6W.png" width={iconSize} height={iconSize} />
               
            </>
          )}
          {phoneNumber}
        </td>
      </tr>
      <tr>
        <td style={{ display: "flex" }}>
          {workAddress && (
            <>
              <img src="https://i.imgur.com/1BFyCw1.png" width={iconSize} height={iconSize} />
               
            </>
          )}
          {workAddress}
        </td>
      </tr>
    </table>
  );
};

export default UserPersonalInfo;
