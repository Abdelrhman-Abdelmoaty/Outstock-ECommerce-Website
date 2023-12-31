import { useEffect, useRef, useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export default function PagesNavbar() {
  const pagesNavbar = useRef<HTMLUListElement>(null);
  const handleButtonEnter = () => {
    pagesNavbar.current?.classList.add("show");
  };
  const handleButtonLeave = () => {
    setTimeout(() => {
      pagesNavbar.current?.classList.remove("show");
    }, 100);
  };
  const handleMouseEnter = () => {
    if (pagesNavbar.current?.classList.contains("show")) {
      pagesNavbar.current.classList.add("active");
    }
  };
  const handleMouseLeave = () => {
    setTimeout(() => {
      pagesNavbar.current?.classList.remove("active");
    }, 100);
  };
  return (
    <>
      <a href="/pages" onMouseEnter={handleButtonEnter} onMouseLeave={handleButtonLeave}>
        <div className="flex-center">
          Pages
          <KeyboardArrowDownOutlinedIcon className="w-12 h-12 xl:w-6 xl:h-6" />
        </div>
      </a>
      <ul ref={pagesNavbar} className="pages-navbar p-4 xl:absolute top-14 bg-white shadow opacity-0 invisible translate-y-12 duration-500 ease-in-out text-start" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <li>
          <a href="/Blog">Blog</a>
        </li>
        <li>
          <a href="/ContactUs">Contact Us</a>
        </li>
        <li>
          <a href="/AboutUs">About Us</a>
        </li>
        <li>
          <a href="/StoreLocator">Store Locator</a>
        </li>
        <li>
          <a href="/Page404">Page 404</a>
        </li>
        <li>
          <a href="/FAQsPage">FAQs Page</a>
        </li>
      </ul>
    </>
  );
}
