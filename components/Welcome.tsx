import React, { useState } from "react";

const Welcome = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index: any) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  return (
    <>
      <div className="m-6">
        <div className="p-2 sm:pt-20">
          <h1 className="mt-5 mb-8 lg:mt-0 lg:mb-6 text-center text-3xl font-bold">
            Create Your Professional Email Signature
          </h1>
          <p className="mb-10 text-center text-lg sm:text-xl">
            Upgrade your email signature to a professional look without email
            deliverability issues.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-20 mt-10">
          <p className="text-base sm:text-lg text-center text-gray-900">
            Looking for the best free email signature creator on the web? Look
            no further. Our Email Signature Generator is designed to give you
            the most professional email signature you can imagine. From adding
            custom logos to sprucing up your sign-off with unique images,
            we&apos;ve got you covered. Seriously, this is the best way to
            create an email signature that will wow your contacts. Want to make
            a free email signature that stands out? Our platform allows you to
            create an email signature with a logo and even add images for that
            extra flair. If you&apos;re a Gmail user, you&apos;ll be thrilled to
            know you can easily create an HTML signature that seamlessly
            integrates with your account. It&apos;s not just a signature;
            it&apos;s your digital identity.
          </p>
        </div>

        <div className="max-w-3xl min-h-screen mx-auto bg-window">
          <p className="p-2 text-center text-lg sm:text-2xl font-semibold text-gray-950">
            How to create an email signature?
          </p>

          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <ul className="list-decimal max-w-2xl mx-auto divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-8 first:pt-0 last:pb-0 text-gray-800">
                <div className="flex gap-x-5">
                  <div>
                    <h3 className="md:text-lg font-semibold text-gray-900 ">
                      Why is an email signature important?
                    </h3>
                    <p className="mt-1 text-gray-800">
                      An email signature is much more than a simple sign-off;
                      it&apos;s your digital handshake. It lends credibility to
                      your correspondence and gives recipients an easy way to
                      contact you or follow you on social media. Think of it as
                      your mini-resume at the end of every email—professional,
                      yet accessible.
                    </p>
                  </div>
                </div>
              </li>

              <li className="py-8 first:pt-0 last:pb-0 text-gray-800">
                <div className="flex gap-x-5">
                  <div>
                    <h3 className="md:text-lg font-semibold text-gray-900 ">
                      What is a professional email signature?
                    </h3>
                    <p className="mt-1 text-gray-800">
                      A professional email signature is a well-crafted sign-off
                      that typically includes your name, job title, company, and
                      contact details. But that&apos;s just the tip of the
                      iceberg! The best professional signatures also include
                      social media buttons, a profile picture or logo, and even
                      a catchy tagline or call-to-action.
                    </p>
                  </div>
                </div>
              </li>

              <li className="py-8 first:pt-0 last:pb-0 text-gray-800">
                <div className="flex gap-x-5">
                  <div>
                    <h3 className="md:text-lg font-semibold text-gray-900 ">
                      What should an email signature include?
                    </h3>
                    <div className="mb-4">
                      <p className="mt-1 text-gray-800">
                        At a minimum, your email signature should include:
                      </p>
                      <ul className="list-disc ml-5 mt-2">
                        <li>Your full name</li>
                        <li>Job title</li>
                        <li>Company name</li>
                        <li>Contact details (email and phone number)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="mt-1 text-gray-800">
                        For extra oomph, consider adding:
                      </p>
                      <ul className="list-disc ml-5 mt-2">
                        <li>Social media buttons</li>
                        <li>A profile picture or company logo</li>
                        <li>
                          Any certifications or awards you&apos;ve received
                        </li>
                        <li>A brief tagline or call-to-action</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="py-8 first:pt-0 last:pb-0 text-gray-800">
                <div className="flex gap-x-5">
                  <div>
                    <h3 className="md:text-lg font-semibold text-gray-900 ">
                      Should you put your email in your email signature?
                    </h3>
                    <p className="mt-1 text-gray-800">
                      While it might seem redundant, including your email in
                      your signature is actually a smart move. Why? Because it
                      makes it super easy for people to copy and paste your
                      contact details directly. It&apos;s all about making life
                      easier for the folks you&apos;re communicating with!
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* <div
            onClick={() => toggleAccordion(1)}
            className={`flex items-center justify-between w-full p-2 bg-window rounded cursor-pointer ${
              openAccordion === 1
                ? "bg-window text-nureply-blue"
                : "bg-window text-default"
            }`}
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-8 h-8 ml-2 ${
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
            <div className="w-full pb-3 pl-3 bg-window">
              <p className="ml-12 text-default">
                Choose a template and start filling in your information
              </p>
            </div>
          )}
          <hr className="border-b-1 border-fade" />
          <div
            onClick={() => toggleAccordion(2)}
            className={`flex items-center justify-between w-full p-2 bg-window rounded cursor-pointer ${
              openAccordion === 2
                ? "bg-window text-nureply-blue"
                : "bg-window text-default"
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
            <div className="w-full pb-3 pl-3 bg-window">
              <p className="ml-12 text-default">
                Customize the style – Pick the font, colors, and adjust the size
              </p>
            </div>
          )}
          <hr className="border-b-1 border-fade" />
          <div
            onClick={() => toggleAccordion(3)}
            className={`flex items-center justify-between w-full p-2 bg-window rounded cursor-pointer ${
              openAccordion === 3
                ? "bg-window text-nureply-blue"
                : "bg-window text-default"
            }`}
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-8 h-8 ml-2 ${
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
            <div className="w-full pb-3 pl-3 bg-window">
              <p className="ml-12 text-default">
                Create a professional email signature that enhances your image
                and does not impact your email deliverability
              </p>
            </div>
          )}
          <hr className="border-b-1 border-fade" />
          <div
            onClick={() => toggleAccordion(4)}
            className={`flex items-center justify-between w-full p-2 bg-window rounded cursor-pointer ${
              openAccordion === 4
                ? "bg-window text-nureply-blue"
                : "bg-window text-default"
            }`}
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-8 h-8 ml-2 ${
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
              <p className="text-xl">Integrate with Your Email</p>
            </div>
          </div>
          {openAccordion === 4 && (
            <div className="w-full bg-window pb-3 pl-3">
              <p className="ml-12 text-default">
                Copy-paste your finished signature to your preferred email
                clients
              </p>
            </div>
          )}
          <hr className="border-b-1 border-fade" />
          <div
            onClick={() => toggleAccordion(5)}
            className={`flex items-center justify-between w-full p-2 bg-window rounded cursor-pointer ${
              openAccordion === 5
                ? "bg-window text-nureply-blue"
                : "bg-window text-default"
            }`}
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-8 h-8 ml-2 ${
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
            <div className="w-full pb-3 pl-3 bg-window">
              <p className="ml-12 text-default">Excellent!</p>
            </div>
          )}
          <hr className="border-b-1 border-fade" /> */}
        </div>
      </div>
    </>
  );
};

export default Welcome;
