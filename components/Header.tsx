import React from "react";
import Image from "next/image";

import iconNureply from "../assets/Nureply/logofull.png";

const Header = () => {
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
      /* setState((prevState) => ({
        ...prevState,
        copied: true,
      })); */
    } catch (err) {
      console.log("Fail");
    }
  };
  const handleGenerateClick = () => {
    copyToClipboard();
  };
  return (
    <header className="fixed flex z-50 top-0 left-0 right-0 p-6 justify-between items-center bg-window shadow">
      <div className="flex items-center overflow-hidden">
        <Image className="mx-2" src={iconNureply} width={200} alt="" />
        <h1 className="text-xl font-semibold text-default">
          Email Signature Generator
        </h1>
      </div>

      <button
        className="px-8 py-2 rounded-xl bg-background border-2 border-nureply-blue-full font-semibold text-nureply-blue-full cursor-not-allowed"
        onClick={handleGenerateClick}
      >
        Generate
      </button>
    </header>
  );
};

export default Header;
