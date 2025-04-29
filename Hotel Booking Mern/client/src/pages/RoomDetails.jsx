import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { assets, roomsDummyData, facilityIcons, roomCommonData } from '../assets/assets'
import StarRating from '../components/StarRating'
import { motion, AnimatePresence } from 'framer-motion'

const RoomDetails = () => {
    const { id } = useParams()
    const [room, setRoom] = useState(null)
    const [mainImage, setMainImage] = useState(null)
    const [isBookingFormVisible, setIsBookingFormVisible] = useState(true)

    useEffect(() => {
        const room = roomsDummyData.find((room) => room._id === id)
        room && setRoom(room)
        room && setMainImage(room.images[0])
    }, [id])

    if (!room) return <div className="flex justify-center items-center h-screen">Loading...</div>

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32 bg-gray-50'
        >
            {/* Room Header */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='flex flex-col md:flex-row items-start md:items-center gap-4 mb-6'
            >
                <div className='flex items-center gap-4'>
                    <h1 className='text-3xl md:text-4xl font-playfair text-gray-800'>
                        {room.hotel.name} <span className='font-inter text-base text-gray-500'>({room.roomType})</span>
                    </h1>
                    <motion.p
                        whileHover={{ scale: 1.05 }}
                        className='text-xs font-medium py-1.5 px-3 text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-sm'
                    >
                        20% OFF
                    </motion.p>
                </div>

                {/* Room Rating */}
                <div className='flex items-center gap-2 ml-auto'>
                    <StarRating />
                    <p className='text-gray-600'>200+ reviews</p>
                </div>
            </motion.div>

            {/* Room Address */}
            <motion.div
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className='flex items-center gap-2 text-gray-500 mb-8'
            >
                <img src={assets.locationIcon} alt="location-icon" className='w-5 h-5' />
                <span>{room.hotel.address}</span>
            </motion.div>

            {/* Room Images */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className='flex flex-col lg:flex-row gap-6 mb-12'
            >
                <div className='lg:w-2/3 w-full relative group overflow-hidden rounded-xl shadow-lg'>
                    <AnimatePresence mode='wait'>
                        <motion.img
                            key={mainImage}
                            src={mainImage}
                            alt="Room Image"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className='w-full h-64 md:h-96 object-cover rounded-xl cursor-pointer'
                        />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </div>

                {/* Thumbnail Images */}
                <div className='grid grid-cols-2 gap-4 lg:w-1/3 w-full'>
                    {room?.images.map((image, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            className={`relative overflow-hidden rounded-xl shadow-md cursor-pointer transition-all duration-300 ${mainImage === image ? 'ring-4 ring-blue-500' : ''}`}
                            onClick={() => setMainImage(image)}
                        >
                            <img
                                src={image}
                                alt="Room Image"
                                className='w-full h-full object-cover'
                            />
                            {mainImage === image && (
                                <div className="absolute inset-0 bg-black/30"></div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Room Highlights */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className='flex flex-col md:flex-row justify-between gap-8 mb-16'
            >
                <div className='flex-1'>
                    <h2 className='text-3xl md:text-4xl font-playfair text-gray-800 mb-6'>Experience Luxury Like Never Before</h2>
                    <div className='flex flex-wrap gap-3'>
                        {room.amenities.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                className='flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 hover:border-blue-200 transition-all duration-200 shadow-sm'
                            >
                                <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                                <p className='text-sm text-gray-700'>{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Room Price */}
                <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100 self-start sticky top-28'>
                    <div className='flex flex-col items-end mb-4'>
                        <p className='text-gray-500 text-sm'>Starting from</p>
                        <div className='flex items-baseline gap-1'>
                            <span className='text-gray-500'>$</span>
                            <span className='text-3xl font-bold text-blue-600'>{room.pricePerNight}</span>
                            <span className='text-gray-500'>/night</span>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsBookingFormVisible(!isBookingFormVisible)}
                        className='w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95'
                    >
                        {isBookingFormVisible ? 'Hide Booking Form' : 'Check Availability'}
                    </button>
                </div>
            </motion.div>

            {/* Booking Form */}
            <AnimatePresence>
                {isBookingFormVisible && (
                    <motion.form
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className='bg-white rounded-xl shadow-lg overflow-hidden mb-16'
                    >
                        <div className='p-6 md:p-8'>
                            <h3 className='text-xl font-semibold text-gray-800 mb-6'>Book Your Stay</h3>
                            <div className='flex flex-col md:flex-row items-start md:items-end gap-6'>
                                <div className='flex-1 grid grid-cols-1 md:grid-cols-3 gap-6'>
                                    <div className='space-y-2'>
                                        <label htmlFor="checkInDate" className='block text-sm font-medium text-gray-700'>Check-In</label>
                                        <div className='relative'>
                                            <input
                                                type="date"
                                                id="checkInDate"
                                                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200'
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className='space-y-2'>
                                        <label htmlFor="checkOutDate" className='block text-sm font-medium text-gray-700'>Check-Out</label>
                                        <div className='relative'>
                                            <input
                                                type="date"
                                                id="checkOutDate"
                                                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200'
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className='space-y-2'>
                                        <label htmlFor="guests" className='block text-sm font-medium text-gray-700'>Guests</label>
                                        <div className='relative'>
                                            <input
                                                type="number"
                                                id="guests"
                                                min="1"
                                                defaultValue="1"
                                                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200'
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type='submit'
                                    className='w-full md:w-auto md:px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 whitespace-nowrap'
                                >
                                    Check Availability
                                </button>
                            </div>
                        </div>
                    </motion.form>
                )}
            </AnimatePresence>

            {/* Room Specifications */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className='space-y-8 mb-16'
            >
                {roomCommonData.map((spec, index) => (
                    <div key={index} className='flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300'>
                        <div className='p-2 bg-blue-50 rounded-lg'>
                            <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6 h-6' />
                        </div>
                        <div>
                            <h4 className='text-lg font-medium text-gray-800'>{spec.title}</h4>
                            <p className='text-gray-600 mt-1'>{spec.description}</p>
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* About Guests */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className='border-t border-b border-gray-200 py-10 mb-16 bg-white rounded-xl shadow-sm px-6'
            >
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>About This Room</h3>
                <p className='text-gray-600 leading-relaxed'>
                    Guests will be allocated on the ground floor according to availability. You get a comfortable two-bedroom apartment that has a true city feeling. The price quoted is for two guests; at the guest slot, please mark the number of guests to get the exact price for groups. The guests will be allocated ground floor according to availability. You get the comfortable two-bedroom apartment that has a true city feeling.
                </p>
            </motion.div>

            {/* Hosted by */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className='flex flex-col md:flex-row items-start md:items-center justify-between gap-8 bg-white p-6 rounded-xl shadow-sm'
            >
                <div className='flex items-center gap-4'>
                    <motion.img
                        whileHover={{ scale: 1.05 }}
                        src={room.hotel.owner.image}
                        alt="Host"
                        className='h-16 w-16 rounded-full object-cover border-2 border-white shadow-md'
                    />
                    <div>
                        <h4 className='text-xl font-medium text-gray-800'>Hosted by {room.hotel.name}</h4>
                        <div className='flex items-center mt-1'>
                            <StarRating />
                            <p className='ml-2 text-gray-600'>200+ reviews</p>
                        </div>
                    </div>
                </div>
                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className='px-8 py-3 rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg'
                >
                    Contact Host
                </motion.button>
            </motion.div>
        </motion.div>
    )
}

export default RoomDetails