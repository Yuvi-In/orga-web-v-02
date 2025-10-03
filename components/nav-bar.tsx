"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MenuButton, CloseButton, ReqButton } from "./Buttons";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navItems = [
    { name: "Home", href: "/#hero" },
    { name: "About", href: "/#about" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <div>
      <nav
        id="navbar"
        role="navigation"
        className="fixed start-0 top-0 z-20 w-full bg-transparent px-2 py-4"
      >
        <div className="container mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-x-2">
            <Image
              src="/logo.png"
              alt="Orgalaser Logo"
              width={60}
              height={50}
              className="object-cover"
            />
          </Link>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              aria-label="Toggle Menu"
              onClick={toggleMobileMenu}
              type="button"
              className="relative ml-auto h-6 w-6 select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:outline-none"
            >
              <MenuButton />
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed right-0 top-0 min-h-screen w-64 transform bg-blue-950 shadow-lg transition-transform duration-700 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            } z-50 lg:hidden`}
          >
            <button
              onClick={toggleMobileMenu}
              aria-label="Close Menu"
              className="absolute right-4 top-4 text-white hover:text-yellow-300"
            >
              <CloseButton />
            </button>
            <ul className="flex h-full flex-col gap-4 p-8">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-x-2 p-1 text-lg text-white hover:text-yellow-300"
                >
                  <Link
                    onClick={() => setIsMobileMenuOpen(false)}
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

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            <ul className="flex gap-6">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="text-md text-white hover:text-yellow-300"
                >
                  <Link href={item.href as any}>{item.name}</Link>
                </li>
              ))}
            </ul>
            <ReqButton />
          </div>
        </div>
      </nav>
    </div>
  );
}
