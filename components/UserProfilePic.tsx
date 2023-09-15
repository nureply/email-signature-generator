import React from "react";
import Image from "next/image";

import { useTemplateStore } from "@/store/templateStore";
import useInfoStore from "@/store/infoStore";
import useCustomizationStore from "@/store/customizationStore";

const UserProfilePic = () => {
  const { template } = useTemplateStore();
  const { imageSize } = useCustomizationStore();

  if (template.id === "plainText") {
    return null;
  }

  return (
    <Image
      src="https://i.imgur.com/fyYcdUD.png"
      alt="Profile Image"
      width={imageSize}
      height={imageSize}
      style={{ borderRadius: "50%" }}
    />
  );
};

export default UserProfilePic;
