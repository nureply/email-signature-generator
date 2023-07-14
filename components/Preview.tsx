import { useTemplateStore } from "@/store/templateStore";
import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";


const previewVariants = cva(
  `bg-gray-200 rounded-lg m-5 gap-0.1 flex text-[${30}px]`,
  {
    variants: {
      outerDiv: {
        plainText: ``,
        template1Left: `grid grid-cols-2 items-center p-4`,
        template1Right: `grid grid-cols-2 items-center p-4`,
        template2Left: `grid grid-cols-2 items-center`,
        template2Right: `grid grid-cols-2 items-center`,
        template3Top: `flex-col items-center`,
        template3Bottom: `flex-col items-center`,
      },
      userInfo: {
        plainText: `flex-col gap-1`,
        template1Left: `flex-col gap-1`,
        template1Right: `order-1 flex-col gap-1`,
        template2Left: `flex-col gap-1`,
        template2Right: `flex-col order-1 gap-1`,
        template3Top: `flex-col gap-1`,
        template3Bottom: `flex-col order-1 gap-1`,
      },
      profileIcon: {
        plainText: `hidden `,
        template1Left: ``,
        template1Right: `order-2 ml-10`,
        template2Left: `ml-10`,
        template2Right: `order-2`,
        template3Top: ``,
        template3Bottom: `order-3`,
      },
      linkIcons: {
        plainText: `hidden `,
        template1Left: `flex gap-2 col-start-2 col-end-3`,
        template1Right: `flex gap-2 order-3 `,
        template2Left: `flex gap-2`,
        template2Right: `flex gap-2 col-start-2 col-end-3 order-3`,
        template3Top: `flex gap-2`,
        template3Bottom: `flex gap-2 order-2`,
      },
      contactInfo: {
        plainText: ` `,
        template1Left: ``,
        template1Right: ``,
        template2Left: ``,
        template2Right: ``,
        template3Top: ``,
        template3Bottom: `flex gap-2 order-2`,
      },
    },
  }
);

export interface PreviewProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof previewVariants> {}

const Preview = ({
  className,
  outerDiv,
  userInfo,
  profileIcon,
  linkIcons,
  ...props
}: PreviewProps) => {
  return (
    <div className={cn(previewVariants({ outerDiv }))}>
      <div className={cn(previewVariants({ profileIcon }))}>
        <div className="w-20 h-20 bg-stone-400 rounded-full mt-5"></div>
      </div>
      <div key="personalInfo " className={cn(previewVariants({ userInfo }))}>
        <div key="sign-of">Regards</div>
        <div key="name">Ege </div>
        <div key="jobInfo">student|OzU|CS</div>
        <div>
          <div key="workMail">ege.oruc@ozu.edu.tr</div>
          <div key="website">www</div>
          <div key="phoneNumber">500-500-500</div>
          <div key="address">Eskisehir</div>
        </div>
      </div>
      <div className={cn(previewVariants({ linkIcons }))}>
        <div key="icons" className="w-4 h-4 bg-stone-400 rounded-full"></div>
        <div key="icons" className="w-4 h-4 bg-stone-400 rounded-full"></div>
        <div key="icons" className="w-4 h-4 bg-stone-400 rounded-full"></div>
        <div key="icons" className="w-4 h-4 bg-stone-400 rounded-full"></div>
        <div key="icons" className="w-4 h-4 bg-stone-400 rounded-full"></div>
      </div>
    </div>
  );
};

export { Preview, previewVariants };
