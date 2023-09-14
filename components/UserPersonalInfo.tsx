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
  const { fontSize, nameFont, linkColor, textColor, nameColor, iconSize } =
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
                  <td>
                    {phoneNumber && (
                      <>
                        <img
                          src="https://i.imgur.com/m6mkG6W.png"
                          className="scale-[0.65]"
                          alt="Phone Number"
                        />
                      </>
                    )}
                  </td>
                  <td style={{ paddingLeft: "6px", width: "150px" }}>
                    {phoneNumber}
                  </td>
                  <td style={{ paddingLeft: "8px" }}>
                    {workEmail && (
                      <>
                        <img
                          src="https://i.imgur.com/JTfwuQG.png"
                          className="scale-[0.65]"
                          alt="Email"
                        />
                      </>
                    )}
                  </td>
                  <td style={{ paddingLeft: "6px", width: "150px" }}>
                    {workEmail}
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
                        <img
                          src="https://i.imgur.com/1BFyCw1.png"
                          className="scale-[0.65]"
                          alt="Address"
                        />
                      </>
                    )}
                  </td>
                  <td style={{ paddingLeft: "6px", width: "150px" }}>
                    {workAddress}
                  </td>
                  <td style={{ paddingLeft: "8px" }}>
                    {website && (
                      <>
                        <img
                          src="https://i.imgur.com/HLoZI2E.png"
                          className="scale-[0.65]"
                          alt="Website"
                        />
                      </>
                    )}
                  </td>
                  <td
                    style={{
                      paddingLeft: "6px",
                      color: linkColor,
                      width: "150px",
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
