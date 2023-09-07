import React, { useState } from 'react';
import useInfoStore from '../store/infoStore';

const Upload = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
        if (openAccordion === index) {
            setOpenAccordion(null);
        } else {
            setOpenAccordion(index);
        }
    };

    const {
        onImageChange,
    } = useInfoStore();

    return (
        <>
            <div className="m-6">
                <h1 className="not-italic text-6xl text-center font-bold mb-4">Free email signature generator</h1>
                <h1 className="not-italic text-xl text-center font-bold mb-4">Get a professional email signature that won’t send your emails to spam</h1>
                <br />
                

                <div className="min-h-screen bg-white mx-40">
                <h1 className="not-italic text-3xl font-bold mb-4">How to make an email signature?</h1>
                    <div onClick={() => toggleAccordion(1)} className="p-4 bg-white w-full rounded flex justify-between items-center cursor-pointer">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-10 w-10 ml-2 ${openAccordion === 1 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                            <h4 className="text-3xl text-black">
                                Choose a template
                            </h4>
                        </div>
                    </div>
                    {openAccordion === 1 && (
                        <div className="w-full bg-white p-4">
                            <h4 className="text-2xl text-black ml-14">Pick a template and fill it with your personal &amp; professional details.</h4>
                        </div>
                    )}
                    <hr className="border-b-1 border-black" />
                    <div onClick={() => toggleAccordion(2)} className="p-4 bg-white w-full rounded flex justify-between items-center cursor-pointer">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-10 w-10 ml-2 ${openAccordion === 2 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                            <h4 className=" text-3xl text-black">
                                Pick your style
                            </h4>
                        </div>
                    </div>
                    {openAccordion === 2 && (
                        <div className="w-full bg-white p-4">
                            <h4 className="text-2xl text-black ml-14">Style it the way you like it. Choose the font &amp; color, and what the icons should look like.</h4>
                        </div>
                    )}
                    <hr className="border-b-1 border-black" />
                    <div onClick={() => toggleAccordion(3)} className="p-4 bg-white w-full rounded flex justify-between items-center cursor-pointer">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-10 w-10 ml-2 ${openAccordion === 3 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                            <h4 className="text-3xl text-black">
                                Create your email signature
                            </h4>
                        </div>
                    </div>
                    {openAccordion === 3 && (
                        <div className="w-full bg-white p-4">
                            <h4 className="text-2xl text-black ml-14">Get a professional email signature that makes you look good &amp; won't harm your email deliverability.</h4>
                        </div>
                    )}
                    <hr className="border-b-1 border-black" /> 
                    <div onClick={() => toggleAccordion(4)} className="p-4 bg-white w-full rounded flex justify-between items-center cursor-pointer">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-10 w-10 ml-2 ${openAccordion === 4 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                            <h4 className="text-3xl text-black">
                                Add it to your email client
                            </h4>
                        </div>
                    </div>
                    {openAccordion === 4 && (
                        <div className="w-full bg-white p-4">
                            <h4 className="text-2xl text-black ml-14 ">Follow our step-by-steps to add your brand new email signature to Woodpecker, Gmail, Outlook, Yahoo! or Apple Mail.</h4>
                        </div>
                    )}
                    <hr className="border-b-1 border-black" /> 
                    <div onClick={() => toggleAccordion(5)} className="p-4 bg-white w-full rounded flex justify-between items-center cursor-pointer">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-10 w-10 ml-2 ${openAccordion === 5 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                            <h4 className="text-3xl text-black">Tag your colleagues in</h4>
                        </div>
                    </div>
                    {openAccordion === 5 && (
                        <div className="w-full bg-white p-4 ml-14">
                            <h4 className="text-2xl text-black">Got your email signature? Great. Now it's time to make your email signatures look professional and concise across the whole company. Send the HTML code you've downloaded to your colleagues, so they can easily modify it with their data in our generator.</h4>
                        </div>
                    )}
                    <hr className="border-b-1 border-black" />
                </div>
            </div>
        </>
    );
};

export default Upload;
