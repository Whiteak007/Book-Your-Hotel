import React, { useState } from 'react'
import { assets, cities } from '../assets/assets'
import './Hero.css'
const Hero = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredCities, setFilteredCities] = useState(cities);
    const [destination, setDestination] = useState("");

    const handleInputChange = (e) => {
        const value = e.target.value;
        setDestination(value);

        if (value.length > 0) {
            setFilteredCities(
                cities.filter(city =>
                    city.toLowerCase().includes(value.toLowerCase())
                )
            );
        } else {
            setFilteredCities(cities);
        }
    };

    const handleCitySelect = (city) => {
        setDestination(city);
        setShowDropdown(false);
    };

    return (
        <div className='fixer flex flex-col items-start justify-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 text-white bg-[url("src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center h-screen min-h-[600px] relative'>
            {/* Gradient overlay - enhanced for mobile */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 md:from-black/60 md:to-transparent z-0"></div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header content - made responsive */}
                <p className='bg-[#49B9FF] px-3 py-1 sm:px-4 sm:py-1.5 rounded-full mt-16 sm:mt-20 text-xs sm:text-sm font-medium inline-flex items-center margin'>
                    <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    The Ultimate Hotel Experience
                </p>

                {/* Responsive heading with proper line breaks */}
                <h1 className='font-playfair text-2xl xs:text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-tight sm:leading-snug md:leading-[56px] font-bold max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl mt-4 sm:mt-6'>
                    Discover Your Perfect <span className="text-[#49B9FF] block sm:inline">Gateway Destination</span>
                </h1>

                {/* Responsive paragraph with adjusted sizing */}
                <p className='max-w-xs xs:max-w-sm sm:max-w-md md:max-w-xl mt-3 sm:mt-4 text-sm xs:text-base sm:text-[15px] md:text-lg text-gray-100 leading-relaxed'>
                    Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today.
                </p>

                {/* Enhanced booking form */}
                <form className='bg-white/90 backdrop-blur-sm text-gray-700 rounded-xl shadow-2xl px-6 py-6 mt-10 flex flex-col md:flex-row gap-6 w-full max-w-6xl'>
                    {/* Destination Field with Dropdown */}
                    <div className="flex-1 relative">
                        <div className='flex items-center gap-2 mb-1'>
                            <img src={assets.calenderIcon} alt="location-icon" className='h-5 w-5 opacity-70' />
                            <label htmlFor="destinationInput" className="text-sm font-medium text-gray-600">Destination</label>
                        </div>
                        <div className="relative">
                            <input
                                id="destinationInput"
                                type="text"
                                value={destination}
                                onChange={handleInputChange}
                                onFocus={() => setShowDropdown(true)}
                                onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#49B9FF] focus:border-transparent transition-all"
                                placeholder="Where are you going?"
                                required
                                autoComplete="off"
                            />
                            {showDropdown && (
                                <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-auto">
                                    {filteredCities.length > 0 ? (
                                        filteredCities.map((city, index) => (
                                            <div
                                                key={index}
                                                className="px-4 py-2 hover:bg-[#49B9FF]/10 cursor-pointer transition-colors"
                                                onClick={() => handleCitySelect(city)}
                                            >
                                                {city}
                                            </div>
                                        ))
                                    ) : (
                                        <div className="px-4 py-2 text-gray-500">
                                            Others
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Check-in Field */}
                    <div className="flex-1">
                        <div className='flex items-center gap-2 mb-1'>
                            <img src={assets.calenderIcon} alt="calendar-icon" className='h-5 w-5 opacity-70' />
                            <label htmlFor="checkIn" className="text-sm font-medium text-gray-600">Check in</label>
                        </div>
                        <input
                            id="checkIn"
                            type="date"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#49B9FF] focus:border-transparent transition-all"
                        />
                    </div>

                    {/* Check-out Field */}
                    <div className="flex-1">
                        <div className='flex items-center gap-2 mb-1'>
                            <img src={assets.calenderIcon} alt="calendar-icon" className='h-5 w-5 opacity-70' />
                            <label htmlFor="checkOut" className="text-sm font-medium text-gray-600">Check out</label>
                        </div>
                        <input
                            id="checkOut"
                            type="date"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#49B9FF] focus:border-transparent transition-all"
                        />
                    </div>

                    {/* Guests Field */}
                    <div className="flex-1">
                        <div className='flex items-center gap-2 mb-1'>
                            <img src={assets.calenderIcon} alt="guests-icon" className='h-5 w-5 opacity-70' />
                            <label htmlFor="guests" className="text-sm font-medium text-gray-600">Guests</label>
                        </div>
                        <input
                            min={1}
                            max={10}
                            id="guests"
                            type="number"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#49B9FF] focus:border-transparent transition-all"
                            placeholder="0"
                            defaultValue={2}
                        />
                    </div>

                    {/* Search Button */}
                    <div className="flex items-end">
                        <button
                            type="submit"
                            className='flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#49B9FF] to-[#2D8BFF] hover:from-[#3aa8f0] hover:to-[#267fe0] py-4 px-6 text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg w-full md:w-auto'
                        >
                            <img src={assets.searchIcon} alt="search-icon" className='h-5 w-5 invert' />
                            <span className='cursor-pointer'>Search Hotels</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero