"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  useEffect(() => {
    // Add any client-side effects or subscriptions here
  }, []);

  const work = [
    {
      id: 1,
      title: "Laser Cutting & CNC",
      icon: "bi bi-vector-pen",
    },
    {
      id: 2,
      title: "Hologram Labels",
      icon: "bi bi-file-lock2",
    },
    {
      id: 3,
      title: "Wedding Invitations",
      icon: "bi bi-envelope-open-fill",
    },
    {
      id: 4,
      title: "Digital Printing",
      icon: "bi bi-printer-fill",
    },
  ];

  return (
    <section className="relative flex h-screen flex-col items-center justify-center bg-gray-950/70 bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat text-center bg-blend-overlay">
      {/* Hero Content */}
      <div className="container mx-auto mb-4 flex max-w-5xl flex-col items-center justify-center px-4 pt-10 text-center lg:mb-6">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:mt-8 lg:text-5xl xl:text-4xl">
            We are the Pioneer of Production based <br />
            Laser Cutting, CNC
            <br /> &amp; <br />
            <span className="text-yellow-300 transition-colors duration-300 ease-in-out hover:text-green-300">
              Manufacturing <br /> Hologram Labels
            </span>
          </h1>

          <h3 className="mb-4 text-xl font-bold text-white md:text-2xl lg:text-3xl">
            In Sri Lanka
          </h3>

          <p className="mb-6 max-w-2xl text-base text-white/90 md:text-lg">
            Innovation in Craftsmanship and Security
          </p>
        </div>
      </div>

      {/* Work Section */}
      <div className="mb-10 grid grid-cols-2 gap-4 px-4 md:grid-cols-4 lg:mb-12 lg:gap-6">
        {work.map((item) => (
          <div
            key={item.id}
            className="group flex transform flex-col items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-3 py-3 backdrop-blur-sm transition-all duration-300 ease-in-out hover:border-yellow-300/50 hover:bg-yellow-300/20 hover:shadow-lg hover:shadow-yellow-300/20 lg:px-6 lg:py-5"
          >
            <div className="text-2xl text-white transition-colors duration-300 group-hover:text-yellow-300 md:text-3xl lg:text-4xl">
              <i className={item.icon}></i>
            </div>
            <h4 className="mt-2 text-xs font-semibold text-white transition-colors duration-300 group-hover:text-yellow-100 md:text-sm lg:text-base xl:text-lg">
              {item.title}
            </h4>
          </div>
        ))}
      </div>

      {/* Down Arrow */}
      <Link
        href="#about"
        className="animate-bounce text-3xl text-white transition-colors duration-300 ease-in-out hover:text-yellow-300 md:text-4xl"
        aria-label="Scroll to About section"
      >
        <i className="bi bi-arrow-down-circle"></i>
      </Link>
    </section>
  );
}
