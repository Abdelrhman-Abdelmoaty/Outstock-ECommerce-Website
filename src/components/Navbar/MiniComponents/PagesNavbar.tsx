import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export default function PagesNavbar() {
  const pagesNavbar = useRef<HTMLUListElement>(null);
  const mobilePagesNavbar = useRef<HTMLUListElement>(null);
  const [width, setHeight] = useState<number>(0);
  useEffect(() => {
    setHeight(window.innerWidth);
  }, []);
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
  const handleMobileMenu = () => {
    mobilePagesNavbar.current?.classList.toggle("hidden");
  };
  return (
    <>
      {width <= 768 ? (
        <>
          <button onClick={handleMobileMenu}>
            <div className="flex items-center">
              Pages
              <KeyboardArrowDownOutlinedIcon className="w-12 h-12 xl:w-6 xl:h-6" />
            </div>
            <ul ref={mobilePagesNavbar} className="text-start pl-4 text-[var(--font-color)] hidden">
              <li className="my-4">
                <Link href="">Blog</Link>
              </li>
              <li className="my-4">
                <Link href="">Contact Us</Link>
              </li>
              <li className="my-4">
                <Link href="">About Us</Link>
              </li>
              <li className="my-4">
                <Link href="">Store Locator</Link>
              </li>
              <li className="my-4">
                <Link href="">Page 404</Link>
              </li>
              <li className="my-4">
                <Link href="">FAQs Page</Link>
              </li>
            </ul>
          </button>
        </>
      ) : (
        <>
          <Link href="/pages" onMouseEnter={handleButtonEnter} onMouseLeave={handleButtonLeave}>
            <div className="flex-center">
              Pages
              <KeyboardArrowDownOutlinedIcon className="w-12 h-12 xl:w-6 xl:h-6" />
            </div>
          </Link>
          <ul
            ref={pagesNavbar}
            className="pages-navbar p-4 xl:absolute top-14 font-light bg-white shadow text-[var(--font-color)] opacity-0 invisible translate-y-12 duration-500 ease-in-out text-start"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <li>
              <Link href="">Blog</Link>
            </li>
            <li>
              <Link href="">Contact Us</Link>
            </li>
            <li>
              <Link href="">About Us</Link>
            </li>
            <li>
              <Link href="">Store Locator</Link>
            </li>
            <li>
              <Link href="">Page 404</Link>
            </li>
            <li>
              <Link href="">FAQs Page</Link>
            </li>
          </ul>
        </>
      )}
    </>
  );
}