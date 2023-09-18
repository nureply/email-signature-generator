import React from "react";
import Image from "next/image";

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
    <Image
      src={imageURL}
      alt="Profile Image"
      width={imageSize}
      height={imageSize}
    />
  );
};

export default UserProfilePic;
