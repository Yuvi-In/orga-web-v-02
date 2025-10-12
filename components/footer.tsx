"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
      duration: 0.6,
    },
  },
};

type SocialLink = {
  href: string;
  icon: string;
  color: string;
  label: string;
};

const socialLinks: SocialLink[] = [
  {
    href: "https://api.whatsapp.com/send/?phone=94765281529",
    icon: "bi-whatsapp",
    color: "hover:text-green-400",
    label: "WhatsApp",
  },
  {
    href: "https://www.facebook.com/OrgalaserWedding1",
    icon: "bi-facebook",
    color: "hover:text-blue-400",
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/orgalaser/",
    icon: "bi-instagram",
    color: "hover:text-pink-400",
    label: "Instagram",
  },
  {
    href: "https://www.tiktok.com/@orgalaser",
    icon: "bi-tiktok",
    color: "hover:text-purple-400",
    label: "TikTok",
  },
];

type UsefulLink = {
  href: string;
  label: string;
};

const usefulLinks: UsefulLink[] = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About us" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative bg-gray-950/80 bg-[url('/images/footer-bg.jpg')] bg-cover bg-center bg-no-repeat text-white bg-blend-overlay"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/95 to-gray-950/80"></div>

      <motion.div
        className="footer-top relative z-10 py-16 lg:py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Company Info */}
            <motion.div
              className="footer-about"
              variants={itemVariants}
            >
              <Link
                href="/"
                className="group mb-6 flex items-center space-x-2 transition-all duration-300"
              >
                <motion.div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
                    src="/images/logo.png"
                    alt="Orgalaser Logo"
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain"
                  />
                </motion.div>
                <span className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-yellow-300">
                  Orgalaser
                </span>
              </Link>

              <div className="footer-contact space-y-3 text-gray-300">
                <motion.div
                  className="flex items-start space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <i className="bi bi-geo-alt-fill mt-1 text-yellow-400"></i>
                  <div>
                    <p>No. 61/1/B, Station Road,</p>
                    <p>Kandana, Sri Lanka 11320</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <i className="bi bi-telephone-fill text-green-400"></i>
                  <span>+94 11 223 6311</span>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <i className="bi bi-envelope-fill text-blue-400"></i>
                  <span>orgalaser@gmail.com</span>
                </motion.div>
              </div>

              <div className="mt-6 flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 ${social.color} hover:border-white/40 hover:bg-white/10 hover:shadow-lg`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <i className={`bi ${social.icon}`}></i>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Useful Links */}
            <motion.div className="footer-links" variants={itemVariants}>
              <h4 className="mb-6 text-xl font-semibold text-yellow-300">
                Main Links
              </h4>
              <ul className="space-y-3">
                {usefulLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <a
                      href={link.href}
                      className="group flex items-center space-x-2 text-gray-300 transition-colors duration-300 hover:text-yellow-300"
                    >
                      <i className="bi bi-chevron-right text-sm transition-transform duration-300 group-hover:translate-x-1"></i>
                      <span>{link.label}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Our Services */}
            <motion.div className="footer-links" variants={itemVariants}>
              <h4 className="mb-6 text-xl font-semibold text-sky-500">
                Our Services
              </h4>
              <ul className="space-y-3">
                {[
                  "Laser Cutting & Engraving",
                  "Wedding Invitations",
                  "Hologram Labels",
                  "CNC Machining",
                  "Digital Printing",
                ].map((service, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <a
                      href="#services"
                      className="group flex items-center space-x-2 text-gray-300 transition-colors duration-300 hover:text-sky-500"
                    >
                      <i className="bi bi-chevron-right text-sm transition-transform duration-300 group-hover:translate-x-1"></i>
                      <span>{service}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        className="relative z-10 w-full border-t border-white/10 bg-gray-950/50 py-6 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            © <span>Copyright {new Date().getFullYear()}</span>{" "}
            <strong className="px-1 text-yellow-300">Orgalaser Group</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
          <div className="mt-2 text-sm text-gray-400">
            Designed by{" "}
            <motion.a
              href="https://www.facebook.com/Yuvindu1.induwara"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 transition-colors duration-300 hover:text-blue-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Yuvindu Induwara
            </motion.a>{" "}
            {new Date().getFullYear()}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
