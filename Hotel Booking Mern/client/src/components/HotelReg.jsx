import React from 'react'
import { cities, assets } from '../assets/assets'
import { motion, AnimatePresence } from 'framer-motion'
import { modalVariants, backdropVariants, inputVariants } from '../assets/assets'
const HotelReg = ({ onClose }) => {
    return (
        <AnimatePresence>
            <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={backdropVariants}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            >
                <motion.form
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={modalVariants}
                    className="flex flex-col md:flex-row bg-white rounded-xl w-full max-w-4xl mx-4 md:mx-8 overflow-hidden shadow-2xl"
                >
                    {/* Image Section */}
                    <div className="hidden md:block md:w-1/2 relative">
                        <img 
                            src={assets.regImage} 
                            alt="Hotel registration" 
                            className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-indigo-600/60" />
                    </div>

                    {/* Form Section */}
                    <div className="relative flex flex-col w-full md:w-1/2 p-6 md:p-8 lg:p-10">
                        <motion.img 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            src={assets.closeIcon} 
                            alt="Close" 
                            className="absolute top-4 right-4 h-5 w-5 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                            onClick={onClose}
                        />

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4 mb-2">
                            Register Your Hotel
                        </h2>
                        <p className="text-gray-500 mb-6">
                            Join our network of premium accommodations
                        </p>

                        {/* Hotel Name */}
                        <div className="w-full mb-4">
                            <label htmlFor="name" className="block font-medium text-gray-700 mb-1">
                                Hotel Name
                            </label>
                            <motion.input
                                whileFocus="focus"
                                variants={inputVariants}
                                type="text" 
                                id="name" 
                                placeholder="Enter hotel name" 
                                className="border border-gray-300 rounded-lg w-full px-4 py-3 focus:outline-none transition-all duration-200"
                                required 
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="w-full mb-4">
                            <label htmlFor="contact" className="block font-medium text-gray-700 mb-1">
                                Phone Number
                            </label>
                            <motion.input
                                whileFocus="focus"
                                variants={inputVariants}
                                type="tel" 
                                id="contact" 
                                placeholder="Enter phone number" 
                                className="border border-gray-300 rounded-lg w-full px-4 py-3 focus:outline-none transition-all duration-200"
                                required 
                            />
                        </div>

                        {/* Hotel Address */}
                        <div className="w-full mb-4">
                            <label htmlFor="address" className="block font-medium text-gray-700 mb-1">
                                Address
                            </label>
                            <motion.input
                                whileFocus="focus"
                                variants={inputVariants}
                                type="text" 
                                id="address" 
                                placeholder="Enter full address" 
                                className="border border-gray-300 rounded-lg w-full px-4 py-3 focus:outline-none transition-all duration-200"
                                required 
                            />
                        </div>

                        {/* City Selection */}
                        <div className="w-full mb-6">
                            <label htmlFor="city" className="block font-medium text-gray-700 mb-1">
                                City
                            </label>
                            <motion.select
                                whileFocus="focus"
                                variants={inputVariants}
                                id="city"
                                className="border border-gray-300 rounded-lg w-full px-4 py-3 focus:outline-none transition-all duration-200 appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiAjdjM2MzZmNSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[right_0.75rem_center] bg-[length:1.25rem_1.25rem]"
                                required
                            >
                                <option value="">Select City</option>
                                {cities.map((city) => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </motion.select>
                        </div>

                        <motion.button
                            whileHover={{ 
                                scale: 1.02,
                                boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)"
                            }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 shadow-md"
                        >
                            Register Hotel
                        </motion.button>
                    </div>
                </motion.form>
            </motion.div>
        </AnimatePresence>
    )
}

export default HotelReg