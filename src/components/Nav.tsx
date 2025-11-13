"use client";
import Image from "next/image";
import logo from "../../public/svg/Logo.svg";
import account from "../../public/svg/Icons General _ cart.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect, useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  handleScroll();

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

console.log(isSticky)

  return (
    <header className={`duration-300 ${isSticky ? "sticky top-0 bg-black/30 lg:py-10 py-5 z-10 lg:backdrop-blur-sm" : "lg:pt-16 pt-5"}`}>
      <div className="lg:px-20 sm:px-10 px-3 mx-auto flex justify-between items-center">
        <div className="sm:w-[108px] w-20">
          <Image className=" " src={logo} alt="logo"  />
        </div>
        <nav className={`fixed lg:static bg-black/70 lg:bg-transparent lg:p-0 px-6 py-3 w-full lg:w-auto h-full lg:h-auto left-0 top-0 flex justify-center items-center z-10 lg:z-auto lg:translate-0 duration-300 ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <div onClick={()=>setIsOpen(false)} className="absolute top-10 right-10 text-white flex lg:hidden"><IoCloseSharp size={32} /></div>
        <div className=" items-center gap-2 flex lg:hidden absolute top-11 left-1/2 -translate-x-1/2">
          <div>
            <Image src={account} height={24} width={24} alt="account" />
          </div>
          <div className="font-gilroy text-lg font-bold text-white">Account</div>
        </div>
          <ul className="flex sm:gap-10 gap-4 lg:flex-row flex-col items-center font-gilroy text-lg font-bold text-white">
            <li>
              <a href="#">Equipment</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </nav>
        <div className=" items-center gap-2 lg:flex hidden">
          <div>
            <Image src={account} height={24} width={24} alt="account" />
          </div>
          <div className="font-gilroy text-lg font-bold text-white">Account</div>
        </div>
        <div onClick={()=>setIsOpen(true)} className="text-white lg:hidden block">
          <AiOutlineMenu size={24} />
        </div>
      </div>
    </header>
  );
};

export default Nav;
