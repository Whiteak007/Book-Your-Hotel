import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import Title from '../../components/Title'
import { motion } from 'framer-motion'

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [inputs, setInputs] = useState({
    roomType: '',
    pricePerNight: 0,
    amenities: {
      'Free WiFi': false,
      'Free Breakfast': false,
      'Room Service': false,
      'Mountain View': false,
      'Pool Access': false,
    }
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md "
    >
      <form className="space-y-6 ">
        <Title 
          align='left' 
          font='outfit' 
          title='Add Room' 
          subTitle=' Make sure to carefully enter correct information for your rooms, such as detailed descriptions, exact pricing, and all the amenities offered, as this will greatly improve how easily and pleasantly users can book.' 
        />

        {/* Upload Area For Images */}
        <motion.div variants={itemVariants}>
          <p className='text-gray-700 font-medium'>Images</p>
          <p className='text-sm text-gray-500 mb-2'>Upload at least 4 high-quality images</p>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 my-2'>
            {Object.keys(images).map((key) => (
              <motion.label 
                htmlFor={`roomImage${key}`} 
                key={key}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                <div className="group relative">
                  <img 
                    className='h-32 w-full object-cover rounded-lg cursor-pointer transition-all duration-300 group-hover:opacity-90 border-2 border-gray-200'
                    src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea}
                    alt="" 
                  />
                  {!images[key] && (
                    <div className="absolute inset-0 flex items-center justify-center cursor-pointer bg-gray-300 bg-opacity-20 rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                  )}
                </div>
                <input 
                  type='file'
                  accept='image/*'
                  id={`roomImage${key}`}
                  hidden
                  onChange={(e) => setImages({ ...images, [key]: e.target.files[0] })} 
                />
                {images[key] && (
                  <button 
                    type="button"
                    onClick={() => setImages({ ...images, [key]: null })}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </motion.label>
            ))}
          </div>
        </motion.div>

        {/* Room Details */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className='w-full flex flex-col md:flex-row gap-4'>
            <div className='flex-1'>
              <label className='block text-gray-700 font-medium mb-1'>Room Type</label>
              <select 
                value={inputs.roomType} 
                onChange={(e) => setInputs({ ...inputs, roomType: e.target.value })}
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300'
              >
                <option value="">Select Room Type</option>
                <option value="Single Bed">Single Bed</option>
                <option value="Double Bed">Double Bed</option>
                <option value="Luxury Room">Luxury Room</option>
                <option value="Family Suite">Family Suite</option>
              </select>
            </div>

            <div className='flex-1'>
              <label className='block text-gray-700 font-medium mb-1'>
                Price <span className='text-sm font-normal'>/night</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                <input 
                  type="number" 
                  placeholder='0'
                  className='w-full pl-8 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300'
                  value={inputs.pricePerNight}
                  onChange={(e) => setInputs({ ...inputs, pricePerNight: e.target.value })} 
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Amenities */}
      
        <motion.div variants={itemVariants}>
          <label className='block text-gray-700 font-medium mb-2'>Amenities</label>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
            {Object.keys(inputs.amenities).map((amenity, index) => (
              <div 
                key={index}
                className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all duration-200 ${inputs.amenities[amenity] ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                onClick={() => setInputs({ ...inputs, amenities: { ...inputs.amenities, [amenity]: !inputs.amenities[amenity] } })}
              >
                <div className={`flex items-center justify-center h-5 w-5 rounded mr-3 transition-colors ${inputs.amenities[amenity] ? 'bg-blue-500' : 'bg-gray-200'}`}>
                  {inputs.amenities[amenity] && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className={`font-medium ${inputs.amenities[amenity] ? 'text-blue-600' : 'text-gray-700'}`}>{amenity}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <button 
            className='w-full md:w-auto bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-lg font-medium shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300'
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Add Room
          </button>
        </motion.div>
      </form>
    </motion.div>
  )
}

export default AddRoom