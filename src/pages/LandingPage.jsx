import { Link } from "react-router-dom";
import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import HowItWorksSection from "../components/HowItWorksSection";
import Logo from "../components/Logo";

const LandingPage = () => {
  return (
    <>
      <div className="flex py-3 px-[100px] justify-between items-center gap-5 bg-white border-b border-x rounded-b-md max-w-[1440px] mx-auto">
        <Logo color="#100A42" logoColor="white" fill="#100A42" />
        <div className="flex py-2.5 px-5 justify-center items-start gap-10 text-black">
          <h3 className="flex items-start gap-12 text-workSans font-medium leading-normal">
            Features
          </h3>
          <h3 className="flex items-start gap-12 text-workSans font-medium leading-normal">
            How It Works
          </h3>
        </div>
        <Link to="/repository">
          <div className="flex py-3 px-2.5 flex-col justify-center items-center gap-2.5 rounded-[5px] border-0 border-[#120b48]">
            <div className="flex items-center gap-5">
              <h3 className="flex items-center gap-2.5 text-[#120b48] text-center font-sora text-lg font-semibold leading-normal">
                Get Started
              </h3>
            </div>
          </div>
        </Link>
      </div>

      <div className="bg-[#f4f6f8] flex flex-col gap-14 overflow-x-hidden max-w-[1440px] mx-auto">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
      </div>
    </>
  );
};

export default LandingPage;
