"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

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
      <nav className="max-w-screen sticky top-3 z-50 mx-auto block w-full bg-gray-400 px-4 py-4 shadow-lg">
        <div className="text-state-800 container mx-auto flex flex-wrap items-center justify-between">
          <Link href="/" className="logo d-flex align-items-center">
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
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-gray-800 hover:text-yellow-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              </span>
            </button>
          </div>

          {/*Mobile Menu*/}
          <div
            className={`duration-4000 fixed left-0 top-0 min-h-screen w-64 transform bg-slate-100 shadow-lg transition-transform ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } z-50 lg:hidden`}
          >
            <div className="flex items-center justify-between border-b p-4">
              <Link href="/" className="logo d-flex align-items-center">
                <Image
                  src="/logo.png"
                  alt="Orgalaser Logo"
                  width={60}
                  height={50}
                  className="object-cover"
                />
              </Link>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="absolute right-4 top-4 text-gray-800 hover:text-yellow-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="flex h-full flex-col gap-4 p-4">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-x-2 p-1 text-lg text-slate-600 hover:text-yellow-300"
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
                <button className="btn btn-primary w-full rounded-full border border-yellow-400 px-4 py-2 text-blue-700 hover:bg-yellow-500 hover:text-white">
                  <Link href="/#contact">Request a Quote</Link>
                </button>

              </li>
            </ul>
          </div>
        {/*Desktop Menu*/}
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="text-md text-gray-800 hover:text-yellow-300"
                >
                  <Link href={item.href as any}>{item.name}</Link>
                </li>
              ))}
            </ul>
            </div>
          </div>
      </nav>
    </div>
  );
}
