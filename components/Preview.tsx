interface PreviewProps {
  templateType: string;
}

const Preview = ({ templateType }: PreviewProps) => {
  return <>{templatePicker(templateType)}</>;
};

export default Preview;

const templatePicker = (type: string) => {
  switch (type) {
    case "Plain Text":
      return (
        <div className="bg-stone-200 mt-10 rounded-lg flex-auto m-5 grid grid-cols-1 gap-5">
          <div>
            <p>
              Hi X,
              <br />
              Apparently, email signatures can mess up deliverability. Did you
              know that? News to me.
              <br />
              *FULL NAME*
              <br />
              *OCCUPATION* | *JOB TITLE* | *COMPANY*
              <br />
              <br />
              *WEB SITE*
              <br />
              *WORK MAİL*
              <br />
              *PHONE NUMBER*
              <br />
              *WORK ADRESS* <br />
            </p>
          </div>
          <div>*ICONS*</div>
        </div>
      );
    case "Template 1 Left":
      return (
        <div className="bg-stone-200 mt-10 rounded-lg flex-auto m-5 grid grid-cols-1 gap-5">
          <p>
            Hi X,
            <br />
            Apparently, email signatures can mess up deliverability. Did you
            know that? News to me.
            <br />
            <div className="grid grid-cols-2 mt-5">
              <div className="w-14 h-14 bg-stone-400 rounded-full mt-10 ml-10"></div>
              <div>
                *FULL NAME*
                <br />
                *OCCUPATION* | *JOB TITLE* | *COMPANY*
                <br />
                <br />
                *WEB SITE*
                <br />
                *WORK MAİL*
                <br />
                *PHONE NUMBER*
                <br />
                *WORK ADRESS* <br />
              </div>
            </div>
          </p>
        </div>
      );
    case "Template 1 Right":
      return (
        <div className="bg-stone-200 mt-10 rounded-lg flex-auto m-5 grid grid-cols-1 gap-5">
          <p>
            Hi X,
            <br />
            Apparently, email signatures can mess up deliverability. Did you
            know that? News to me.
            <br />
            <div className="grid grid-cols-2 mt-5 gap-40">
              <div>
                *FULL NAME*
                <br />
                *OCCUPATION* | *JOB TITLE* | *COMPANY*
                <br />
                <br />
                *WEB SITE*
                <br />
                *WORK MAİL*
                <br />
                *PHONE NUMBER*
                <br />
                *WORK ADRESS* <br />
              </div>
              <div className="w-14 h-14 bg-stone-400 rounded-full mt-10"></div>
            </div>
          </p>
          <div>*ICONS*</div>
        </div>
      );
    case "Template 2 Left":
      return (
        <div className="bg-stone-200 mt-10 rounded-lg flex-auto m-5 gap-10">
          <p>
            Hi X,
            <br />
            Apparently, email signatures can mess up deliverability. Did you
            know that? News to me.
            <br />
          </p>
          <div className="grid grid-cols-2">
            <div>
              <div className="w-14 h-14 bg-stone-400 rounded-full mt-10"></div>
              <div>*ICONS*</div>
            </div>
            <div>
              <p>
                <div>
                  *FULL NAME*
                  <br />
                  *OCCUPATION* | *JOB TITLE* | *COMPANY*
                  <br />
                  <br />
                  *WEB SITE*
                  <br />
                  *WORK MAİL*
                  <br />
                  *PHONE NUMBER*
                  <br />
                  *WORK ADRESS* <br />
                </div>
              </p>
            </div>
          </div>
        </div>
      );
    case "Template 2 Right":
      return (
        <div className="bg-stone-200 mt-10 rounded-lg flex-auto m-5 gap-10">
          <p>
            Hi X,
            <br />
            Apparently, email signatures can mess up deliverability. Did you
            know that? News to me.
            <br />
          </p>
          <div className="grid grid-cols-2">
            <div>
              <p>
                <div>
                  *FULL NAME*
                  <br />
                  *OCCUPATION* | *JOB TITLE* | *COMPANY*
                  <br />
                  <br />
                  *WEB SITE*
                  <br />
                  *WORK MAİL*
                  <br />
                  *PHONE NUMBER*
                  <br />
                  *WORK ADRESS* <br />
                </div>
              </p>
            </div>
            <div>
              <div className="w-14 h-14 bg-stone-400 rounded-full mt-10"></div>
              <div>*ICONS*</div>
            </div>
          </div>
        </div>
      );
    case "Template 3 Top":
      return (
        <div className="bg-stone-200 mt-10 rounded-lg flex-auto m-5 gap-5 grid grid-cols-1">
          <p>
            Hi X,
            <br />
            Apparently, email signatures can mess up deliverability. Did you
            know that? News to me.
            <br />
          </p>
          <div className="w-14 h-14 bg-stone-400 rounded-full "></div>
          <p>
            <div>
              *FULL NAME*
              <br />
              *OCCUPATION* | *JOB TITLE* | *COMPANY*
              <br />
              <br />
              *WEB SITE*
              <br />
              *WORK MAİL*
              <br />
              *PHONE NUMBER*
              <br />
              *WORK ADRESS* <br />
            </div>
          </p>

          <div>*ICONS*</div>
        </div>
      );
    case "Template 3 Bottom":
      return (
        <div className="bg-stone-200 mt-10 rounded-lg flex-auto m-5 gap-5 grid grid-cols-1">
          <p>
            Hi X,
            <br />
            Apparently, email signatures can mess up deliverability. Did you
            know that? News to me.
            <br />
          </p>
          <p>
            <div>
              *FULL NAME*
              <br />
              *OCCUPATION* | *JOB TITLE* | *COMPANY*
              <br />
              <br />
              *WEB SITE*
              <br />
              *WORK MAİL*
              <br />
              *PHONE NUMBER*
              <br />
              *WORK ADRESS* <br />
            </div>
          </p>

          <div>*ICONS*</div>
          <div className="w-14 h-14 bg-stone-400 rounded-full "></div>
        </div>
      );
    default:
      return null;
  }
};
