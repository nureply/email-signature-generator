import React from 'react'
import Image from "next/image";

import iconNureply from "../public/favicon.ico";

const Header = () => {
    return (
        <header className="flex p-8 justify-between items-center bg-window fixed top-0 left-0 right-0 z-50">
            <div className="items-center flex overflow-hidden">
                <Image src={iconNureply} width={80} height={80} alt="" />
            <h1 className="text-2xl text-default">
                Email Signature Generator - Nureply
            </h1>
            </div>


            <button className="px-8 py-2 rounded bg-background cursor-not-allowed" disabled>
                Generate
            </button>
        </header>
    )
}

export default Header
