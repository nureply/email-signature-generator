import React from "react";

import { useTemplateStore } from "@/store/templateStore";
import useInfoStore from "@/store/infoStore";
import useCustomizationStore from "@/store/customizationStore";

const UserProfilePic = () => {
  const { template } = useTemplateStore();
  const { imageURL } = useInfoStore();
  const { imageSize } = useCustomizationStore();

  if (template.id === "plainText") {
    return null;
  }

  return (
    <div
      style={{
        width: imageSize,
        height: imageSize,
        borderRadius: "50%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <img
        src={imageURL}
        alt="Profile Image"
        width={imageSize}
        height={imageSize}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default UserProfilePic;
