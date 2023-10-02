import Logo from "./Logo";

const Footer = () => {
  return (
    <>
      <div className="inline-flex w-full items-start px-[130px] py-[98px] gap-[243px] bg-[#120b4b]">
        <Logo color="white" logoColor="#120B48" fill="white" />
        <div className="flex items-start justify-between w-full gap-20">
          <div className="flex flex-col items-start gap-[26px]">
            <h5 className="text-white font-sora font-semibold leading-normal">
              Menu
            </h5>
            <div className="flex flex-col items-start gap-6">
              <p className="text-white font-workSans leading-normal">Home</p>
              <p className="text-white font-workSans leading-normal">
                Converter
              </p>
              <p className="text-white font-workSans leading-normal">
                How it works
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[26px]">
            <h5 className="text-white font-sora font-semibold leading-normal">
              About us
            </h5>
            <div className="flex flex-col items-start gap-6">
              <p className="text-white font-workSans leading-normal">About</p>
              <p className="text-white font-workSans leading-normal">
                Contact Us
              </p>
              <p className="text-white font-workSans leading-normal">
                Privacy Policy
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[26px]">
            <h5 className="text-white font-sora font-semibold leading-normal">
              Screen Record
            </h5>
            <div className="flex flex-col items-start gap-6">
              <p className="text-white font-workSans leading-normal">
                Browser Window
              </p>
              <p className="text-white font-workSans leading-normal">Desktop</p>
              <p className="text-white font-workSans leading-normal">
                Application
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
