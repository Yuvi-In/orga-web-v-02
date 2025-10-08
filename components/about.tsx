"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar } from "lucide-react";
import Flip from "./flip";

const milestones = [
  {
    date: "Oct 2011",
    title: "Founded company",
    description:
      "Orgalaser was established with a vision to revolutionize laser cutting in Sri Lanka.",
  },
  {
    date: "Aug 2018",
    title: "Expand as Production",
    description:
      "Established as the first production-based laser machining company in our state, known for precision and quality.",
  },
  {
    date: "Feb 2020 - Jan 2023",
    title: "COVID-19 Recovery",
    description:
      "As the world recovers from the pandemic, we adapted our operations to meet new challenges and demands.",
  },
  {
    date: "Jan 2024",
    title: "#1 Hologram Manufacturer",
    description:
      "Orgalaser is recognized as the leading hologram manufacturer in Sri Lanka, setting industry standards for quality and innovation.",
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
    y: 80,
    rotateX: -15,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      delay: index * 0.15,
      duration: 0.8,
    },
  }),
  hover: {
    y: -8,
    scale: 1.02,
    rotateX: 5,
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
      className="relative flex min-h-screen flex-col items-center justify-center bg-gray-950/80 bg-[url('/about-bg.jpg')] bg-cover bg-center bg-no-repeat text-white bg-blend-overlay"
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
            className="mb-8 text-center text-2xl font-semibold text-yellow-300 lg:text-3xl"
            variants={itemVariants}
          >
            Our Journey
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8"
            variants={containerVariants}
          >
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-yellow-300/30 hover:bg-white/10 hover:shadow-lg hover:shadow-yellow-300/20"
                variants={milestoneCardVariants}
                custom={index}
                whileHover="hover"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Date */}
                <motion.div
                  className="mb-4 flex items-center space-x-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <span className="flex items-center font-semibold text-yellow-300">
                    <motion.div
                      className="mr-2"
                      initial={{ rotate: -180, opacity: 0 }}
                      whileInView={{ rotate: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <Calendar className="h-4 w-4" />
                    </motion.div>
                    {item.date}
                  </span>
                  <motion.div
                    className="flex-1 border-t border-gray-600 group-hover:border-yellow-300/50"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: index * 0.1 + 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </motion.div>

                {/* Title */}
                <motion.h4
                  className="mb-3 text-lg font-bold text-white group-hover:text-yellow-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {item.title}
                </motion.h4>

                {/* Description */}
                <motion.p
                  className="text-sm leading-relaxed text-gray-300 group-hover:text-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {item.description}
                </motion.p>

                {/* Hover Effect Accent */}
                <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-r from-yellow-300/20 to-green-300/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Vision Section */}
          <Flip />
          
        </motion.div>
      </div>
    </section>
  );
}
