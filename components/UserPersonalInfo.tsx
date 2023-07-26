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
  const { fontSize, nameFont, linkColor, textColor, nameColor } =
    useCustomizationStore();

  return (
    <table
      style={{
        fontSize: `${fontSize.toString()}px`,
        color: textColor,
        fontFamily: nameFont,
      }}
    >
      <tr>{signOff}</tr>
      <tr
        style={{
          color: nameColor,
        }}
      >
        {fullName}
      </tr>
      <tr>
        {jobTitle}
        {jobTitle && company ? " | " : ""}
        {company}
      </tr>
      <tr>{workEmail}</tr>
      <tr
        style={{
          color: linkColor,
        }}
      >
        {website}
      </tr>
      <tr>{phoneNumber}</tr>
      <tr>{workAddress}</tr>
    </table>
  );
};

export default UserPersonalInfo;
