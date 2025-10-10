"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function ContactUs() {
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["No: 61/1/B Station Road", "Kandana, Sri Lanka, 11320"],
      color: "blue",
      delay: 0.1,
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+94 11 223 6311", "+94 11 223 6853", "+94 71 652 0030", "+94 71 947 1408"],
      color: "emerald",
      delay: 0.2,
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["orgalaser@gmail.com", "orgalaser.hologram@gmail.com"],
      color: "purple",
      delay: 0.3,
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
      emerald: {
        bg: "from-emerald-500 to-emerald-600",
        light: "bg-emerald-500/10",
        text: "text-emerald-400",
        border: "border-emerald-500/20",
        glow: "group-hover:shadow-emerald-500/30",
      },
      purple: {
        bg: "from-purple-500 to-purple-600",
        light: "bg-purple-500/10",
        text: "text-purple-400",
        border: "border-purple-500/20",
        glow: "group-hover:shadow-purple-500/30",
      },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("loading");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 2000);
  };

  return (
    <motion.section
      id="contact"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Geometric Shapes */}
        {[...Array(6)].map((_, i) => (
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
              <pattern id="contact-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#contact-grid)" className="text-blue-400" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6 border border-blue-500/20 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MessageSquare className="w-4 h-4" />
            Get In Touch
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Contact Us
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Have a question or want to work together? We'd love to hear from you!
          </motion.p>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        {/* Google Maps */}
        <motion.div
          className="mb-12 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative">
              <iframe
                style={{ border: 0, width: "100%", height: "400px" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.6703583098556!2d79.89598237591241!3d7.047967592954241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f74023bc0605%3A0xad198ecb82b0d132!2sOrgalaser%20Cutting!5e0!3m2!1sen!2slk!4v1733494252926!5m2!1sen!2slk"
                suppressHydrationWarning
                className="rounded-2xl"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            const colors = getColorClasses(info.color);

            return (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: info.delay,
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

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {info.title}
                  </h3>

                  {/* Details */}
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-400 leading-relaxed">
                        {detail}
                      </p>
                    ))}
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

        {/* Contact Form */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Your Message"
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 resize-none"
                  />
                </motion.div>

                {/* Status Messages */}
                {formStatus === "loading" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-blue-400 py-2"
                  >
                    Sending your message...
                  </motion.div>
                )}

                {formStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center text-emerald-400 py-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20"
                  >
                    Your message has been sent. Thank you!
                  </motion.div>
                )}

                {formStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center text-red-400 py-2 bg-red-500/10 rounded-xl border border-red-500/20"
                  >
                    Something went wrong. Please try again.
                  </motion.div>
                )}

                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.button
                    type="submit"
                    disabled={formStatus === "loading"}
                    className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}