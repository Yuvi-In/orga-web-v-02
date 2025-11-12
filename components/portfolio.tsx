import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Eye } from "lucide-react";
import Image from 'next/image';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("*");

  const portfolioItems = [
    {
      id: 1,
      image: "/portfolio/portfolio-1.jpg",
      title: "Wedding Invitations",
      description: "Celebrate love with a beautiful wedding invitation!",
      category: "filter-app",
      link: "/laser-cutting/wedding-invitations.html",
    },
    {
      id: 2,
      image: "/portfolio/portfolio-4.jpg",
      title: "Wood CNC",
      description: "Precision wood CNC cutting and engraving services.",
      category: "filter-product",
      link: "/CNC/wood-cnc.html",
    },
    {
      id: 3,
      image: "/portfolio/portfolio-7.jpg",
      title: "Stock Hologram Labels",
      description:
        "Stock holograms offer a secure, cost-effective anti-counterfeiting solution.",
      category: "filter-branding",
      link: "/hologram",
    },
    {
      id: 4,
      image: "/portfolio/portfolio-2.jpg",
      title: "Souvenirs and Handicrafts",
      description:
        "Find unique handcrafted souvenirs that embody tradition and artistry.",
      category: "filter-app",
      link: "/laser-cutting/souvenirs-handicrafts.html",
    },
    {
      id: 5,
      image: "/portfolio/portfolio-5.jpg",
      title: "Acrylic CNC Engraving",
      description: "Precision acrylic cutting and engraving services.",
      category: "filter-product",
      link: "/CNC/acrylic-cnc.html",
    },
    {
      id: 6,
      image: "/portfolio/portfolio-8.jpg",
      title: "Customized Hologram Labels",
      description: "Custom holograms for brand authenticity.",
      category: "filter-branding",
      link: "/hologram.html",
    },
    {
      id: 7,
      image: "/portfolio/portfolio-3.jpg",
      title: "Leather Cutting & Marking",
      description:
        "We provide precise leather cutting and marking for detailed, high-quality designs.",
      category: "filter-app",
      link: "/laser-cutting/leather-craft.html",
    },
    {
      id: 8,
      image: "/portfolio/portfolio-6.jpg",
      title: "Sign Boards",
      description: "Boost brand visibility with sleek, durable acrylic signs.",
      category: "filter-product",
      link: "/CNC/sign-board.html",
    },
    {
      id: 9,
      image: "/portfolio/portfolio-9.jpg",
      title: "Hologram Labels",
      description: "More Hologram Labels",
      category: "filter-branding",
      link: "/hologram.html",
    },
  ];

  const filters = [
    { key: "*", label: "All" },
    { key: "filter-app", label: "Laser Cutting" },
    { key: "filter-product", label: "CNC" },
    { key: "filter-branding", label: "Hologram Labels" },
  ];

  const filteredItems =
    activeFilter === "*"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <motion.section
      id="portfolio"
      className="relative py-20 overflow-hidden bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 relative">
        <Image
          src="/images/portfolio-bg.jpg"
          alt="Portfolio Background"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-slate-900/90"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Section Title */}
        <motion.div
          className="container mx-auto px-4 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Portfolio
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Discover our innovative solutions across laser cutting, CNC machining, and holographic security
            </motion.p>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            ></motion.div>
          </div>
        </motion.div>

        <div className="container mx-auto px-4">
          {/* Portfolio Filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {filters.map((filter, index) => (
              <motion.button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-sm ${
                  activeFilter === filter.key
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 scale-105"
                    : "bg-white/10 text-white hover:bg-white/20 hover:text-cyan-300 border border-white/20"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Action Buttons Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <motion.button
                        className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-900 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Eye className="w-5 h-5" />
                      </motion.button>
                      <motion.a
                        href={item.link}
                        className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-900 hover:bg-cyan-500 hover:text-white transition-all duration-300 shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>

                {/* Animated Border */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-500"></div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredItems.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <p className="text-gray-300 text-lg mb-2">No items found</p>
                <p className="text-gray-400 text-sm">
                  Try selecting a different filter category
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
}