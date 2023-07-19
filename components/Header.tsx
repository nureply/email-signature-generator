import React from "react";
import Image from "next/image";

import iconNureply from "../assets/Nureply/logofull.png";

const Header = () => {
  return (
    <header className="fixed flex z-50 top-0 left-0 right-0 p-8 justify-between items-center bg-window">
      <div className="flex items-center overflow-hidden">
        <Image className="mx-2" src={iconNureply} width={200} alt="" />
        <h1 className="text-xl font-semibold text-default">
          Email Signature Generator
        </h1>
      </div>

      <button
        className="px-8 py-2 rounded-xl bg-background border-2 border-nureply-blue-full font-semibold text-nureply-blue-full cursor-not-allowed"
        disabled
      >
        Generate
      </button>
    </header>
  );
};

export default Header;
