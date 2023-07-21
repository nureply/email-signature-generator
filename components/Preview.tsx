import Signature from "./Signature";

const Preview = () => {
  return (
    <div className="w-full rounded-lg bg-gray-100">
      <div className="w-full h-7 rounded-lg bg-gray-100 flex gap-3">
        <div className="w-3 h-3 rounded-full bg-[#FD4646] ml-3 mt-2"></div>
        <div className="w-3 h-3 rounded-full bg-[#FEB024] mt-2"></div>
        <div className="w-3 h-3 rounded-full bg-[#2AC131] mt-2"></div>
      </div>
      <div className=" pl-4 border-t-2 border-gray-300">
        Send from: emma@woodpecker.com Emma Smith
      </div>
      <div className="pl-4 border-y-2  border-gray-300">
        Subject: Get new company email signatures
      </div>

      <div className="m-5">
        <div>{"Hi {{Name}},"}</div>
        <div>
          Apparently, email signatures can mess up deliverability. Did you know
          that? News to me.
        </div>
        <span>-----</span>
      </div>
      <Signature />
    </div>
  );
};

export { Preview };
