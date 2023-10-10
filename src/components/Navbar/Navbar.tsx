"use client";
import "@src/components/Navbar/Navbar.css";
import { useEffect, useRef } from "react";
import MiddleNav from "./MiddleNav";
import RightNav from "./RightNav";
import Logo from "./Logo";

export default function Navbar() {
  const navbar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        navbar.current?.classList.add("navbar-animation");
      } else {
        navbar.current?.classList.remove("navbar-animation");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={navbar} className="w-full relative top-0 left-0 shadow bg-[var(--primary-color)] py-8 z-[999999] ">
      <nav className="w-[90%] xl:w-[60%] font-medium flex items-center justify-between mx-auto">
        <Logo />
        <MiddleNav />
        <RightNav />
      </nav>
    </div>
  );
}
