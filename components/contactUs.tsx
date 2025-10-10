"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Sparkles } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Office",
    description: "No: 61/1/B Station Road, Kandana, Sri Lanka, 11320",
    delay: 0.2,
  },
  {
    icon: Phone,
    title: "Call Us Anytime",
    description: "+94 11 223 6311 • +94 11 223 6853 • +94 71 652 0030 • +94 71 947 1408",
    delay: 0.3,
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "orgalaser@gmail.com • orgalaser.hologram@gmail.com",
    delay: 0.4,
  },
];

// Animation variants (matching outcomes.tsx)
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

export default function ContactUs() {
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("loading");

    try {
      // Replace this with your actual API endpoint or email service
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        // Reset form element
        e.currentTarget.reset();
        // Reset status after 5 seconds
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="relative flex min-h-screen flex-col items-center justify-center bg-gray-950/80 bg-[url('/footer-bg.jpg')] bg-cover bg-center bg-no-repeat text-white bg-blend-overlay"
    >
      <div className="container mx-auto px-4 py-28 lg:py-28">
        <motion.div
          className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Contact Info Cards Section (Left Side) */}
          <motion.div
            className="order-2 space-y-8 lg:order-1"
            variants={containerVariants}
          >
            {contactInfo.map((info, index) => (
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
                  <info.icon className="h-6 w-6 text-yellow-300" />
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
                    {info.title}
                  </motion.h4>
                  <motion.p
                    className="leading-relaxed text-gray-300 group-hover:text-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {info.description}
                  </motion.p>
                </div>

                {/* Hover Effect Accent */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-300/20 to-blue-300/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form & Map Section (Right Side) */}
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
                Let's{" "}
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
                  Connect
                </motion.span>
              </motion.h2>

              <motion.p
                className="text-lg italic text-gray-300 lg:text-xl"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                We'd love to hear from you. Let's talk!
              </motion.p>
            </div>

            {/* Google Map */}
            <motion.div
              className="relative overflow-hidden rounded-2xl"
              variants={imageVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <iframe
                  style={{ border: 0, width: "100%", height: "300px" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.6703583098556!2d79.89598237591241!3d7.047967592954241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f74023bc0605%3A0xad198ecb82b0d132!2sOrgalaser%20Cutting!5e0!3m2!1sen!2slk!4v1733494252926!5m2!1sen!2slk"
                  suppressHydrationWarning
                  className="rounded-2xl shadow-2xl"
                  loading="lazy"
                />
              </motion.div>

              {/* Map Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                viewport={{ once: true }}
              />

              {/* Floating Badge */}
              <motion.div
                className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-yellow-300/70 border border-yellow-400/90 px-4 py-2 text-sm font-semibold text-black backdrop-blur-sm"
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
                <Sparkles className="h-4 w-4" />
                Visit Us
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    minLength={2}
                    className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all focus:border-yellow-300/50 focus:outline-none focus:ring-2 focus:ring-yellow-300/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    viewport={{ once: true }}
                  />
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all focus:border-yellow-300/50 focus:outline-none focus:ring-2 focus:ring-yellow-300/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    viewport={{ once: true }}
                  />
                </div>

                <motion.input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  required
                  minLength={3}
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all focus:border-yellow-300/50 focus:outline-none focus:ring-2 focus:ring-yellow-300/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                  viewport={{ once: true }}
                />

                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Your Message"
                  required
                  minLength={10}
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all focus:border-yellow-300/50 focus:outline-none focus:ring-2 focus:ring-yellow-300/20 resize-none"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  viewport={{ once: true }}
                />

                {/* Status Messages */}
                {formStatus === "loading" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="flex items-center justify-center gap-2 text-yellow-300 bg-yellow-300/10 border border-yellow-300/20 rounded-xl py-3"
                  >
                    <div className="w-5 h-5 border-2 border-yellow-300 border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending your message...</span>
                  </motion.div>
                )}

                {formStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center text-green-400 bg-green-400/10 border border-green-400/20 rounded-xl py-3"
                  >
                    ✓ Your message has been sent successfully! We'll get back to you soon.
                  </motion.div>
                )}

                {formStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl py-3"
                  >
                    ✗ Oops! Something went wrong. Please try again later.
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={formStatus === "loading"}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-300 px-6 py-3 font-semibold text-black transition-all hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-300/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}