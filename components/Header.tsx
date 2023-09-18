import React from "react";
import Image from "next/image";
import iconNureply from "../assets/Nureply/logofull.png";
import { useTemplateStore } from "@/store/templateStore";

const Header = () => {
  const { template } = useTemplateStore();

  const copyToClipboard = () => {
    let copyText = document.querySelector(".signaturetrying");

    const range = document.createRange();
    if (copyText) {
      range.selectNode(copyText);
    }

    const windowSelection = window.getSelection();
    if (windowSelection) {
      windowSelection.removeAllRanges();
      windowSelection.addRange(range);
    }
    try {
      let successful = document.execCommand("copy");
      console.log(successful ? "Success" : "Fail");
    } catch (err) {
      console.log("Fail");
    }
  };

  const handleGenerateClick = () => {
    copyToClipboard();
  };

  const isDisabled = template.id === "initial";

  return (
    <header className="fixed flex items-center justify-between z-50 top-0 left-0 right-0 p-2 bg-window shadow">
      <div className="flex items-center overflow-hidden">
        <Image className="mr-5" src={iconNureply} width={150} alt="" />
        <h1 className="text-base sm:text-xl font-semibold text-default">
          Email Signature Generator
        </h1>
      </div>

      <button
        className={`px-2 sm:px-4 py-2.5 bg-nureply-blue text-sm font-semibold text-white rounded-md shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background ${
          isDisabled ? "cursor-not-allowed" : "hover:bg-nureply-blue/75"
        }`}
        onClick={handleGenerateClick}
        disabled={template.id === "initial"}
      >
        Copy
      </button>
    </header>
  );
};

export default Header;
