"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  useEffect(() => {
    // Add any client-side effects or subscriptions here
  }, []);

  return (
      <section className="my-2-0 flex h-screen w-screen flex-col items-center justify-center bg-blue-950/80 bg-[url('/hero-bg.jpg')] bg-center text-center bg-blend-overlay">
        <div className="container mx-auto mb-6 flex max-w-5xl flex-col items-center justify-center px-4 text-center">
          <h1 className="row col-xl-6 col-lg-8 mb-4 text-4xl font-bold text-white">
            We are the Pioneer of <br /> Production based <br />
            Laser Cutting, CNC
            <br /> &amp; <br />
            <span className="text-yellow-300 hover:text-sky-400 duration-300 ease-in-out">Manufacturing
            <br /> Hologram Labels
            </span>
          </h1>
    
          <h3 className="mb-4 text-2xl font-bold text-white">In Sri Lanka</h3>
          <p className="mb-6 max-w-2xl text-white">
            Providing top-notch industrial solutions with precision engineering
            and custom fabrication services to meet your unique needs.
          </p>
        </div>
        
        <Link href="/#about" className="animate-bounce text-white hover:text-yellow-300 duration-300 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-arrow-down-circle"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"
            />
          </svg>
        </Link>
      </section>
  );
}
