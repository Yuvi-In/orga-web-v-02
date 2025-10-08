"use client";

import { useEffect } from "react";
import Link from "next/link";
import { PenTool, LockKeyhole, MailOpen, Printer, Mouse, } from "lucide-react";

export default function Hero() {
  useEffect(() => {
    // Add any client-side effects or subscriptions here
  }, []);

  const work = [
    {
      id: 1,
      title: "Laser Cutting & CNC",
      icon: PenTool,
    },
    {
      id: 2,
      title: "Hologram Labels",
      icon: LockKeyhole,
    },
    {
      id: 3,
      title: "Wedding Invitations",
      icon: MailOpen,
    },
    {
      id: 4,
      title: "Digital Printing",
      icon: Printer,
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
        {work.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              className="group flex transform flex-col items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-3 py-3 backdrop-blur-sm transition-all duration-300 ease-in-out hover:border-yellow-300/50 hover:bg-yellow-300/20 hover:shadow-lg hover:shadow-yellow-300/20 hover:scale-105 lg:px-6 lg:py-5"
            >
              <div className="text-white transition-all duration-300 ease-in-out group-hover:text-yellow-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:rotate-6">
                <IconComponent size={32} className="md:w-8 md:h-8 lg:w-10 lg:h-10" />
              </div>
              <h4 className="mt-2 text-xs font-semibold text-white transition-all duration-300 ease-in-out group-hover:text-yellow-100 group-hover:translate-y-0.5 md:text-sm lg:text-base xl:text-lg">
                {item.title}
              </h4>
            </div>
          );
        })}
      </div>

      {/* Down Arrow */}
      <Link
        href="#about"
        className="animate-bounce text-white transition-colors duration-300 ease-in-out hover:text-yellow-300"
        aria-label="Scroll to About section"
      >
        <Mouse size={32} className="md:w-10 md:h-10" />
      </Link>
    </section>
  );
}
