import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHotel, FaGlobeAmericas, FaHandshake, FaAward, FaUsers, FaHeart, FaKey, FaShieldAlt } from 'react-icons/fa';
const AboutUs = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        return () => setIsVisible(false);
    }, []);

    // User details object
    const userDetails = {
        teamMembers: [
            {
                id: 1,
                name: 'Alexandra Chen',
                role: 'CEO & Founder',
                bio: 'Hospitality visionary with 15+ years in travel tech. Founded our platform to simplify hotel bookings worldwide.',
                img: 'https://d22e6o9mp4t2lx.cloudfront.net/cms/Screenshot_2024_04_05_130256_473f8428ec.png',
                link: 'https://coderaklinks.ccbp.tech/'
            },
            {
                id: 2,
                name: 'James Rodriguez',
                role: 'Chief Technology Officer',
                bio: 'Leads our engineering team in building secure, scalable booking infrastructure. Former lead architect at major travel platform.',
                img: 'https://d22e6o9mp4t2lx.cloudfront.net/cms/Screenshot_2024_04_05_130256_473f8428ec.png',
                link: 'https://coderaklinks.ccbp.tech/'
            },
            {
                id: 3,
                name: 'Sarah Johnson',
                role: 'Head of Partnerships',
                bio: 'Connects travelers with the best hotels globally. 10+ years forging hotel relationships across 50+ countries.',
                img: 'https://d22e6o9mp4t2lx.cloudfront.net/cms/Screenshot_2024_04_05_130256_473f8428ec.png',
                link: 'https://coderaklinks.ccbp.tech/'
            }
        ],
        stats: [
            { value: '10,000+', label: 'Hotels Worldwide', icon: <FaHotel /> },
            { value: '2M+', label: 'Happy Travelers', icon: <FaUsers /> },
            { value: '50+', label: 'Countries Covered', icon: <FaGlobeAmericas /> },
            { value: '24/7', label: 'Customer Support', icon: <FaHandshake /> }
        ],
        values: [
            {
                title: "Transparency",
                description: "No hidden fees, no surprises - just honest pricing and clear information.",
                icon: <FaAward className="text-blue-600 text-3xl" />,
            },
            {
                title: "Innovation",
                description: "Continuously improving our platform to deliver the best booking experience.",
                icon: <FaGlobeAmericas className="text-blue-600 text-3xl" />,
            },
            {
                title: "Customer Focus",
                description: "Your satisfaction is our top priority at every step of the journey.",
                icon: <FaHeart className="text-blue-600 text-3xl" />,
            },
            {
                title: "Secure Booking",
                description: "Your data is protected with the latest security measures, ensuring a safe transaction.",
                icon: <FaShieldAlt className="text-blue-600 text-3xl" />,
            },
            {
                title: "Best Value",
                description: "We offer competitive prices and exclusive deals to make your stay affordable.",
                icon: <FaKey className="text-blue-600 text-3xl" />,
            },
            {
                title: "Community Driven",
                description: "Read genuine reviews from fellow travelers to help you make the best choice.",
                icon: <FaUsers className="text-blue-600 text-3xl" />,
            },
        ]
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="min-h-screen bg-gradient-to-b from-blue-50 to-white"
        >
            {/* Hero Section */}
            <div className="relative mt-10 py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-blue-900 text-white overflow-hidden">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="relative z-10 max-w-7xl mx-auto text-center"
                >
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">Our Story</h1>
                    <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
                        Revolutionizing hotel bookings with technology and passion
                    </p>
                </motion.div>
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="absolute inset-0 bg-[url('https://cdnb.artstation.com/p/assets/images/images/030/560/705/large/ryan-wai-kin-lam-w070-hotelroom01-v001-2k.jpg?1600963982')] bg-cover bg-center object-cover w-full h-full "></div>
            </div>

            {/* Mission Section */}
            <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-12 grid md:grid-cols-2 gap-6 md:gap-8 items-center"
                >
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-6">Our Mission</h2>
                        <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
                            To simplify hotel booking by connecting travelers with the perfect accommodations through innovative technology and personalized service.
                        </p>
                        <p className="text-base md:text-lg text-gray-700">
                            We believe every journey should begin with excitement, not frustration. That's why we've built a platform that makes finding and booking hotels effortless.
                        </p>
                    </div>
                    <div className="relative h-56 sm:h-64 md:h-80 rounded-lg overflow-hidden">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"
                        ></motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Values Section */}
            <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-8 md:mb-16"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3 md:mb-4">Our Core Values</h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                            These principles guide everything we do
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {userDetails.values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="bg-white p-6 md:p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex justify-center mb-3 md:mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2 md:mb-3">{value.title}</h3>
                                <p className="text-sm md:text-base text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {userDetails.stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="text-center p-4 md:p-6"
                            >
                                <div className="flex justify-center text-3xl md:text-4xl mb-3 md:mb-4">
                                    {stat.icon}
                                </div>
                                <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2">{stat.value}</p>
                                <p className="text-sm md:text-base lg:text-lg">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 md:mb-16"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3 md:mb-4">Meet Our Team</h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        The passionate people revolutionizing hotel bookings
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {userDetails.teamMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03 }}
                            className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
                        >
                            <div className="h-48 sm:h-56 md:h-64 bg-blue-100 flex items-center justify-center overflow-hidden">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="w-full h-full"
                                >
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            </div>
                            <div className="p-4 md:p-6">
                                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-1">{member.name}</h3>
                                <p className="text-blue-600 mb-2 md:mb-3">{member.role}</p>
                                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">{member.bio}</p>
                                <a
                                    href={member.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-sm md:text-base text-blue-600 hover:text-blue-800 font-medium"
                                >
                                    Connect on LinkedIn
                                    <svg className="w-3 h-3 md:w-4 md:h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-12"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-6">Ready to Experience the Difference?</h2>
                    <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
                        Join millions of travelers who have discovered their perfect stay through our platform.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-full text-base md:text-lg transition-all duration-300"
                    >
                        Start Your Journey
                    </motion.button>
                </motion.div>
            </section>
        </motion.div>
    );
};

export default AboutUs;