import Image from "next/image";
import arrow from "../../public/svg/icon_navigation_arrow_downward_24px.svg"
import Subtitle from "./Subtitle";

const Blog = ({ blogImg, subTitle, title, des, left, num }: any) => {
    return (
        <article id={`blog${num}`} className={`flex lg:flex-row flex-col-reverse lg:items-center xl:gap-[114px] lg:gap-20 gap-20 ${!left && "lg:flex-row-reverse"}`}>
            <div className={`xl:pl-[150px] lg:pl-32 flex flex-col gap-[27px] flex-1 relative`}>
                <div className="absolute lg:left-2.5 left-0 xl:-top-40 lg:-top-32 sm:-top-24 -top-14 xl:text-[240px] lg:text-[200px] sm:text-[128px] text-[80px]  font-bold font-gilroy opacity-10 text-white">{num}</div>
                <Subtitle text={subTitle}></Subtitle>
                <h3 className="font-chronicle xl:text-[64px] sm:text-5xl text-4xl font-normal xl:leading-[77px] lg:leading-14 text-white">{title}</h3>
                <p className="para-default">{des}</p>
                <a className="flex items-center sm:gap-4 gap-3 group" href="#">
                    <div className="font-gilroy sm:text-lg text-sm font-bold text-[rgb(251,215,132)]">read more</div>
                    <div className="sm:w-6 w-4 group-hover:translate-x-2 duration-300"><Image src={arrow}  alt=""/></div>
                </a>
            </div>
            <div className="xl:w-[566px] lg:w-[360px] md:w-2/3 sm:w-96 w-64"><Image src={blogImg} alt="blog" /></div>
        </article>
    );
};

export default Blog;