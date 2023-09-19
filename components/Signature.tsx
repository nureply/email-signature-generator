import React from "react";

import { useTemplateStore } from "@/store/templateStore";
import UserProfilePic from "./UserProfilePic";
import UserPersonalInfo from "./UserPersonalInfo";
import UserLinkIcons from "./UserLinkIcons";
import useCustomizationStore from "@/store/customizationStore";

const Signature = () => {
  const { template } = useTemplateStore();
  const { imageSize } = useCustomizationStore();

  const isSmallScreen = window.innerWidth <= 640;

  const renderSignature = () => {
    switch (template.id) {
      case "plainText":
        return <UserPersonalInfo />;

      case "template1Left":
        return (
          <table
            cellPadding={0}
            cellSpacing={0}
            style={{
              borderCollapse: "collapse",
              width: isSmallScreen ? "505px" : "auto",
            }}
          >
            <tbody>
              <tr>
                <td>
                  <UserProfilePic />
                </td>
                <td>
                  <table>
                    <tbody style={{ width: "385px" }}>
                      <UserPersonalInfo />
                      <tr>
                        <td>
                          <table>
                            <tbody>
                              <tr>
                                <UserLinkIcons />
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        );

      case "template1Right":
        return (
          <table
            cellPadding={0}
            cellSpacing={0}
            style={{
              borderCollapse: "collapse",
              width: isSmallScreen ? "505px" : "auto",
            }}
          >
            <tbody>
              <tr>
                <td style={{ width: "385px" }}>
                  <table>
                    <tbody>
                      <UserPersonalInfo />
                      <tr>
                        <td>
                          <table>
                            <tbody>
                              <tr>
                                <UserLinkIcons />
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td>
                  <UserProfilePic />
                </td>
              </tr>
            </tbody>
          </table>
        );

      case "template2Left":
        return (
          <table
            cellPadding={0}
            cellSpacing={0}
            style={{
              borderCollapse: "collapse",
              width: isSmallScreen ? "505px" : "auto",
            }}
          >
            <tr>
              <td style={{ paddingRight: "16px", width: imageSize }}>
                <table>
                  <tr>
                    <td>
                      <UserProfilePic />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <UserLinkIcons />
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
              <td style={{ width: "385px" }}>
                <table>
                  <UserPersonalInfo />
                </table>
              </td>
            </tr>
          </table>
        );

      case "template2Right":
        return (
          <table
            cellPadding={0}
            cellSpacing={0}
            style={{
              borderCollapse: "collapse",
              width: isSmallScreen ? "505px" : "auto",
            }}
          >
            <tr>
              <td style={{ paddingRight: "16px", width: "385px" }}>
                <table>
                  <UserPersonalInfo />
                </table>
              </td>
              <td>
                <table>
                  <tr>
                    <td>
                      <UserProfilePic />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <UserLinkIcons />
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        );

      case "template3Top":
        return (
          <table
            cellPadding={5}
            cellSpacing={0}
            style={{
              borderCollapse: "collapse",
              width: "385px",
            }}
          >
            <tr>
              <td>
                <UserProfilePic />
              </td>
            </tr>
            <UserPersonalInfo />
            <tr>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <UserLinkIcons />
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </table>
        );

      case "template3Bottom":
        return (
          <table
            cellPadding={5}
            cellSpacing={0}
            style={{
              borderCollapse: "collapse",
              width: "385px",
            }}
          >
            <UserPersonalInfo />
            <tr>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <UserLinkIcons />
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <UserProfilePic />
              </td>
            </tr>
          </table>
        );

      default:
        return null;
    }
  };

  return <div className="signaturetrying">{renderSignature()}</div>;
};

export default Signature;
