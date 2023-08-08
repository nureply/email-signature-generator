import useCustomizationStore from "@/store/customizationStore";
import useInfoStore from "@/store/infoStore";
import { useTemplateStore } from "@/store/templateStore";

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
  const { template } = useTemplateStore();

  if (template.id === "plainText") {
    return (
      <div
        style={{
          textSizeAdjust: "13px",
          color: "gray-900",
          fontFamily: "sans-serif",
        }}
      >
        {signOff}
        <br />
        {fullName}
        <br />
        {jobTitle} | {company} <br />
        {phoneNumber}
        <br />
        {workEmail}
        <br />
        {workAddress}
        <br />
        {website}
      </div>
    );
  } else {
    return (
      <>
        <tr
          style={{
            color: textColor,
            fontSize: `${fontSize}px`,
            fontFamily: nameFont,
          }}
        >
          <td style={{ paddingBottom: "4px" }}>{signOff}</td>
        </tr>
        <tr
          style={{
            color: textColor,
            fontSize: `${fontSize}px`,
            fontFamily: nameFont,
          }}
        >
          <td style={{ color: nameColor, paddingBottom: "4px" }}>{fullName}</td>
        </tr>
        <tr
          style={{
            borderBottom: "1px solid #868E96",
            paddingBottom: "4px",
          }}
        >
          <td>
            <table
              style={{
                color: textColor,
                fontSize: `${fontSize}px`,
                fontFamily: nameFont,
              }}
            >
              <tbody>
                <tr>
                  <td>{jobTitle}</td>
                  <td style={{ paddingLeft: "16px" }}>{company}</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr
          style={{
            paddingTop: "4px",
            color: textColor,
            fontSize: `${fontSize}px`,
            fontFamily: nameFont,
          }}
        >
          <td>
            <table>
              <tbody>
                <tr>
                  <td>{phoneNumber}</td>
                  <td style={{ paddingLeft: "16px" }}>{workEmail}</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr
          style={{
            paddingTop: "4px",
            color: textColor,
            fontSize: `${fontSize}px`,
            fontFamily: nameFont,
          }}
        >
          <td>
            <table>
              <tbody>
                <tr>
                  <td>{workAddress}</td>
                  <td style={{ paddingLeft: "16px", color: linkColor }}>
                    <a href={website}>{website}</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </>
    );
  }
};

export default UserPersonalInfo;
