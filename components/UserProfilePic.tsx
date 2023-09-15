import React from "react";
import useInfoStore from "@/store/infoStore";
import { useTemplateStore } from "@/store/templateStore";
import useCustomizationStore from "@/store/customizationStore";
import Image from "next/image";

const UserProfilePic = () => {
  const { imageSize } = useCustomizationStore();
  const { imageURL } = useInfoStore();
  const { template } = useTemplateStore();

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
