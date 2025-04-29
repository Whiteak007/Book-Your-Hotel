import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Title from '../components/Title'
import { assets, userBookingsDummyData } from '../assets/assets'
import { bookingVariants } from '../assets/assets'
const MyBookings = () => {
    const [bookings, setBookings] = useState(userBookingsDummyData)

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-b from-gray-50 to-white min-h-screen'
        >
            <Title
                title='My Bookings'
                subTitle='Centralize and effortlessly manage your entire spectrum of hotel reservations, encompassing past, current, and upcoming stays, within a single, intuitive interface. Simplify your comprehensive travel planning process with just a few convenient clicks, ensuring a seamless and well-organized experience from start to finish.'
                align='left'
            />

            <div className='max-w-6xl mt-8 w-full text-gray-800 mx-auto'>
                {/* Table Header */}
                <motion.div 
                    className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3 bg-white rounded-t-lg shadow-sm'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className='pl-4'>Hotels</div>
                    <div>Date & Timings</div>
                    <div>Payment</div>
                </motion.div>

                <AnimatePresence>
                    {bookings.map((booking, index) => (
                        <motion.div
                            key={booking._id}
                            variants={bookingVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            transition={{ delay: index * 0.1 }}
                            className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-200 py-6 first:border-t bg-white px-4 md:px-0 last:rounded-b-lg shadow-sm hover:shadow-md'
                        >
                            {/* Hotel Details */}
                            <div className='flex flex-col md:flex-row'>
                                <motion.div
                                    className='relative overflow-hidden rounded-lg shadow-md'
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ type: 'spring', stiffness: 400 }}
                                >
                                    <img
                                        src={booking.room.images[0]}
                                        alt="hotel-img"
                                        className='w-full md:w-44 h-40 object-cover rounded-lg'
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                                </motion.div>
                                <div className='flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4'>
                                    <motion.p 
                                        className='font-playfair text-2xl text-gray-800'
                                        whileHover={{ x: 5 }}
                                    >
                                        {booking.hotel.name}
                                        <span className='font-inter text-sm text-gray-500'> ({booking.room.roomType})</span>
                                    </motion.p>
                                    <div className='flex items-center gap-1 text-sm text-gray-500'>
                                        <img src={assets.locationIcon} alt="location-icon" className='w-4 h-4' />
                                        <span>{booking.hotel.address}</span>
                                    </div>
                                    <div className='flex items-center gap-1 text-sm text-gray-500'>
                                        <img src={assets.guestsIcon} alt="guests-icon" className='w-4 h-4' />
                                        <span>Guests: {booking.guests}</span>
                                    </div>
                                    <p className='text-base font-medium'>
                                        Total: <span className='text-blue-600'>${booking.totalPrice}</span>
                                    </p>
                                </div>
                            </div>

                            {/* Date and Timing */}
                            <div className='flex flex-row md:items-center md:gap-12 mt-3 gap-8'>
                                <div>
                                    <p className='text-gray-600'>Check-In:</p>
                                    <motion.p 
                                        className='text-gray-500 text-sm'
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {new Date(booking.checkInDate).toDateString()}
                                    </motion.p>
                                </div>
                                <div>
                                    <p className='text-gray-600'>Check-Out:</p>
                                    <motion.p 
                                        className='text-gray-500 text-sm'
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {new Date(booking.checkOutDate).toDateString()}
                                    </motion.p>
                                </div>
                            </div>

                            {/* Payment Status */}
                            <div className='flex flex-col items-start justify-center pt-3 md:pr-4'>
                                <div className='flex items-center gap-2'>
                                    <motion.div 
                                        className={`h-3 w-3 rounded-full ${booking.isPaid ? "bg-green-500" : "bg-red-500"}`}
                                        animate={{ 
                                            scale: [1, 1.2, 1],
                                            opacity: [0.8, 1, 0.8]
                                        }}
                                        transition={{ 
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                    <p className={`${booking.isPaid ? "text-sm text-green-600" : "text-sm text-red-600"} font-medium`}>
                                        {booking.isPaid ? "Paid" : "Unpaid"}
                                    </p>
                                </div>
                                {!booking.isPaid && (
                                    <motion.button
                                        className='px-4 py-2 mt-4 text-sm bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full hover:shadow-lg transition-all cursor-pointer'
                                        whileHover={{ 
                                            scale: 1.05,
                                            boxShadow: "0 5px 15px -3px rgba(59, 130, 246, 0.3)"
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Pay Now
                                    </motion.button>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {/* Empty State */}
                {bookings.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center justify-center py-16 bg-white rounded-lg shadow-sm"
                    >
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-medium text-gray-700 mb-2">No bookings yet</h3>
                        <p className="text-gray-500 text-center max-w-md">You haven't made any reservations yet. Start exploring our hotels to book your next stay!</p>
                        <motion.button
                            className="mt-6 px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Browse Hotels
                        </motion.button>
                    </motion.div>
                )}
            </div>
        </motion.div>
    )
}

export default MyBookings