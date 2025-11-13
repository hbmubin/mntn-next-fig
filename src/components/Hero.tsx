import Image from "next/image";
import arrow from "../../public/svg/arrow_downward_24px.svg"
import Subtitle from "./Subtitle";
const Hero = () => {
    return (
        <section id="hero" className="">
            <div className="sm:px-20 px-3 lg:pt-50 sm:pt-20 pt-14">
                <div className="max-w-[950px] mx-auto ">
                    <Subtitle text="A Hiking guide"></Subtitle>
                    <h3 className="font-chronicle lg:text-[88px] sm:text-6xl text-4xl lg:leading-[100px] text-white font-normal">
                        Be prepared for the Mountains and beyond!
                    </h3>
                    <a href="#footer" className="text-white sm:pt-8 pt-3 flex gap-2 items-center group">
                        <div className="sm:text-lg text-sm font-gilroy font-bold">scroll down</div>
                        <div className="group-hover:translate-y-1 duration-300"><Image className="sm:w-4 w-3" src={arrow} alt="arrow" /></div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;