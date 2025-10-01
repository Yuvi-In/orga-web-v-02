"use client"; // if you’re in Next.js App Router

import { useEffect } from "react";
import NavBar from "./nav-bar";

export default function Header() {
  useEffect(() => {
    const selectBody = document.querySelector("body");
    const selectHeader = document.querySelector("#header");

    const toggleScrolled = () => {
      if (
        !selectHeader?.classList.contains("scroll-up-sticky") &&
        !selectHeader?.classList.contains("sticky-top") &&
        !selectHeader?.classList.contains("fixed-top")
      ) return;

      if (window.scrollY > 100) {
        selectBody?.classList.add("scrolled");
      } else {
        selectBody?.classList.remove("scrolled");
      }
    };

    // Attach event listeners
    window.addEventListener("scroll", toggleScrolled);
    window.addEventListener("load", toggleScrolled);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", toggleScrolled);
      window.removeEventListener("load", toggleScrolled);
    };
  }, []);

  return (
    <header
      id="header"
      className="scroll-up-sticky fixed-top shadow transition-all duration-300"
    >
      <NavBar />
    </header>
  );
}
