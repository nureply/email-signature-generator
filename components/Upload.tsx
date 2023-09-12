import React, { useState } from 'react';
import useInfoStore from '../store/infoStore';

const Upload = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index:any) => {
        if (openAccordion === index) {
            setOpenAccordion(null);
        } else {
            setOpenAccordion(index);
        }
    };

    const { onImageChange } = useInfoStore();

    return (
        <>
            <div className="m-6">
                <div className='py-20'>
                    <h1 className="not-italic text-5xl text-center font-bold mb-4 ">Create Your Professional Email Signature</h1>
                    <p className="not-italic text-xl text-center mb-4">Upgrade Your Email Signature for a Professional Look Without Email Delivery Issues.</p>
                </div>
                <div className="min-h-screen bg-white mx-auto max-w-3xl ">
                    <p className=" text-2xl text-center font-semibold mb-4">How to make an email signature?</p>
                    <div onClick={() => toggleAccordion(1)} className={`p-2 bg-white w-full rounded flex justify-between items-center cursor-pointer ${openAccordion === 1 ? 'bg-gray-200 text-nureply-blue-full' : 'bg-white text-black'}`}>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ml-2 ${openAccordion === 1 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                            <p className="text-xl">
                            Choose the Appropriate Template
                            </p>
                        </div>
                    </div>
                    {openAccordion === 1 && (
                        <div className="w-full bg-white p-2">
                            <p className="text-gray-900 ml-12">Choose a Template and Customize Your Personal and Professional Information</p>
                        </div>
                    )}
                    <hr className="border-b-1 border-black" />
                    <div onClick={() => toggleAccordion(2)} className={`p-2 bg-white w-full rounded flex justify-between items-center cursor-pointer ${openAccordion === 2 ? 'bg-gray-200 text-nureply-blue-full' : 'bg-white text-black'}`}>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ml-2 ${openAccordion === 2 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                            <p className="text-xl">
                            Select Your Preferred Style
                            </p>
                        </div>
                    </div>
                    {openAccordion === 2 && (
                        <div className="w-full bg-white p-2">
                            <p className="text-gray-900 ml-12">Personalize Your Style – Pick the Font, Color, and Icon Design</p>
                        </div>
                    )}
                    <hr className="border-b-1 border-black" />
                    <div onClick={() => toggleAccordion(3)} className={`p-2 bg-white w-full rounded flex justify-between items-center cursor-pointer ${openAccordion === 3 ? 'bg-gray-200 text-nureply-blue-full' : 'bg-white text-black'}`}>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ml-2 ${openAccordion === 3 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                            <p className="text-xl">
                            Design Your Email Signature
                            </p>
                        </div>
                    </div>
                    {openAccordion === 3 && (
                        <div className="w-full bg-white p-2">
                            <p className="text-gray-900 ml-12">Create a Professional Email Signature that Enhances Your Image and Doesn't Impact Your Email Delivery.</p>
                        </div>
                    )}
                    <hr className="border-b-1 border-black" />
                    <div onClick={() => toggleAccordion(4)} className={`p-2 bg-white w-full rounded flex justify-between items-center cursor-pointer ${openAccordion === 4 ? 'bg-gray-200 text-nureply-blue-full' : 'bg-white text-black'}`}>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ml-2 ${openAccordion === 4 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                            <p className="text-xl">
                            Integrate It with Your Email Client
                            </p>
                        </div>
                    </div>
                    {openAccordion === 4 && (
                        <div className="w-full bg-white p-2">
                            <p className="text-gray-900 ml-12 ">Follow Our Step-by-Step Guide to Add Your Fresh Email Signature to Nureply, Gmail, Outlook, Yahoo!, or Apple Mail.</p>
                        </div>
                    )}
                    <hr className="border-b-1 border-black" />
                    <div onClick={() => toggleAccordion(5)} className={`p-2 bg-white w-full rounded flex justify-between items-center cursor-pointer ${openAccordion === 5 ? 'bg-gray-200 text-nureply-blue-full' : 'bg-white text-black'}`}>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ml-2 ${openAccordion === 5 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                            <p className="text-xl">
                            Mention Your Colleagues in
                            </p>
                        </div>
                    </div>
                    {openAccordion === 5 && (
                        <div className="w-full bg-white p-2 ">
                            <p className="text-gray-900 ml-12">Have Your Email Signature Ready? Excellent! It's Time to Standardize Professional and Concise Signatures Across the Entire Company. Share the Downloaded HTML Code with Your Colleagues, Allowing Them to Easily Personalize it with Their Information Using Our Generator.</p>
                        </div>
                    )}
                    <hr className="border-b-1 border-black " />
                </div>
            </div>
        </>
    );
};

export default Upload;
