"use client";
import { useEffect } from "react";
import Hero from "./hero";
import About from "./about";
import Outcomes from "./outcomes";
import Services from "./services";
import CallTo from "./callToAction";
import Portfolio from "./portfolio";
import Stats from "./stats";
import ContactUs from "./contactUs";

export default function Index() {
  useEffect(() => {
    // Add any client-side effects or subscriptions here
  }, []);

  return (
    <main className="h-full w-full">
      <Hero />
      <About />
      <Outcomes />
      <Services />
      <CallTo />
      <Portfolio />
      <Stats />
      <ContactUs />
      
    </main>
  );
}
