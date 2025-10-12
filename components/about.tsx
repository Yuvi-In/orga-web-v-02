"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar } from "lucide-react";
import Flip from "./flip";

const milestones = [
  {
    year: "2011",
    title: "Founded company",
    description:
      "Orgalaser was established with a vision to revolutionize laser cutting in Sri Lanka.",
    icon: <Calendar className="w-6 h-6 text-yellow-400" />,
  },
  {
    year: "2018",
    title: "Expand as Production",
    description:
      "Established as the first production-based laser machining company in our state, known for precision and quality.",
    icon: <Calendar className="w-6 h-6 text-yellow-400" />,
  },
  {
    year: "2020 - 2022",
    title: "COVID-19 Recovery",
    description:
      "As the world recovers from the pandemic, we adapted our operations to meet new challenges and demands.",
    icon: <Calendar className="w-6 h-6 text-yellow-400" />,
  },
  {
    year: "2024",
    title: "#1 Hologram Manufacturer",
    description:
      "Orgalaser is recognized as the leading hologram manufacturer in Sri Lanka, setting industry standards for quality and innovation.",
    icon: <Calendar className="w-6 h-6 text-yellow-400" />,
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
      duration: 0.8,
    },
  },
};

const titleVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 10,
      duration: 0.6,
    },
  },
};

const descriptionVariants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 10,
      duration: 0.6,
      delay: 0.2,
    },
  },
};

const milestoneCardVariants = {
  hidden: {
    opacity: 0,
    x: -100,
    scale: 0.8,
  },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      delay: index * 0.2,
      duration: 0.8,
    },
  }),
  hover: {
    y: -8,
    scale: 1.05,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
    },
  },
};

const visionVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      delay: 0.8,
      duration: 0.6,
    },
  },
};

export default function About() {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center bg-gray-950/80 bg-[url('/images/about-bg.jpg')] bg-cover bg-center bg-no-repeat text-white bg-blend-overlay"
    >
      <div className="container mx-auto px-4 py-28 lg:py-28">
        {/* Header Section */}
        <motion.div
          className="mb-12 text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="mb-6 text-4xl font-bold lg:text-5xl"
            variants={titleVariants}
          >
            Welcome to{" "}
            <motion.span
              className="text-yellow-300"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
              viewport={{ once: true }}
            >
              Orgalaser
            </motion.span>
          </motion.h2>

          <motion.div
            className="mx-auto max-w-3xl"
            variants={descriptionVariants}
          >
            <p className="text-lg leading-relaxed text-gray-100 lg:text-xl">
              <motion.span
                className="rounded-xl border border-yellow-300/30 bg-yellow-300/10 p-1 font-semibold underline decoration-blue-400/90 transition-all duration-300 hover:bg-blue-400/50 hover:decoration-yellow-300/90"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(253, 224, 71, 0.2)",
                  transition: { duration: 0.2 },
                }}
              >
                Orgalaser
              </motion.span>{" "}
              specializes in laser cutting, CNC machining, and hologram labels
              in Sri Lanka. We deliver high-quality, precise solutions tailored
              to our clients' needs, backed by exceptional customer service.
              Experience innovation and creativity with Orgalaser.
            </p>
          </motion.div>
        </motion.div>

        {/* Milestones Grid */}
        <motion.div
          className="mx-auto max-w-7xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h3
            className="mb-12 text-center text-2xl font-semibold text-yellow-300 lg:text-3xl"
            variants={itemVariants}
          >
            Our Journey
          </motion.h3>

          {/* Desktop Timeline (horizontal) */}
          <div className="relative hidden md:block mb-16">
            {/* Timeline line */}
            <div className="absolute top-20 left-0 w-full h-0.5 bg-yellow-300/50" />

            {/* Milestones */}
            <div className="flex justify-between items-start px-4 pt-12 lg:px-8">
              {milestones.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={milestoneCardVariants}
                  className="relative flex-1 max-w-xs mx-2"
                >
                  {/* Icon node */}
                  <div className="flex justify-center mb-4">
                    <motion.div 
                      className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border-2 border-white/20 backdrop-blur-sm z-10 relative"
                      whileHover={{ 
                        scale: 1.15,
                        borderColor: "rgba(253, 224, 71, 0.5)",
                        backgroundColor: "rgba(253, 224, 71, 0.2)",
                        transition: { duration: 0.3 }
                      }}
                    >
                      {item.icon}
                    </motion.div>
                  </div>

                  {/* Card */}
                  <motion.div 
                    className="group rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 ease-in-out hover:border-yellow-300/50 hover:bg-yellow-300/20 hover:shadow-lg hover:shadow-yellow-300/20"
                    whileHover={{
                      scale: 1.05,
                    }}
                  >
                    <motion.h3 
                      className="text-xl font-bold text-yellow-300 mb-2 transition-colors duration-300 group-hover:text-white"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.year}
                    </motion.h3>
                    <p className="text-base font-semibold text-white mb-2 transition-colors duration-300 group-hover:text-yellow-100">
                      {item.title}
                    </p>
                    <p className="text-sm text-white/80 leading-relaxed transition-colors duration-300 group-hover:text-white/90">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline (vertical) */}
          <div className="relative md:hidden mb-16">
            {/* Vertical timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-yellow-300/50" />

            {/* Milestones */}
            <div className="space-y-8 px-4">
              {milestones.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={milestoneCardVariants}
                  className="relative flex items-start gap-6"
                >
                  {/* Icon node */}
                  <motion.div 
                    className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border-2 border-white/20 backdrop-blur-sm z-10 flex-shrink-0"
                    whileHover={{ 
                      scale: 1.15,
                      borderColor: "rgba(253, 224, 71, 0.5)",
                      backgroundColor: "rgba(253, 224, 71, 0.2)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    {item.icon}
                  </motion.div>

                  {/* Card */}
                  <motion.div 
                    className="group flex-1 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm transition-all duration-300 ease-in-out hover:border-yellow-300/50 hover:bg-yellow-300/20 hover:shadow-lg hover:shadow-yellow-300/20"
                    whileHover={{
                      scale: 1.02,
                    }}
                  >
                    <h3 className="text-lg font-bold text-yellow-300 mb-1 transition-colors duration-300 group-hover:text-white">
                      {item.year}
                    </h3>
                    <p className="text-base font-semibold text-white mb-2 transition-colors duration-300 group-hover:text-yellow-100">
                      {item.title}
                    </p>
                    <p className="text-sm text-white/80 leading-relaxed transition-colors duration-300 group-hover:text-white/90">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Vision Section */}
          <motion.div
            variants={visionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Flip />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
