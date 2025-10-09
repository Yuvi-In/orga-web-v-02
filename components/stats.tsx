"use client";

import { motion } from "framer-motion";
import { Building2, FileText, Users, Hammer, TrendingUp } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: Building2,
      value: "14",
      label: "Years of dedicated service",
      description: "is a remarkable milestone worth celebrating.",
      color: "blue",
      delay: 0.1,
    },
    {
      icon: FileText,
      value: "1020",
      label: "We have accomplished",
      description: "a remarkable Projects under OneRoof!",
      color: "purple",
      delay: 0.2,
    },
    {
      icon: Users,
      value: "453",
      label: "Clients entrusting",
      description: "their partnership with us",
      color: "emerald",
      delay: 0.3,
    },
    {
      icon: Hammer,
      value: "15",
      label: "Hard Workers",
      description: "delivers precision, innovation, and quality products.",
      color: "yellow",
      delay: 0.4,
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "from-blue-500 to-blue-600",
        light: "bg-blue-500/10",
        text: "text-blue-400",
        border: "border-blue-500/20",
        glow: "group-hover:shadow-blue-500/30",
      },
      purple: {
        bg: "from-purple-500 to-purple-600",
        light: "bg-purple-500/10",
        text: "text-purple-400",
        border: "border-purple-500/20",
        glow: "group-hover:shadow-purple-500/30",
      },
      emerald: {
        bg: "from-emerald-500 to-emerald-600",
        light: "bg-emerald-500/10",
        text: "text-emerald-400",
        border: "border-emerald-500/20",
        glow: "group-hover:shadow-emerald-500/30",
      },
      yellow: {
        bg: "from-yellow-500 to-yellow-600",
        light: "bg-yellow-500/10",
        text: "text-yellow-400",
        border: "border-yellow-500/20",
        glow: "group-hover:shadow-yellow-500/30",
      },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <motion.section
      id="stats"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Geometric Shapes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="stats-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#stats-grid)" className="text-blue-400" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <motion.div
                  className="flex items-center gap-3 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <TrendingUp className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
                    Excellence in Numbers
                  </h3>
                </motion.div>

                <motion.h4
                  className="text-2xl font-bold text-white mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  We are honored to serve high-quality and distinguished products.
                </motion.h4>

                <motion.p
                  className="text-lg text-gray-300 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  We are delighted to provide you with outstanding products that not only meet the highest quality standards but also elevate your experience. Our commitment to excellence is what sets us apart, and we invite you to discover the difference for yourself!
                </motion.p>

                <motion.div
                  className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-6 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 128 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              const colors = getColorClasses(stat.color);

              return (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: stat.delay,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div
                    className={`relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl ${colors.glow} transition-all duration-500 border ${colors.border} overflow-hidden h-full`}
                  >
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                      <div className={`w-full h-full bg-gradient-to-br ${colors.bg} rounded-full transform translate-x-12 -translate-y-12`} />
                    </div>

                    {/* Icon */}
                    <motion.div
                      className={`relative w-16 h-16 ${colors.light} rounded-xl flex items-center justify-center mb-4 shadow-lg border ${colors.border}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <IconComponent className={`w-8 h-8 ${colors.text} group-hover:text-white transition-colors duration-300`} />
                    </motion.div>

                    {/* Value */}
                    <motion.div
                      className={`text-5xl font-bold mb-3 bg-gradient-to-r ${colors.bg} bg-clip-text text-transparent`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: stat.delay + 0.2, type: "spring", stiffness: 200 }}
                    >
                      {stat.value}+
                    </motion.div>

                    {/* Label and Description */}
                    <div className="relative">
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                        {stat.label}
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {stat.description}
                      </p>
                    </div>

                    {/* Hover Effect Line */}
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.bg}`}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
