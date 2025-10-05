"use client";


import Index from "@/components/index";
import Loading from "@/components/loading";
import { useEffect, useState } from "react";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="grid min-h-dvh place-items-center">
      <Index />
    </div>
  );
}
