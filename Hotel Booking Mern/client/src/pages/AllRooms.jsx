import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { assets, roomsDummyData, facilityIcons } from '../assets/assets'
import StarRating from '../components/StarRating'
import { roomTypes, priceRanges, sortOptions } from '../assets/assets'
const CheckBox = ({ label, selected = false, onChange = () => { } }) => {
    return (
        <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
            <input
                type="checkbox"
                checked={selected}
                onChange={(e) => onChange(e.target.checked, label)}
            />
            <span className='font-light select-none'>{label}</span>
        </label>
    )
}

const RadioButton = ({ label, selected = false, onChange = () => { } }) => {
    return (
        <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
            <input
                type="radio"
                name="sortOption"
                checked={selected}
                onChange={() => onChange(label)}
            />
            <span className='font-light select-none'>{label}</span>
        </label>
    )
}

const AllRooms = () => {
    const navigate = useNavigate();
    const [openFilters, setOpenFilters] = useState(false);

    // Filter DAta from assets

    return (
        <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32 2xl:px-40'>
            {/* Title and description  */}
            <div>
                <div className='flex flex-col items-start text-rifht'>
                    <h1 className='font-playfair text-4xl md:text-[40px]'>Hotel Rooms</h1>
                    <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>
                        Take advantage of our limited-time offers and special packages to enhance
                        your stay and create unforgettable memories.
                    </p>
                </div>

                {roomsDummyData.map((room) => (
                    <div className='flex flex-col md:flex-row items-center py-10 gap-6 border-b border-gray-200 last:border-0 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 mb-6' key={room._id}>
                        <div className='md:w-1/2 relative overflow-hidden rounded-xl group'>
                            <img
                                onClick={() => { navigate(`/room/${room._id}`); scrollTo(0, 0) }}
                                src={room.images[0]}
                                alt="hotel-img"
                                title="View Room Details"
                                className="w-full h-64 md:h-80 object-cover cursor-pointer rounded-xl transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                        </div>

                        <div className='md:w-1/2 flex flex-col gap-3'>
                            <p className='text-gray-500 text-sm font-medium'>{room.hotel.city}</p>
                            <p
                                onClick={() => { navigate(`/room/${room._id}`); scrollTo(0, 0) }}
                                className='text-gray-800 text-2xl md:text-3xl font-playfair cursor-pointer hover:text-blue-600 transition-colors duration-200'
                            >
                                {room.hotel.name}
                            </p>
                            <div className='flex items-center'>
                                <StarRating />
                                <p className="ml-2 text-gray-600 text-sm">200+ reviews</p>
                            </div>

                            {/* Location and address  */}
                            <div className='flex items-center text-gray-500 text-sm mt-1 gap-1'>
                                <img src={assets.locationIcon} alt="locationIcon" className='w-4 h-4' />
                                <span>{room.hotel.address}</span>
                            </div>

                            {/* Room Amenities  */}
                            <div className='flex flex-wrap items-center mt-3 mb-4 gap-3'>
                                {room.amenities.map((item, index) => (
                                    <div
                                        key={index}
                                        className='flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 hover:bg-blue-50 hover:border-blue-100 transition-all duration-200'
                                    >
                                        <img src={facilityIcons[item]} alt={item} className='w-4 h-4' />
                                        <p className='text-xs text-gray-600'>{item}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Room price per night  */}
                            <div className='mt-auto'>
                                <div className='flex justify-between items-center'>
                                    <div className='text-sm text-gray-500'>Starting from</div>
                                    <div className='flex items-baseline gap-1'>
                                        <span className='text-gray-500 text-sm'>$</span>
                                        <span className='text-2xl font-bold text-blue-600'>{room.pricePerNight}</span>
                                        <span className='text-gray-500 text-sm'>/night</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => { navigate(`/room/${room._id}`); scrollTo(0, 0) }}
                                    className='mt-4 w-full py-2.5 bg-gray-600 cursor-grabbing hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300 shadow-sm hover:shadow-md'
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Filters  */}
            <div className='bg-white w-full lg:w-72 xl:w-80 border border-gray-200 rounded-xl shadow-sm top-32 mb-8 lg:mb-0 lg:ml-6'>
                <div className={`flex items-center justify-between px-5 py-4 border-b border-gray-200`}>
                    <p className='text-lg font-semibold text-gray-800'>Filters</p>
                    <div className='flex gap-3'>
                        <span 
                            onClick={() => setOpenFilters(!openFilters)} 
                            className='text-sm text-blue-600 cursor-pointer hover:underline lg:hidden'
                        >
                            {openFilters ? 'Hide' : 'Show'}
                        </span>
                        <span className='hidden lg:block text-sm text-blue-600 cursor-pointer hover:underline'>
                            Clear all
                        </span>
                    </div>
                </div>
                <div className={`${openFilters ? 'h-auto' : 'h-0 lg:h-auto'} overflow-hidden transition-all duration-300`}>
                    <div className="px-5 pt-5">
                        <p className="font-medium text-gray-800 pb-3 text-lg">Room Types</p>
                        {roomTypes.map((room, index) => (
                            <CheckBox key={index} label={room} />
                        ))}
                    </div>
                    <div className="px-5 pt-6">
                        <p className="font-medium text-gray-800 pb-3 text-lg">Price Range</p>
                        {priceRanges.map((range, index) => (
                            <CheckBox key={index} label={`$${range}`} />
                        ))}
                    </div>
                    <div className="px-5 pt-6 pb-7">
                        <p className="font-medium text-gray-800 pb-3 text-lg">Sort By</p>
                        {sortOptions.map((option, index) => (
                            <RadioButton key={index} label={option} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllRooms