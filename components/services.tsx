"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "🛡️",
    title: "Secure to your Brand",
    description:
      "Enhance the protection of your brand to ensure its integrity and reputation in the marketplace.",
    delay: 0.2,
  },
  {
    icon: "📈",
    title: "Increasing the value of the Product",
    description: "Using hologram labels can subtly enhance the value of your brand.",
    delay: 0.3,
  },
  {
    icon: "🎯",
    title: "Your product effectively reaches the audience",
    description:
      "Consumers appreciate hologram labels because they help them easily spot genuine products when shopping.",
    delay: 0.4,
  },
  {
    icon: "🔒",
    title: "Protect your Customers Trust",
    description:
      "Using hologram labels effectively helps build a strong customer base by establishing trust with them.",
    delay: 0.5,
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -60,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
      duration: 0.8,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    x: 60,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
      duration: 0.8,
      delay: 0.3,
    },
  },
};

const titleVariants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 10,
      duration: 0.6,
    },
  },
};

const featureCardVariants = {
  hidden: {
    opacity: 0,
    x: -80,
    rotateY: -15,
  },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      delay: index * 0.15,
      duration: 0.8,
    },
  }),
  hover: {
    x: 10,
    scale: 1.02,
    rotateY: 5,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
    },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative flex min-h-screen flex-col items-center justify-center bg-gray-950/80 bg-[url('/services-bg.jpg')] bg-cover bg-center bg-no-repeat text-white bg-blend-overlay"
    >
      <div className="container mx-auto px-4 py-28 lg:py-28">
        <motion.div
          className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Features Section */}
          <motion.div
            className="order-2 space-y-8 lg:order-1"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative flex items-start space-x-4 rounded-2xl border hover:border-hidden border-yellow-300/40 bg-white/5 p-6 backdrop-blur-sm transition-all"
                variants={featureCardVariants}
                custom={index}
                whileHover="hover"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Icon */}
                <motion.div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-yellow-300/20 text-2xl backdrop-blur-sm"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: index * 0.1 + 0.2,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 10,
                    transition: { duration: 0.2 },
                  }}
                >
                  {feature.icon}
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <motion.h4
                    className="mb-3 text-lg font-bold text-white group-hover:text-yellow-100 lg:text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {feature.title}
                  </motion.h4>
                  <motion.p
                    className="leading-relaxed text-gray-300 group-hover:text-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {feature.description}
                  </motion.p>
                </div>

                {/* Hover Effect Accent */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-300/20 to-blue-300/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="order-1 flex flex-col justify-center space-y-8 lg:order-2"
            variants={containerVariants}
          >
            {/* Header */}
            <div className="text-center lg:text-left">
              <motion.h2
                className="mb-4 text-4xl font-bold lg:text-5xl"
                variants={titleVariants}
              >
                What are the{" "}
                <motion.span
                  className="text-yellow-300"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.3,
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                  }}
                  viewport={{ once: true }}
                >
                  outcomes
                </motion.span>
              </motion.h2>

              <motion.p
                className="text-lg italic text-gray-300 lg:text-xl"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                when you use hologram labels in your products...
              </motion.p>
            </div>

            {/* Image */}
            <motion.div
              className="relative overflow-hidden rounded-2xl"
              variants={imageVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src="/services-bg.jpg"
                alt="Hologram Features"
                className="h-auto w-full rounded-2xl object-cover shadow-2xl"
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              />

              {/* Image Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                viewport={{ once: true }}
              />

              {/* Floating Badge */}
              <motion.div
                className="absolute bottom-4 right-4 rounded-full bg-yellow-300/70 border border-yellow-400/90 px-4 py-2 text-sm font-semibold text-black backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.9,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 },
                }}
              >
                ✨ Premium Quality
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              {(
                [
                  { number: "100%", label: "Authentic" },
                  { number: "24/7", label: "Protection" },
                  { number: "∞", label: "Trust" },
                ] as const
              ).map((stat, index) => (
                <motion.div
                  key={index}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.div
                    className="text-2xl font-bold text-yellow-300"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      delay: index * 0.1 + 0.8,
                      duration: 0.5,
                      type: "spring",
                    }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <motion.div
                    className="text-sm text-gray-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.9, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}