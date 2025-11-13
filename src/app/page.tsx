import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import BlogSection from "@/components/BlogSection";
import SectionBar from "@/components/SectionBar";
import Footer from "@/components/Footer";
import insta from "../../public/svg/instagram.svg";
import twitter from "../../public/svg/twitter.svg";
import Image from "next/image";

export default function Home() {
 

  return (
    <div className="bg-img bg-bgBlue">
      <div className="absolute xl:left-0 -left-16 w-min top-1/2 z-10  sm:block hidden">
        <div className="flex gap-6 rotate-90">
          <div className="text-white font-gilroy text-lg font-bold">
            <span className="inline-block text-nowrap">Follow us</span>
          </div>
          <div className="w-6 -rotate-90">
            <Image src={insta} alt="insta" />
          </div>
          <div className="w-6 -rotate-90">
            <Image src={twitter} alt="twitter" />
          </div>
        </div>
      </div>
      <SectionBar />
      <Nav></Nav>
      <Hero></Hero>
      <BlogSection></BlogSection>
      <Footer></Footer>
    </div>
  );
}
