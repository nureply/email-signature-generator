interface TemaplateProps {
    templateType: string;
    handleTemplate: React.Dispatch<React.SetStateAction<string>>;
    isSelected: boolean;
  }
  
  const Template = ({
    templateType,
    handleTemplate,
    isSelected,
  }: TemaplateProps) => {
    return (
      <div
        className={`bg-gray-200 mt-10 rounded-lg text-center w-2/3 mx-auto cursor-pointer flex-auto ${
          isSelected ? "shadow-[0_0px_0px_3px_rgba(0,0,0,0.3)]" : ""
        }`}
        onClick={() => handleTemplate(templateType)}
      >
        {templateType}
        <div className={`bg-white  rounded-lg `}>
          {templatePicker(templateType)}
        </div>
      </div>
    );
  };
  export default Template;
  
  const templatePicker = (templateType: string) => {
    switch (templateType) {
      case "Plain Text":
        return (
          <div className=" grid grid-cols-3 gap-10 p-4">
            <div className="w-17 h-2 bg-slate-200 rounded-3xl"></div>
            <div className="w-17 h-2 bg-slate-200 rounded-3xl"></div>
            <div className="w-17 h-2 bg-slate-200 rounded-3xl"></div>
            <div className="w-17 h-2 bg-slate-200 rounded-3xl"></div>
            <div className="w-17 h-2 bg-slate-200 rounded-3xl"></div>
          </div>
        );
      case "Template 1 Right":
        return (
          <div className="flex justify-around p-4 align-center">
            <div>
              <div className="grid grid-cols-2 gap-5">
                <div className="w-28 h-2 bg-slate-200 rounded-3xl"></div>
                <div className="w-28 h-2 bg-slate-200 rounded-3xl"></div>
                <div className="w-28 h-2 bg-slate-200 rounded-3xl"></div>
                <div className="w-28 h-2 bg-slate-200 rounded-3xl"></div>
                <div className="w-28 h-2 bg-slate-200 rounded-3xl"></div>
              </div>
              <div className="flex mt-5 gap-5">
                <div className="w-4 h-4 bg-stone-400 rounded-full"></div>
                <div className="w-4 h-4 bg-stone-400 rounded-full"></div>
                <div className="w-4 h-4 bg-stone-400 rounded-full"></div>
                <div className="w-4 h-4 bg-stone-400 rounded-full"></div>
              </div>
            </div>
            <div className="w-14 h-14 bg-stone-400 rounded-full align-left"></div>
          </div>
        );
      case "Template 1 Left":
        return (
          <div className=" flex justify-around p-4 alaign-center">
            <div className="w-14 h-14 bg-stone-400 rounded-full align-left"></div>
            <div>
              <div className="grid grid-cols-2 gap-5">
                <div className="w-28 h-2 bg-slate-200 rounded-3xl"></div>
                <div className="w-28 h-2 bg-slate-200 rounded-3xl"></div>
                <div className="w-28 h-2 bg-slate-200 rounded-3xl"></div>
                <div className="w-28 h-2 bg-slate-200 rounded-3xl"></div>
                <div className="w-28 h-2 bg-slate-200 rounded-3xl"></div>
              </div>
              <div className="flex mt-5 gap-5">
                <div className="w-4 h-4 bg-stone-400 rounded-full"></div>
                <div className="w-4 h-4 bg-stone-400 rounded-full"></div>
                <div className="w-4 h-4 bg-stone-400 rounded-full"></div>
                <div className="w-4 h-4 bg-stone-400 rounded-full"></div>
              </div>
            </div>
          </div>
        );
      case "Template 2 Left":
        return (
          <div className=" flex justify-around gap-5 p-4 align-center">
            <div className="flex-col">
              <div className="w-14 h-14 bg-stone-400 rounded-full "></div>
              <div className="flex mt-5 gap-5">
                <div className="w-4 h-4 bg-stone-400 rounded-full"></div>
                <div className="w-4 h-4 bg-stone-400 rounded-full"></div>
                <div className="w-4 h-4 bg-stone-400 rounded-full"></div>
                <div className="w-4 h-4 bg-stone-400 rounded-full"></div>
              </div>
            </div>
  
            <div className="grid grid-cols-2 gap-5">
              <div className="w-28 h-2 bg-slate-200 rounded-3xl"></div>
              <div className="w-28 h-2 bg-slate-200 rounded-3xl"></div>
              <div className="w-28 h-2 bg-slate-200 rounded-3xl"></div>
              <div className="w-28 h-2 bg-slate-200 rounded-3xl"></div>
              <div className="w-28 h-2 bg-slate-200 rounded-3xl"></div>
            </div>
          </div>
        );
      case "Template 2 Right":
        return (
          <div className=" flex justify-around p-4 align-center">
            <div className="grid grid-cols-2 gap-5">
              <div className="w-28 h-2 bg-slate-200 rounded-3xl"></div>
              <div className="w-28 h-2 bg-slate-200 rounded-3xl"></div>
              <div className="w-28 h-2 bg-slate-200 rounded-3xl"></div>
              <div className="w-28 h-2 bg-slate-200 rounded-3xl"></div>
              <div className="w-28 h-2 bg-slate-200 rounded-3xl"></div>
            </div>
            <div className="flex-col">
              <div className="w-14 h-14 bg-stone-400 rounded-full ml-10"></div>
              <div className="flex mt-5 gap-5">
                <div className="w-4 h-4 bg-stone-400 rounded-full"></div>
                <div className="w-4 h-4 bg-stone-400 rounded-full"></div>
                <div className="w-4 h-4 bg-stone-400 rounded-full"></div>
                <div className="w-4 h-4 bg-stone-400 rounded-full"></div>
              </div>
            </div>
          </div>
        );
      case "Template 3 Top":
        return (
          <div className="flex-col gap-5 p-5">
            <div className="w-14 h-14 bg-stone-400 rounded-full ml-5 mb-5 "></div>
            <div className="grid grid-cols-2 gap-4 ">
              <div className="w-28 h-2 bg-slate-200 rounded-3xl"></div>
              <div className="w-28 h-2 bg-slate-200 rounded-3xl"></div>
              <div className="w-28 h-2 bg-slate-200 rounded-3xl"></div>
              <div className="w-28 h-2 bg-slate-200 rounded-3xl"></div>
              <div className="w-28 h-2 bg-slate-200 rounded-3xl"></div>
            </div>
            <div className="flex mt-5 gap-5">
              <div className="w-4 h-4 bg-stone-400 rounded-full"></div>
              <div className="w-4 h-4 bg-stone-400 rounded-full"></div>
              <div className="w-4 h-4 bg-stone-400 rounded-full"></div>
              <div className="w-4 h-4 bg-stone-400 rounded-full"></div>
            </div>
          </div>
        );
      case "Template 3 Bottom":
        return (
          <div className="flex-col gap-5 p-5">
            <div className="grid grid-cols-2 gap-4 ">
              <div className="w-28 h-2 bg-slate-200 rounded-3xl"></div>
              <div className="w-28 h-2 bg-slate-200 rounded-3xl"></div>
              <div className="w-28 h-2 bg-slate-200 rounded-3xl"></div>
              <div className="w-28 h-2 bg-slate-200 rounded-3xl"></div>
              <div className="w-28 h-2 bg-slate-200 rounded-3xl"></div>
            </div>
            <div className="flex mt-5 gap-5">
              <div className="w-4 h-4 bg-stone-400 rounded-full"></div>
              <div className="w-4 h-4 bg-stone-400 rounded-full"></div>
              <div className="w-4 h-4 bg-stone-400 rounded-full"></div>
              <div className="w-4 h-4 bg-stone-400 rounded-full"></div>
            </div>
            <div className="w-14 h-14 bg-stone-400 rounded-full mt-5"></div>
          </div>
        );
    }
  };