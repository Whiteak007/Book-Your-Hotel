import React from 'react';
import { motion } from 'framer-motion';

const Promotional = () => {
    return (
        <motion.div 
            className="flex items-center justify-center mb-20 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="flex flex-col md:flex-row items-center justify-between text-sm border border-gray-200 rounded-3xl w-full max-w-5xl bg-gradient-to-r from-[#F5F2FF] to-[#FBF6FF] shadow-lg overflow-hidden">
                {/* Text Content */}
                <motion.div 
                    className="flex flex-col text-center md:text-left items-center md:items-start p-8 md:p-12 lg:p-16"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <motion.h2 
                        className="text-2xl md:text-4xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Download Our <span className="text-purple-600">Mobile App</span>
                    </motion.h2>
                    
                    <motion.p 
                        className="text-gray-600 mt-2 max-w-md text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Discover Your Perfect Gateway Destination
                    </motion.p>
                    
                    <motion.p 
                        className="text-gray-600 mt-4 max-w-md"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today with our mobile app featuring:
                    </motion.p>
                    
                    <motion.ul 
                        className="mt-4 space-y-2 text-gray-600 max-w-md"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Exclusive mobile-only deals and discounts
                        </li>
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Instant booking with real-time availability
                        </li>
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Personalized recommendations based on your preferences
                        </li>
                    </motion.ul>

                    {/* App Store Buttons */}
                    <motion.div 
                        className="flex flex-col sm:flex-row items-center gap-4 mt-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.button 
                            aria-label="googlePlayBtn" 
                            className="active:scale-95 transition-all cursor-pointer hover:shadow-lg"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img 
                                className="w-36 md:w-44"
                                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/googlePlayBtn.svg"
                                alt="Google Play Store" 
                            />
                        </motion.button>
                        <motion.button 
                            aria-label="appleStoreBtn" 
                            className="active:scale-95 transition-all cursor-pointer hover:shadow-lg"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img 
                                className="w-36 md:w-44"
                                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/appleStoreBtn.svg"
                                alt="Apple App Store" 
                            />
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Image */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <img 
                        className="max-w-[280px] md:max-w-[375px] w-full"
                        src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/excitedWomenImage.png"
                        alt="Happy travelers using our app" 
                    />
                    <motion.div 
                        className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div 
                        className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.2, 0.5, 0.2]
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                        }}
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Promotional;