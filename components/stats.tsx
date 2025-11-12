"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Building2, Users2, Layers, Briefcase } from "lucide-react";

// Custom hook for counting animation
const useCountUp = (end: number, duration: number = 2000, start: number = 0) => {
  const [count, setCount] = useState(start);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    const node = ref.current;
    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * (end - start) + start));
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    
    requestAnimationFrame(step);
  }, [isInView, end, duration, start]);

  return { count, ref };
};

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  title: string;
  description: string;
  delay?: number;
}

const StatItem = ({ icon, value, suffix = "", title, description, delay = 0 }: StatItemProps) => {
  const { count, ref } = useCountUp(value, 2500);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`group relative flex items-start gap-4 p-6 rounded-xl bg-slate-900/70 backdrop-blur-sm
        hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 hover:bg-slate-900/80 transition-all duration-500 border border-slate-700/50
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon with animated background */}
      <div className="relative">
        <div className="absolute inset-0 bg-yellow-400/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
        <div className="relative bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-lg shadow-lg group-hover:shadow-2xl group-hover:rotate-6 transition-all duration-500">
          {icon}
        </div>
      </div>
      
      <div className="flex-1">
        <h3 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-1">
          {count}{suffix}
        </h3>
        <p className="text-sm md:text-base font-bold text-gray-200 mb-1">{title}</p>
        <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default function AboutStatsSection() {
  const stats = [
    {
      icon: <Building2 className="w-6 h-6 md:w-7 md:h-7 text-white" />,
      value: 14,
      suffix: "+",
      title: "Years of dedicated service",
      description: "is a remarkable milestone worth celebrating.",
    },
    {
      icon: <Layers className="w-6 h-6 md:w-7 md:h-7 text-white" />,
      value: 1020,
      suffix: "+",
      title: "We have accomplished",
      description: "a remarkable Projects under OneRoof!",
    },
    {
      icon: <Users2 className="w-6 h-6 md:w-7 md:h-7 text-white" />,
      value: 453,
      suffix: "+",
      title: "Clients entrusting their",
      description: "partnership with us",
    },
    {
      icon: <Briefcase className="w-6 h-6 md:w-7 md:h-7 text-white" />,
      value: 15,
      suffix: "+",
      title: "Hard Workers",
      description: "delivers precision, innovation, and quality products.",
    },
  ];

  return (
    <section className="relative bg-[url('/images/stats-bg.jpg')] bg-cover bg-center py-16 md:py-24 lg:py-28 px-6 md:px-12 lg:px-20 overflow-hidden">
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative group">
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-yellow-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
              <div className="relative transform group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/stats-img.png"
                  alt="Team illustration"
                  width={600}
                  height={500}
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="inline-flex items-center gap-2 px-4 py-2 border border-yellow-800 bg-gradient-to-r from-yellow-400/80 to-orange-500/80 text-sky-950 text-sm font-semibold rounded-full shadow-lg">
                  <span className="w-2 h-2 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full animate-pulse"></span>
                  Our Achievements
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white leading-tight">
                We are honored to serve high-quality and distinguished products.
              </h2>
            </div>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl">
              We are delighted to provide you with outstanding products that not only meet 
              the highest quality standards but also elevate your experience. Our commitment 
              to excellence is what sets us apart, and we invite you to discover the 
              difference for yourself!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 pt-8">
              {stats.map((stat, index) => (
                <StatItem
                  key={index}
                  icon={stat.icon}
                  value={stat.value}
                  suffix={stat.suffix}
                  title={stat.title}
                  description={stat.description}
                  delay={index * 150}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
