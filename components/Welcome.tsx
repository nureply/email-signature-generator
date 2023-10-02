import { useStepStore } from "@/store/stepStore";

const Welcome = () => {
  const { step, setStep } = useStepStore();
  return (
    <>
      <div className="m-6">
        <div className="p-2 sm:pt-20 text-center">
          <h1 className="mt-5 mb-8 lg:mt-0 lg:mb-6 text-center text-3xl font-bold">
            Create Your Professional Email Signature
          </h1>
          <p className="mb-10 text-center text-lg sm:text-xl">
            Upgrade your email signature to a professional look without email
            deliverability issues.
          </p>
          <button
            className="px-2 sm:px-4 py-2.5 text-sm font-semibold text-white rounded-md shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background bg-nureply-blue hover:bg-nureply-blue/75"
            onClick={() => setStep(1)}
          >
            Start Now
          </button>
        </div>

        <div className="max-w-3xl mx-auto mb-20 mt-10">
          <p className="text-base sm:text-lg text-center text-gray-900">
            Looking for the best free email signature creator? Look no further
            than Nureply&apos;s free email signature generator. Our tool is
            designed to help you easily create a professional email signature
            that will make a great impression. With our tool, you can add a logo
            or other images to make your email signature stand out and look
            customized to your unique style.
          </p>
        </div>

        <div className="max-w-3xl  mx-auto bg-window">
          <p className="p-2 text-center text-lg sm:text-2xl font-semibold text-gray-950">
            How to create an email signature?
          </p>

          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <ul className="list-decimal max-w-2xl mx-auto divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-8 first:pt-0 last:pb-0 text-gray-800">
                <div className="flex gap-x-5">
                  <div>
                    <h3 className="md:text-lg font-semibold text-gray-900 ">
                      Choose a Template
                    </h3>
                    <p className="mt-1 text-gray-800">
                      Choose a template and start filling in your information
                    </p>
                  </div>
                </div>
              </li>

              <li className="py-8 first:pt-0 last:pb-0 text-gray-800">
                <div className="flex gap-x-5">
                  <div>
                    <h3 className="md:text-lg font-semibold text-gray-900 ">
                      Customize the Style
                    </h3>
                    <p className="mt-1 text-gray-800">
                      Pick the font, colors, and adjust the size
                    </p>
                  </div>
                </div>
              </li>

              <li className="py-8 first:pt-0 last:pb-0 text-gray-800">
                <div className="flex gap-x-5">
                  <div>
                    <h3 className="md:text-lg font-semibold text-gray-900 ">
                      Settle on the Design
                    </h3>
                    <p className="mt-1 text-gray-800">
                      Create a professional email signature that enhances your
                      image and does not impact your email deliverability
                    </p>
                  </div>
                </div>
              </li>

              <li className="py-8 first:pt-0 last:pb-0 text-gray-800">
                <div className="flex gap-x-5">
                  <div>
                    <h3 className="md:text-lg font-semibold text-gray-900 ">
                      Integrate with Your Email
                    </h3>
                    <p className="mt-1 text-gray-800">
                      Copy-paste your finished signature to your preferred email
                      clients
                    </p>
                  </div>
                </div>
              </li>

              <li className="py-8 first:pt-0 last:pb-0 text-gray-800">
                <div className="flex gap-x-5">
                  <div>
                    <h3 className="md:text-lg font-semibold text-gray-900 ">
                      Have Your Email Signature Ready?
                    </h3>
                    <p className="mt-1 text-gray-800">Excellent!</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mt-10 mx-auto bg-window">
          <p className="p-2 text-center text-lg sm:text-2xl font-semibold text-gray-950">
            FAQ
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
        </div>
      </div>
    </>
  );
};

export default Welcome;
