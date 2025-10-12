import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Sparkles, Zap } from 'lucide-react'

export default function CallTo() {
    return (
        <motion.section
            id="call-to-action"
            className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Enhanced Background with Multiple Layers */}
            <div className="absolute inset-0">
                <img 
                    src="/images/about.gif" 
                    className="w-full h-full object-cover opacity-40" 
                    alt="Background" 
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/80 to-indigo-900/95"></div>
                
                {/* Geometric Pattern Overlay */}
                <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                            </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#grid)" className="text-white" />
                    </svg>
                </div>
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Large Floating Elements */}
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={`large-${i}`}
                        className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-400/10 backdrop-blur-sm"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            x: [0, 50, -30, 0],
                            y: [0, -30, 20, 0],
                            scale: [1, 1.2, 0.8, 1],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: 15 + Math.random() * 10,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
                
                {/* Small Sparkle Effects */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={`sparkle-${i}`}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4">
                <motion.div
                    className="max-w-5xl mx-auto text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Icon Header */}
                    <motion.div
                        className="flex justify-center mb-8"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/25">
                                <Sparkles className="w-10 h-10 text-white" />
                            </div>
                            <motion.div
                                className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            >
                                <Zap className="w-3 h-3 text-yellow-900" />
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.h3 
                        className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Follow Us On
                    </motion.h3>

                    <motion.p 
                        className="text-xl md:text-2xl text-blue-100/90 leading-relaxed mb-12 max-w-4xl mx-auto font-light"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Follow <span className="font-semibold text-cyan-300">Orgalaser</span> for cutting-edge innovations in laser technology! 
                        We specialize in <span className="text-blue-200">high-precision solutions</span> that drive efficiency, 
                        performance, and reliability. Stay connected for the latest 
                        advancements, expert insights, and exclusive updates from the 
                        world of laser engineering!
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <motion.a 
                            href="#contact"
                            className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl shadow-blue-500/25 transition-all duration-300 overflow-hidden"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {/* Button Background Animation */}
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            <span className="relative z-10 flex items-center">
                                Get In Touch
                                <ArrowRight className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                            
                            {/* Shine Effect */}
                            <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        </motion.a>

                        <motion.a 
                            href="#services"
                            className="group relative inline-flex items-center px-10 py-5 bg-transparent border-2 border-cyan-400/50 text-cyan-100 font-semibold rounded-full hover:bg-cyan-400/10 hover:border-cyan-300 backdrop-blur-sm transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="flex items-center">
                                Our Services
                                <ExternalLink className="w-5 h-5 ml-3 transform group-hover:translate-x-1 group-hover:rotate-12 transition-all duration-300" />
                            </span>
                        </motion.a>
                    </motion.div>

                    {/* Trusted By Section */}
                    <motion.div
                        className="mt-20 mb-20 pt-12 border-t border-blue-900/30 overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <p className="text-blue-200/70 text-sm uppercase tracking-wider mb-8 font-medium">
                            Trusted by Industry Leaders
                        </p>
                        
                        {/* Horizontal Scrolling Logos */}
                        <div className="relative">
                            {/* Gradient Overlays */}
                            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"></div>
                            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"></div>
                            
                            {/* Scrolling Container */}
                            <div className="flex">
                                <motion.div
                                    className="flex gap-12 pr-12"
                                    animate={{
                                        x: [0, -1800],
                                    }}
                                    transition={{
                                        x: {
                                            repeat: Infinity,
                                            repeatType: "loop",
                                            duration: 30,
                                            ease: "linear",
                                        },
                                    }}
                                >
                                    {/* First set of logos */}
                                    {[
                                        { name: "Client 1", logo: "/clients/slon.svg" },
                                        { name: "Client 2", logo: "/clients/finlays.png" },
                                        { name: "Client 3", logo: "/clients/ctl.png" },
                                        { name: "Client 4", logo: "/clients/acl.png" },
                                        { name: "Client 5", logo: "/clients/samudra.png" },
                                        { name: "Client 6", logo: "/clients/cic.webp" },
                                        { name: "Client 7", logo: "/clients/amw.png" },
                                        { name: "Client 8", logo: "/clients/empireteas.webp" },
                                        { name: "Client 9", logo: "/clients/ics.png" },
                                        { name: "Client 10", logo: "/clients/cbm.png" },
                                    ].map((client, index) => (
                                        <div
                                            key={`logo-1-${index}`}
                                            className="group relative flex-shrink-0 w-40 h-24 flex items-center justify-center"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <img
                                                src={client.logo}
                                                alt={client.name}
                                                className="relative z-10 w-full h-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                    const fallback = e.currentTarget.parentElement?.querySelector('.fallback');
                                                    if (fallback) fallback.classList.remove('hidden');
                                                }}
                                            />
                                            <div className="fallback hidden relative z-10 w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-lg border border-blue-700/30 backdrop-blur-sm">
                                                <span className="text-blue-300 font-semibold text-sm">{client.name}</span>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                                
                                {/* Duplicate set for seamless loop */}
                                <motion.div
                                    className="flex gap-12 pr-12"
                                    animate={{
                                        x: [0, -1800],
                                    }}
                                    transition={{
                                        x: {
                                            repeat: Infinity,
                                            repeatType: "loop",
                                            duration: 30,
                                            ease: "linear",
                                        },
                                    }}
                                >
                                    {[
                                        { name: "Client 1", logo: "/clients/slon.svg" },
                                        { name: "Client 2", logo: "/clients/finlays.png" },
                                        { name: "Client 3", logo: "/clients/ctl.png" },
                                        { name: "Client 4", logo: "/clients/acl.png" },
                                        { name: "Client 5", logo: "/clients/samudra.png" },
                                        { name: "Client 6", logo: "/clients/cic.webp" },
                                        { name: "Client 7", logo: "/clients/amw.png" },
                                        { name: "Client 8", logo: "/clients/empireteas.webp" },
                                        { name: "Client 9", logo: "/clients/ics.png" },
                                        { name: "Client 10", logo: "/clients/cbm.png" },
                                    ].map((client, index) => (
                                        <div
                                            key={`logo-2-${index}`}
                                            className="group relative flex-shrink-0 w-40 h-24 flex items-center justify-center"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <img
                                                src={client.logo}
                                                alt={client.name}
                                                className="relative z-10 w-full h-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                    const fallback = e.currentTarget.parentElement?.querySelector('.fallback');
                                                    if (fallback) fallback.classList.remove('hidden');
                                                }}
                                            />
                                            <div className="fallback hidden relative z-10 w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-lg border border-blue-700/30 backdrop-blur-sm">
                                                <span className="text-blue-300 font-semibold text-sm">{client.name}</span>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Decorative Elements */}
                    <motion.div 
                        className="flex justify-center space-x-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                                animate={{ 
                                    scale: [1, 1.5, 1],
                                    opacity: [0.4, 1, 0.4],
                                    background: [
                                        "linear-gradient(to right, #60a5fa, #22d3ee)",
                                        "linear-gradient(to right, #22d3ee, #60a5fa)",
                                        "linear-gradient(to right, #60a5fa, #22d3ee)"
                                    ]
                                }}
                                transition={{ 
                                    duration: 2,
                                    delay: i * 0.2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    )
}