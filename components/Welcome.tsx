import React, { useState } from "react";
import useInfoStore from "../store/infoStore";

const Upload = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index: any) => {
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
        <div className="p-20 ">
          <h1 className="not-italic text-5xl text-center font-bold mb-4 ">
            Create Your Professional Email Signature
          </h1>
          <p className="not-italic text-xl text-center mb-2">
            Upgrade your email signature to a professional look without email
            delivery issues.
          </p>
        </div>
        <div className="min-h-screen bg-white mx-auto max-w-3xl ">
          <p className=" text-2xl text-center font-semibold mb-4">
            How to create an email signature?
          </p>
          <div
            onClick={() => toggleAccordion(1)}
            className={`p-2 bg-white w-full rounded flex justify-between items-center cursor-pointer ${
              openAccordion === 1
                ? "bg-gray-200 text-nureply-blue-full"
                : "bg-white text-black"
            }`}
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-8 w-8 ml-2 ${
                  openAccordion === 1 ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <p className="text-xl">Choose a Template</p>
            </div>
          </div>
          {openAccordion === 1 && (
            <div className="w-full bg-white pb-3 pl-3">
              <p className="text-gray-900 ml-12">
                Choose a template and start filling in your information
              </p>
            </div>
          )}
          <hr className="border-b-1 border-black" />
          <div
            onClick={() => toggleAccordion(2)}
            className={`p-2 bg-white w-full rounded flex justify-between items-center cursor-pointer ${
              openAccordion === 2
                ? "bg-gray-200 text-nureply-blue-full"
                : "bg-white text-black"
            }`}
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-8 w-8 ml-2 ${
                  openAccordion === 2 ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <p className="text-xl">Customize the Style</p>
            </div>
          </div>
          {openAccordion === 2 && (
            <div className="w-full bg-white pb-3 pl-3">
              <p className="text-gray-900 ml-12">
                Customize the style – Pick the font, colors, and adjust the size
              </p>
            </div>
          )}
          <hr className="border-b-1 border-black" />
          <div
            onClick={() => toggleAccordion(3)}
            className={`p-2 bg-white w-full rounded flex justify-between items-center cursor-pointer ${
              openAccordion === 3
                ? "bg-gray-200 text-nureply-blue-full"
                : "bg-white text-black"
            }`}
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-8 w-8 ml-2 ${
                  openAccordion === 3 ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <p className="text-xl">Settle on the Design</p>
            </div>
          </div>
          {openAccordion === 3 && (
            <div className="w-full bg-white pb-3 pl-3">
              <p className="text-gray-900 ml-12">
                Create a professional email signature that enhances your image
                and does not impact your email delivery
              </p>
            </div>
          )}
          <hr className="border-b-1 border-black" />
          <div
            onClick={() => toggleAccordion(4)}
            className={`p-2 bg-white w-full rounded flex justify-between items-center cursor-pointer ${
              openAccordion === 4
                ? "bg-gray-200 text-nureply-blue-full"
                : "bg-white text-black"
            }`}
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-8 w-8 ml-2 ${
                  openAccordion === 4 ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <p className="text-xl">Integrate with Your Email Client</p>
            </div>
          </div>
          {openAccordion === 4 && (
            <div className="w-full bg-white pb-3 pl-3">
              <p className="text-gray-900 ml-12 ">
                Copy-paste your finished signature to your preferred email
                clients
              </p>
            </div>
          )}
          <hr className="border-b-1 border-black" />
          <div
            onClick={() => toggleAccordion(5)}
            className={`p-2 bg-white w-full rounded flex justify-between items-center cursor-pointer ${
              openAccordion === 5
                ? "bg-gray-200 text-nureply-blue-full"
                : "bg-white text-black"
            }`}
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-8 w-8 ml-2 ${
                  openAccordion === 5 ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <p className="text-xl ">Have Your Email Signature Ready?</p>
            </div>
          </div>
          {openAccordion === 5 && (
            <div className="w-full bg-white pb-3 pl-3 ">
              <p className="text-gray-900 ml-12">Excellent!</p>
            </div>
          )}
          <hr className="border-b-1 border-black " />
        </div>
      </div>
    </>
  );
};

export default Upload;
