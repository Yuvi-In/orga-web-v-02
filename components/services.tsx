import { motion } from "framer-motion"

export default function Services() {
    const services = [
        {
            icon: "bi bi-vector-pen",
            title: "Laser Cutting & Engraving",
            description: "Orgalaser Hologram Pvt. Ltd. offers precision laser cutting and engraving for customized products. We ensure quick turnaround times for wedding invitations, signage, gifts, and prototypes. Trust us for your laser solutions.",
            delay: "100"
        },
        {
            icon: "bi bi-nut",
            title: "CNC",
            description: "Orgalaser Hologram Pvt. Ltd. provides high-quality CNC machining solutions, including cutting, milling, drilling, prototyping, and custom manufacturing for various materials.",
            delay: "300"
        },
        {
            icon: "bi bi-file-lock",
            title: "Hologram Labels",
            description: "Orgalaser Hologram Pvt. Ltd. provides secure, customizable hologram labels to protect brands and products from counterfeiting across various industries.",
            delay: "400"
        }
    ];

    return (
        <motion.section 
            id="services" 
            className="py-16 bg-gray-100 bg-[url('/service-bg.gif')] bg-cover bg-center bg-no-repeat bg-blend-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Section Title */}
            <motion.div 
                className="container mx-auto px-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Services
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Check our Services
                    </p>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
                </div>
            </motion.div>
            {/* End Section Title */}

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: parseInt(service.delay) / 1000, duration: 0.5 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                                <div className="mb-6">
                                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                                        <i className={`${service.icon} text-3xl text-blue-600 group-hover:text-white transition-colors duration-300`}></i>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed flex-grow">
                                    {service.description}
                                </p>
                                <div className="mt-6">
                                    <a 
                                        href="#services" 
                                        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300"
                                    >
                                        Learn More
                                        <svg 
                                            className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}