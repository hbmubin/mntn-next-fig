"use client";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import insta from "../../public/svg/instagram.svg";
import twitter from "../../public/svg/twitter.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [section, setSection] = useState("hero")
  useEffect(() => {
    const sections = document.querySelectorAll("section, article, footer, header, main, div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id) {
              setSection(id);
            }
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

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
      <div className="fixed xl:right-20 right-3 w-min top-1/2 -translate-y-1/2 z-10  sm:block hidden">
        <div className="flex gap-8">
          <div className="grid row-span-4 text-end text-lg font-bold text-white flex-1 items-center">
            <div>Start</div>
            <div>01</div>
            <div>02</div>
            <div>03</div>
          </div>
          <div className="w-[3px] h-[180px] bg-white/30 flex-1 relative">
            <div className={`w-full bg-white h-[45px] left-0 absolute duration-300 ${section== "hero" ? "top-0" : section== "blog01" ? "top-[25%]" : section== "blog02" ? "top-[50%]": "top-[75%]"}`}></div>
          </div>
        </div>
      </div>
      <Nav></Nav>
      <Hero></Hero>
      <BlogSection></BlogSection>
      <Footer></Footer>
    </div>
  );
}
