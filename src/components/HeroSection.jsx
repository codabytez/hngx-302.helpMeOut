import womanOnPhone from "../assets/woman-using-smartphone-technology_2.jpg";
import womanOnSystem from "../assets/AdobeStock_1.jpg";
import boyOnSystem from "../assets/AdobeStock_2.jpg";
import background_1 from "../assets/background_1.svg";
import background_2 from "../assets/background_2.svg";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-shrink-0 gap-11 justify-evenly h-screen items-center bg-white relative z-10">
        <div className="inline-flex flex-col items-start gap-12 w-[40%]">
          <div className="flex flex-col items-start gap-5">
            <h1 className="flex items-start gap-2.5 text-[#141414] font-sora text-[64px] leading-[64px] font-bold">
              Show Them Don’t Just Tell
            </h1>
            <p className="flex items-start gap-2.5 text-black/75 font-inter text-xl leading-7">
              Help your friends and loved ones by creating and sending videos on
              how to get things done on a website.
            </p>
          </div>
          <button className="flex gap-3 justify-center items-center py-[22px] px-6 rounded-lg bg-[#120b48] text-white font-sans text-lg font-medium leading-normal">
            Install HelpMeOut
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M12.0254 5.44165L17.0837 10.5L12.0254 15.5583"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.91699 10.5H16.942"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="relative grid grid-cols-2 gap-6">
          <img
            src={background_1}
            alt="background img"
            className="absolute -top-[60px] -right-11 -z-10"
          />
          <img
            src={background_2}
            alt="background img"
            className="absolute -bottom-[90px] -left-9 -z-10"
          />
          <img
            src={womanOnSystem}
            alt="woman pressing system"
            className="rounded-lg flex justify-center items-center"
          />
          <img
            src={womanOnPhone}
            alt="woman pressing phone"
            className=" row-span-2 rounded-lg flex justify-center items-center"
          />
          <img
            src={boyOnSystem}
            alt="boy pressing system"
            className="rounded-lg flex justify-center items-center"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
