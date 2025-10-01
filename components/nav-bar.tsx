"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MenuButton, CloseButton, ReqButton } from "./Buttons";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

   const navItems = [
    { name: "Home", href: "/#hero" },
    { name: "About", href: "/#about" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/#contact" },
  ];
  return (
    <div>
      <nav id="navbar" className="max-w-screen fixed start-0 top-0 z-20 mx-auto block w-full px-2 py-4 ">
        <div className="container px-12 max-w-screen flex flex-wrap items-center md:justify-between justify-evenly mx-auto">
          <Link href="/" className=" flex items-center gap-x-2">
            <Image
              src="/logo.png"
              alt="Orgalaser Logo"
              width={60}
              height={50}
              className="object-cover"
            />
          </Link>
          <div className="lg:hidden">
            <button
              className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={toggleMobileMenu}
              type="button"
            >
              <MenuButton />
            </button>
          </div>

          {/*Mobile Menu*/}
          <div
            className={`duration-4000 fixed right-0 top-0 min-h-screen w-64 transform bg-blue-950 shadow-lg transition-transform ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            } z-50 lg:hidden`}
          >
            <div className="flex items-center justify-between p-8"></div>
            <button
              onClick={toggleMobileMenu}
              className="absolute right-4 top-4 text-white hover:text-yellow-300"
            >
              <CloseButton />
            </button>
            <ul className="flex h-full flex-col gap-4 p-4">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-x-2 p-1 text-lg text-white hover:text-yellow-400"
                >
                  <Link
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                    }}
                    href={item.href as any}
                    className="flex items-center"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                <ReqButton />
              </li>
            </ul>
          </div>
          
          {/*Desktop Menu*/}
          <div className="hidden lg:block" >
            <ul className="px-8 mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="text-md text-white hover:text-yellow-300"
                >
                  <Link href={item.href as any}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
            <div className="hidden lg:block">
              <ReqButton />
            </div>
        </div>
      </nav>
    </div>
  );
}
