"use client";
import "@/assets/styles/header.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import ActiveLink from "../ActiveLink";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isbg, setIsbg] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setIsbg(true);
    } else {
      setIsbg(false);
    }

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsbg(true);
      } else {
        setIsbg(false);
      }
    };

    if (pathname == "/") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        if (target.closest(".menu_wrap ul a")) {
          setIsOpen(false);
        }
      });
    }
  }, [isOpen]);

  return (
    <header
      className={`sticky z-50 w-full py-4 text-base-100 transition-all duration-300 ${
        isbg
          ? "w-full mx-auto top-0 bg_gradient"
          : "w-full sm:w-[90%] xl:w-[1200px] mx-auto px-6 rounded-full top-4 bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h2 className="text-2xl font-semibold">Nasim Uddin</h2>
          </Link>

          <div>
            <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden">
              <AiOutlineMenu className="text-2xl" />
            </button>

            <button
              onClick={() => setIsOpen(false)}
              className={`${isOpen && "menu_overlay"} sm:hidden`}
            ></button>

            <nav className={`menu_wrap ${isOpen && "menu_open"}`}>
              <button
                onClick={() => setIsOpen(false)}
                className="mb-4 mt-2 flex w-full justify-end sm:hidden"
              >
                <AiOutlineCloseCircle className="text-2xl" />
              </button>

              <ul className="flex flex-col gap-6 text-sm sm:flex-row sm:items-center">
                <li>
                  <ActiveLink href="/">Home</ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/about">About me</ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/projects">Projects</ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/blogs">Blogs</ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/contact">Contact</ActiveLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
