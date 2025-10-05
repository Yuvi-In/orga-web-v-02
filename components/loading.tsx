"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-950/90 text-white z-50">
      {/* Animated Logo or Circle */}
      <motion.div
        className="w-16 h-16 border-4 border-t-transparent border-yellow-500 rounded-full animate-spin"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      {/* Loading Text */}
      <motion.p
        className="mt-6 text-lg font-semibold tracking-wide text-white animate-pulse"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Loading...
      </motion.p>
    </div>
  );
}
