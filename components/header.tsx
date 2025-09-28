"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import NavBar from "./nav-bar";

export default function Header() {
  useEffect(() => {
    if (typeof window !== "undefined") return;
  }, []);
  return (
    <header>
      <NavBar />
    </header>
  );
}
