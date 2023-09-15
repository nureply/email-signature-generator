import Image from "next/image";

import { useTemplateStore } from "@/store/templateStore";
import useInfoStore from "@/store/infoStore";
import useCustomizationStore from "@/store/customizationStore";

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
  const { template } = useTemplateStore();
  const { fontSize, nameFont, linkColor, textColor, nameColor } =
    useCustomizationStore();

  if (template.id === "plainText") {
    return (
      <div
        style={{
          textSizeAdjust: "13px",
          color: "default",
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
                  <td>
                    {phoneNumber && (
                      <>
                        <Image
                          src="https://i.imgur.com/m6mkG6W.png"
                          width={14}
                          height={14}
                          alt="Phone Number"
                          style={{ marginRight: "6px" }}
                        />
                      </>
                    )}
                  </td>
                  <td style={{ width: "165px" }}>{phoneNumber}</td>
                  <td>
                    {workEmail && (
                      <>
                        <Image
                          src="https://i.imgur.com/JTfwuQG.png"
                          width={14}
                          height={14}
                          alt="Email"
                          style={{ marginRight: "6px", marginLeft: "6px" }}
                        />
                      </>
                    )}
                  </td>
                  <td style={{ width: "165px" }}>
                    <a href={"mailto:" + workEmail}>{workEmail}</a>
                  </td>
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
                  <td>
                    {workAddress && (
                      <>
                        <Image
                          src="https://i.imgur.com/1BFyCw1.png"
                          width={14}
                          height={14}
                          alt="Address"
                          style={{ marginRight: "6px" }}
                        />
                      </>
                    )}
                  </td>
                  <td style={{ paddingRight: "8px", width: "165px" }}>
                    {workAddress}
                  </td>
                  <td>
                    {website && (
                      <>
                        <Image
                          src="https://i.imgur.com/HLoZI2E.png"
                          width={14}
                          height={14}
                          alt="Website"
                          style={{ marginRight: "6px", marginLeft: "6px" }}
                        />
                      </>
                    )}
                  </td>
                  <td
                    style={{
                      paddingLeft: "6px",
                      color: linkColor,
                      width: "165px",
                    }}
                  >
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
