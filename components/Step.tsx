import Image from "next/image";
interface StepProps {
  part: number;
}

const Step = ({ part }: StepProps) => {
  return <div className="flex items-center p-4">{stepsPicker(part)}</div>;
};

export default Step;

const stepsPicker = (part: number) => {
  switch (part) {
    case 1:
      return (
        <div className="flex items ">
          <Image
            src="/template_icon.png"
            alt="Template Icon"
            width={50}
            height={50}
          />
          Step {part}
        </div>
      );
    case 2:
      return (
        <div className="flex items">
          <Image
            src="/profile_icon.png"
            alt="Profile Icon"
            width={50}
            height={50}
          />
          Step {part}
        </div>
      );
    case 3:
      return (
        <div className="flex items">
          <Image
            src="/customization.png"
            alt="Customization"
            width={50}
            height={50}
          />
          Step {part}
        </div>
      );
  }
};