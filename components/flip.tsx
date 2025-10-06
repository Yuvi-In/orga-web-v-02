"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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

export default function Flip() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div className="mt-16 items-center justify-start lg:text-left">
      <motion.h3 className="mb-2 text-center text-2xl font-semibold text-white lg:text-3xl">
        Our
      </motion.h3>
      <motion.h3
        className="mb-8 cursor-pointer text-center text-2xl font-semibold transition-colors duration-300 lg:text-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true }}
        onClick={() => setIsFlipped(!isFlipped)}
        whileHover={{ scale: 1.02 }}
      >
        <motion.span
          id="vision"
          animate={{
            color: isFlipped ? "#ffffff" : "#fde047", // white when flipped, yellow when not
          }}
          transition={{ duration: 0.3 }}
          className="transition-opacity duration-200 hover:opacity-80"
        >
          Vision
        </motion.span>
        <span className="text-white"> & </span>
        <motion.span
          id="mission"
          animate={{
            color: isFlipped ? "#fde047" : "#ffffff", // yellow when flipped, white when not
          }}
          transition={{ duration: 0.3 }}
          className="transition-opacity duration-200 hover:opacity-80"
        >
          Mission
        </motion.span>
      </motion.h3>

      <div className="mt-16 grid grid-cols-1 gap-4 text-center md:grid-cols-2 lg:grid-cols-1 lg:gap-8">
        <motion.div
          className="relative cursor-pointer rounded-2xl border border-white/10 bg-gradient-to-tr from-yellow-300/20 to-gray-950/20 backdrop-blur-sm min-h-[300px] lg:min-h-[400px]"
          style={{
            perspective: "1000px",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={visionVariants}
          onClick={() => setIsFlipped(!isFlipped)}
          whileHover={{ scale: 1.02 }}
        >
          {/* Card Container with 3D Transform */}
          <motion.div
            className="relative h-full w-full"
            style={{
              transformStyle: "preserve-3d",
            }}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
          >
            {/* Front Side - Vision */}
            <motion.div
              className="absolute inset-0 rounded-2xl p-6 lg:px-16 lg:py-16 flex flex-col justify-center"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(0deg)",
              }}
            >
              <div className="flex h-full flex-col justify-center space-y-6">

                <motion.p
                  className="text-lg leading-relaxed text-gray-100 lg:text-left lg:text-3xl"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  To deliver innovative laser cutting, CNC machining, and hologram
                  solutions with unmatched quality and customer service.
                </motion.p>

                <motion.p
                  className="text-xs italic text-gray-400 lg:text-right lg:text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Click to flip for Mission...
                </motion.p>
              </div>
            </motion.div>

            {/* Back Side - Mission */}
            <motion.div
              className="absolute inset-0 rounded-2xl p-6 lg:px-16 lg:py-16 flex flex-col justify-center"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <div className="flex h-full flex-col justify-center space-y-6">

                <motion.p
                  className="text-lg leading-relaxed text-gray-100 lg:text-right lg:text-3xl"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{
                    opacity: isFlipped ? 1 : 0,
                    x: isFlipped ? 0 : -30,
                  }}
                  transition={{ delay: isFlipped ? 0.6 : 0, duration: 0.6 }}
                >
                  To be Sri Lanka's leading provider of precision manufacturing
                  solutions, combining cutting-edge technology with exceptional
                  craftsmanship to exceed our clients' expectations.
                </motion.p>

                <motion.p
                  className="text-xs italic text-gray-400 lg:text-left lg:text-sm"
                  animate={{
                    opacity: isFlipped ? 1 : 0,
                  }}
                  transition={{ delay: isFlipped ? 0.8 : 0, duration: 0.6 }}
                >
                  Click to flip back to Vision...
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          {/* Hover Effect Gradient */}
          <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-r from-yellow-300/20 to-sky-400/20 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
        </motion.div>
      </div>
    </motion.div>
  );
}
