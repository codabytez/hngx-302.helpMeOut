import rec from "../assets/rec-1.svg";
import Footer from "./Footer";

const HowItWorksSection = () => {
  return (
    <>
      <div className="w-full">
        <div className=" py-28 flex flex-col justify-center items-center gap-16 bg-white">
          <h2 className="text-[#141414] font-sora text-[40px] font-bold leading-normal">
            How it works
          </h2>
          <div className="inline-flex items-end gap-[83px] justify-center">
            <div className="flex flex-col items-start gap-7 w-[358px]">
              <div className="flex flex-col items-center gap-8">
                <div className="flex py-[14px] px-[28px] flex-col justify-center items-center gap-[10px] rounded-[60px] bg-[#120b48]">
                  <h4 className="text-white text-center font-inter text-[32px] font-bold leading-normal">
                    1
                  </h4>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                  <h5 className="flex flex-col items-center text-[#1b233d] text-center font-inter text-[28px] font-semibold leading-normal">
                    Record Screen
                  </h5>
                  <p className="text-center font-workSans text-xl leading-[30.26px] text-[#616163]">
                    Click the "Start Recording" button in our extension. choose
                    which part of your screen to capture and who you want to
                    send it to.
                  </p>
                </div>
                <img src={rec} alt="rec" />
              </div>
            </div>
            <div className="flex flex-col items-start gap-7 w-[358px]">
              <div className="flex flex-col items-center gap-8">
                <div className="flex py-[14px] px-[28px] flex-col justify-center items-center gap-[10px] rounded-[60px] bg-[#120b48]">
                  <h4 className="text-white text-center font-inter text-[32px] font-bold leading-normal">
                    2
                  </h4>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                  <h5 className="flex flex-col items-center text-[#1b233d] text-center font-inter text-[28px] font-semibold leading-normal">
                    Share Your Recording
                  </h5>
                  <p className="text-center font-workSans text-xl leading-[30.26px] text-[#616163]">
                    We generate a shareable link for your video. Simply send it
                    to your audience via email or copy the link to send via any
                    platform.
                  </p>
                </div>
                <img src={rec} alt="rec" />
              </div>
            </div>
            <div className="flex flex-col items-start gap-7 w-[350px]">
              <div className="flex flex-col items-center gap-8">
                <div className="flex py-[14px] px-[28px] flex-col justify-center items-center gap-[10px] rounded-[60px] bg-[#120b48]">
                  <h4 className="text-white text-center font-inter text-[32px] font-bold leading-normal">
                    3
                  </h4>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                  <h5 className="flex flex-col items-center text-[#1b233d] text-center font-inter text-[28px] font-semibold leading-normal">
                    Learn Effortlessly
                  </h5>
                  <p className="text-center font-workSans text-xl leading-[30.26px] text-[#616163]">
                    Recipients can access your video effortlessly through the
                    provided link, with our user-friendly interface suitable for
                    everyone.
                  </p>
                </div>
                <img src={rec} alt="rec" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HowItWorksSection;
