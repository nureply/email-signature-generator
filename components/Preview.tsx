import { useTemplateStore } from "@/store/templateStore";
import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
let size = "13px";

const previewVariants = cva(`bg-stone-200 rounded-lg flex-auto gap-5`, {
  variants: {
    variant: {
      PlainText: `bg-stone-200 rounded-lg flex-auto gap-5 text-${size} `,
      destructive: `text-white hover:bg-red-600 dark:hover:bg-red-600`,
      outline: `bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100 border border-slate-200 dark:border-slate-700`,
      subtle: `bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100`,
      ghost: `bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent`,
      link: `bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent`,
    },
  },

  defaultVariants: {
    variant: PlainText,
  },
});

export interface PreviewProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof previewVariants> {
  isLoading?: boolean;
}

const Preview = ({ className, variant, ...props }: PreviewProps) => {
  const { template, setTemplate } = useTemplateStore();
  return (
    <div className={cn(previewVariants({ variant, className }))}>
      deneme
      <div key="profileIcon"></div>
      <div key="userInputs">
        <div key="personalInfo">
          <div key="sign-of"></div>
          <div key="name"></div>
          <div key="jobInfo"></div>
        </div>
        <div key="contactInfo">
          <div key="workMail"></div>
          <div key="website"></div>
          <div key="phoneNumber"></div>
          <div key="address"></div>
        </div>
        <div key="icons"></div>
      </div>
    </div>
  );
};

export { Preview, previewVariants };
