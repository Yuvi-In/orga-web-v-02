"use client";

import { motion } from "framer-motion";
import { Flag, Briefcase, Users, Award, Rocket } from "lucide-react";

export default function MilestoneRoadmapHorizontal() {
  const milestones = [
    {
      year: "2010",
      title: "Founded Orgalaser Hologram Pvt. Ltd.",
      description:
        "Our journey began with a vision to bring innovation and security to holographic technology.",
      icon: <Flag className="w-8 h-8 text-yellow-400" />,
    },
    {
      year: "2014",
      title: "Expanded Production Capabilities",
      description:
        "Introduced advanced laser engraving and hologram manufacturing facilities in Sri Lanka.",
      icon: <Briefcase className="w-8 h-8 text-yellow-400" />,
    },
    {
      year: "2017",
      title: "Crossed 100+ Client Milestone",
      description:
        "Became the trusted partner of major Sri Lankan industries, including tea and wedding sectors.",
      icon: <Users className="w-8 h-8 text-yellow-400" />,
    },
    {
      year: "2021",
      title: "Recognized for Quality & Innovation",
      description:
        "Achieved national recognition for producing high-precision holograms and smart security labels.",
      icon: <Award className="w-8 h-8 text-yellow-400" />,
    },
    {
      year: "2025",
      title: "Expanding into Robotics & Smart Tech",
      description:
        "Integrating robotics, hologram technology, and smart labeling for next-generation solutions.",
      icon: <Rocket className="w-8 h-8 text-yellow-400" />,
    },
  ];

  return (
    <section className="bg-white py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-16">
          Our Milestone Roadmap
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-yellow-400 transform -translate-y-1/2" />

          {/* Milestones */}
          <div className="flex flex-nowrap justify-between items-center overflow-x-auto scrollbar-hide space-x-8 md:space-x-12 px-4">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex-shrink-0 w-64"
              >
                {/* Icon node */}
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-900 border-4 border-yellow-400">
                    {item.icon}
                  </div>
                </div>

                {/* Card */}
                <div className="bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                  <h3 className="text-lg font-semibold text-blue-900">
                    {item.year}
                  </h3>
                  <p className="text-md font-medium text-gray-800 mt-1">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
