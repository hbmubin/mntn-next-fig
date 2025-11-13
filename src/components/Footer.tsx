import Image from "next/image";
import logo from "../../public/svg/Logo.svg";

const Footer = () => {
  return (
    <footer id="footer" className="sm:mt-50 mt-28 lg:pb-30 sm:pb-10 pb-3">
      <div className="container px-3 mx-auto flex justify-between lg:flex-row flex-col-reverse sm:gap-[114px] gap-20">
        <div className="flex flex-col justify-between flex-1">
          <div>
            <div className="sm:w-[108px] w-20">
            <Image className=" " src={logo} alt="logo"  />
          </div>
          <div className="para-default max-w-[303px] sm:mt-6 mt-4">
            Get out there & discover your next slope, mountain & destination!
          </div>
          </div>
          <div className="text-[rgba(255,255,255,0.5)] font-gilroy sm:text-lg text-sm font-medium leading-8 lg:pt-0 pt-10">
            Copyright 2023 MNTN, Inc. Terms & Privacy
          </div>
        </div>
        <div className="lg:w-[566px] flex justify-between">
            <div className="font-gilroy">
                <h3 className="sm:text-2xl text-base font-bold leading-8 text-[rgba(251,215,132,1)]">More on The Blog</h3>
                <ul className="flex flex-col sm:mt-6 mt-4 sm:gap-4 gap-1 text-white sm:text-base text-sm font-medium leading-8">
                    <li>About MNTN</li>
                    <li>Contributors & Writers</li>
                    <li>Write For Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="font-gilroy">
                <h3 className="sm:text-2xl text-base font-bold leading-8 text-[rgba(251,215,132,1)]">More on MNTN</h3>
                <ul className="flex flex-col sm:mt-6 mt-4 sm:gap-4 gap-1 text-white sm:text-base text-sm font-medium leading-8">
                    <li>The Team</li>
                    <li>Jobs</li>
                    <li>Press</li>
                </ul>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
