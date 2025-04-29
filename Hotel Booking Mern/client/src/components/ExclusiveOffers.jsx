import React from 'react'
import { assets, exclusiveOffers } from '../assets/assets'
import Title from './Title'
import { motion } from 'framer-motion'
import {containerVariants, itemVariants, buttonVariants} from '../assets/assets'
const ExclusiveOffers = () => {
    return (
        <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="px-6 md:px-16 lg:px-24 xl:px-32 py-20 bg-gradient-to-b from-white to-gray-50"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between w-full">
                    <Title 
                        align="left" 
                        title="Exclusive Offers" 
                        subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories." 
                    />
                    
                    <motion.button
                        variants={itemVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                        View All Offers
                        <motion.img 
                            src={assets.arrowIcon} 
                            alt="arrow-icon" 
                            className="group-hover:translate-x-1 transition-all"
                            variants={{
                                hover: { x: 3 },
                                tap: { x: 0 }
                            }}
                        />
                    </motion.button>
                </div>

                <motion.div 
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
                >
                    {exclusiveOffers.map((item) => (
                        <motion.div 
                            key={item._id}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="group relative flex flex-col items-start justify-between gap-4 p-6 rounded-xl text-white bg-no-repeat bg-cover bg-center overflow-hidden min-h-[400px]"
                            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${item.image})` }}
                        >
                            {/* Discount badge with subtle shadow */}
                            <motion.p 
                                whileHover={{ scale: 1.05 }}
                                className="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full shadow-md"
                            >
                                {item.priceOff}% OFF
                            </motion.p>

                            <div className="mt-auto">
                                <p className="text-2xl font-medium font-playfair group-hover:text-amber-200 transition-colors">
                                    {item.title}
                                </p>
                                <p className="text-gray-200 mt-2 group-hover:text-white transition-colors">
                                    {item.description}
                                </p>
                                <p className="text-xs text-gray-300 mt-4">
                                    Expires {item.expiryDate}
                                </p>
                            </div>

                            <motion.button
                                variants={buttonVariants}
                                className="flex items-center gap-2 font-medium cursor-pointer mt-4 mb-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 border border-white/20 transition-all"
                            >
                                View Offers
                                <img 
                                    className="invert group-hover:translate-x-1 transition-all" 
                                    src={assets.arrowIcon} 
                                    alt="arrow-icon" 
                                />
                            </motion.button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
}

export default ExclusiveOffers