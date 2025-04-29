import React from 'react'
import { roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import HotelCard from './HotelCard'
import Title from './Title'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../assets/assets'
const FeaturedDestination = () => {
    const navigate = useNavigate()

    return (
        <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="px-6 md:px-16 lg:px-24 py-20 bg-gradient-to-b from-gray-50 to-white"
        >
            <div className="max-w-7xl mx-auto">
                <Title 
                    title="Featured Destination" 
                    subTitle="Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences." 
                />
                
                <motion.div 
                    variants={containerVariants}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
                >
                    {roomsDummyData.slice(0, 4).map((room, index) => (
                        <motion.div key={room._id} variants={itemVariants}>
                            <HotelCard room={room} index={index} />
                        </motion.div>
                    ))}
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-16"
                >
                    <button 
                        onClick={() => { navigate('/rooms'); scrollTo(0, 0) }}
                        className="px-6 py-3 text-sm font-medium rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-1"
                    >
                        View All Destinations
                    </button>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default FeaturedDestination