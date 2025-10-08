import { motion } from "framer-motion"
import { Zap, PenTool, Shield, ChevronRight, Star, ArrowUpRight } from 'lucide-react'

export default function Services() {
    const services = [
        {
            icon: PenTool,
            title: "Laser Cutting & Engraving",
            description: "Orgalaser Hologram Pvt. Ltd. offers precision laser cutting and engraving for customized products. We ensure quick turnaround times for wedding invitations, signage, gifts, and prototypes. Trust us for your laser solutions.",
            features: ["Precision Cutting", "Custom Designs", "Quick Turnaround"],
            delay: "100",
            color: "blue"
        },
        {
            icon: Zap,
            title: "CNC Machining",
            description: "Orgalaser Hologram Pvt. Ltd. provides high-quality CNC machining solutions, including cutting, milling, drilling, prototyping, and custom manufacturing for various materials.",
            features: ["Multi-Material", "High Precision", "Custom Manufacturing"],
            delay: "300",
            color: "purple"
        },
        {
            icon: Shield,
            title: "Hologram Labels",
            description: "Orgalaser Hologram Pvt. Ltd. provides secure, customizable hologram labels to protect brands and products from counterfeiting across various industries.",
            features: ["Anti-Counterfeiting", "Brand Protection", "Industry Solutions"],
            delay: "400",
            color: "emerald"
        }
    ];

    const getColorClasses = (color: string) => {
        const colors = {
            blue: {
                bg: "from-blue-500 to-blue-600",
                light: "bg-blue-500/10",
                text: "text-blue-400",
                hover: "group-hover:bg-blue-600",
                border: "border-blue-500/20",
                shadow: "shadow-blue-500/10",
                glow: "group-hover:shadow-blue-500/30"
            },
            purple: {
                bg: "from-purple-500 to-purple-600",
                light: "bg-purple-500/10",
                text: "text-purple-400",
                hover: "group-hover:bg-purple-600",
                border: "border-purple-500/20",
                shadow: "shadow-purple-500/10",
                glow: "group-hover:shadow-purple-500/30"
            },
            emerald: {
                bg: "from-emerald-500 to-emerald-600",
                light: "bg-emerald-500/10",
                text: "text-emerald-400",
                hover: "group-hover:bg-emerald-600",
                border: "border-emerald-500/20",
                shadow: "shadow-emerald-500/10",
                glow: "group-hover:shadow-emerald-500/30"
            }
        };
        return colors[color as keyof typeof colors] || colors.blue;
    };

    return (
        <motion.section 
            id="services" 
            className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <img 
                        src="/service-bg.gif" 
                        className="w-full h-full object-cover opacity-90" 
                        alt="Services Background" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-gray-900/90 to-slate-800/95"></div>
                </div>

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
                            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                            </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#grid)" className="text-blue-400" />
                    </svg>
                </div>
            </div>

            <div className="relative z-10">
                {/* Enhanced Section Title */}
                <motion.div 
                    className="container mx-auto px-4 mb-20"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center">
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6 border border-blue-500/20 backdrop-blur-sm"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Star className="w-4 h-4" />
                            Our Premium Services
                        </motion.div>

                        <motion.h2 
                            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Our Services
                        </motion.h2>

                        <motion.p 
                            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Discover our comprehensive range of cutting-edge solutions designed to bring your vision to life with precision and excellence
                        </motion.p>

                        <motion.div 
                            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: 128 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        ></motion.div>
                    </div>
                </motion.div>

                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            const colors = getColorClasses(service.color);
                            
                            return (
                                <motion.div
                                    key={index}
                                    className="group"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: parseInt(service.delay) / 1000, duration: 0.5 }}
                                    whileHover={{ y: -8 }}
                                >
                                    <div className={`relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl ${colors.shadow} hover:shadow-2xl ${colors.glow} transition-all duration-500 transform h-full flex flex-col border ${colors.border} overflow-hidden`}>
                                        {/* Background Pattern */}
                                        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                                            <div className={`w-full h-full bg-gradient-to-br ${colors.bg} rounded-full transform translate-x-16 -translate-y-16`}></div>
                                        </div>

                                        {/* Icon Section */}
                                        <div className="relative mb-6">
                                            <motion.div 
                                                className={`w-20 h-20 ${colors.light} rounded-2xl flex items-center justify-center mb-6 ${colors.hover} transition-all duration-300 shadow-lg border ${colors.border}`}
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                            >
                                                <IconComponent className={`w-10 h-10 ${colors.text} group-hover:text-white transition-colors duration-300`} />
                                            </motion.div>

                                            <h3 className={`text-2xl font-bold text-white mb-4 group-hover:${colors.text} transition-colors duration-300`}>
                                                {service.title}
                                            </h3>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-300 leading-relaxed flex-grow mb-6 text-sm">
                                            {service.description}
                                        </p>

                                        {/* Features List */}
                                        <div className="mb-6">
                                            <h4 className="text-sm font-semibold text-gray-200 mb-3">Key Features:</h4>
                                            <ul className="space-y-2">
                                                {service.features.map((feature, featureIndex) => (
                                                    <motion.li
                                                        key={featureIndex}
                                                        className="flex items-center text-sm text-gray-400"
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: (parseInt(service.delay) / 1000) + (featureIndex * 0.1) }}
                                                    >
                                                        <div className={`w-2 h-2 bg-gradient-to-r ${colors.bg} rounded-full mr-3 flex-shrink-0`}></div>
                                                        {feature}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* CTA Button */}
                                        <div className="mt-auto">
                                            <motion.a 
                                                href="#contact" 
                                                className={`group/btn inline-flex items-center ${colors.text} font-semibold hover:text-white transition-all duration-300 relative overflow-hidden px-6 py-3 rounded-xl border ${colors.border} hover:border-transparent backdrop-blur-sm`}
                                                whileHover={{ scale: 1.02 }}
                                            >
                                                <div className={`absolute inset-0 bg-gradient-to-r ${colors.bg} transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left`}></div>
                                                <span className="relative z-10 flex items-center">
                                                    Learn More
                                                    <ArrowUpRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                                                </span>
                                            </motion.a>
                                        </div>

                                        {/* Hover Effect Border */}
                                        <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${colors.bg} group-hover:w-full transition-all duration-500`}></div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom CTA Section */}
                <motion.div
                    className="container mx-auto px-4 mt-20 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl p-8 text-white border border-blue-500/20 backdrop-blur-sm">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Transform Your Ideas?
                        </h3>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            Let's discuss your project and find the perfect solution for your needs
                        </p>
                        <motion.a
                            href="#contact"
                            className="inline-flex items-center px-8 py-4 bg-white/10 text-white border border-white/20 font-semibold rounded-full hover:bg-white/20 backdrop-blur-sm transition-all duration-300 shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Started Today
                            <ChevronRight className="w-5 h-5 ml-2" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}