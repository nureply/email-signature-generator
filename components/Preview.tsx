import clsx from "clsx";
import Signature from "./Signature";

const Preview = () => {
  return (
    <div className="w-full rounded-lg bg-gray-100">
      <div className="w-full h-7 rounded-lg bg-gray-100 flex gap-3">
        <div className="w-3 h-3 rounded-full bg-[#FD4646] ml-3 mt-2"></div>
        <div className="w-3 h-3 rounded-full bg-[#FEB024] mt-2"></div>
        <div className="w-3 h-3 rounded-full bg-[#2AC131] mt-2"></div>
      </div>
      <div className="text-default">
        <div className={clsx("pl-4 py-2 border-t-2 border-gray-300")}>
          <span className={clsx("text-fade")}>Send from:</span>{" "}
          johnsmith@nureply.com - John Smith
        </div>
        <div className={clsx("pl-4 py-2 border-y-2 border-gray-300")}>
          <span className={clsx("text-fade")}>Subject:</span> Email Signatures
        </div>
      </div>

      <div className="m-5">
        <div>{"Hey,"}</div>
        <div>Some say email signatures can alarm deliverability filters.</div>
        <span>-----</span>
      </div>
      <Signature />
    </div>
  );
};

export { Preview };
