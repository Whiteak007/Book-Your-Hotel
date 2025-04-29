import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiCalendar,
  FiMapPin,
  FiUsers,
  FiHome,
  FiClock,
  FiStar,
  FiEdit,
  FiTrash2,
  FiShare2,
  FiPrinter,
  FiChevronDown,
  FiChevronUp,
  FiCheck,
  FiX
} from 'react-icons/fi';
import { FaHotel, FaConciergeBell, FaSwimmingPool, FaWifi, FaParking, FaUtensils } from 'react-icons/fa';

const Trips = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [expandedTrip, setExpandedTrip] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [hotelImages] = useState([
    'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  ]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const tripsData = {
    upcoming: [
      {
        id: 1,
        hotelName: "Grand Marina Resort",
        location: "Miami, Florida",
        checkIn: "2025-05-10",
        checkOut: "2025-05-15",
        roomType: "Deluxe Ocean View",
        guests: 2,
        bookingRef: "GM123456",
        status: "confirmed",
        price: 1250,
        taxes: 160,
        total: 1410,
        amenities: ["pool", "wifi", "beach access", "restaurant"],
        policies: {
          cancellation: "Free cancellation until May 5",
          checkIn: "3:00 PM",
          checkOut: "11:00 AM",
          pets: "Not allowed"
        },
        specialRequests: "King bed preferred"
      },
      {
        id: 2,
        hotelName: "Serene Valley Retreat",
        location: "Kathmandu, Nepal",
        checkIn: "2025-06-20",
        checkOut: "2025-06-25",
        roomType: "Mountain View Suite",
        guests: 3,
        bookingRef: "SVR987654",
        status: "confirmed",
        price: 800,
        taxes: 90,
        total: 890,
        amenities: ["trekking assistance", "yoga classes", "garden", "local cuisine"],
        policies: {
          cancellation: "Free cancellation until June 15",
          checkIn: "2:00 PM",
          checkOut: "12:00 PM",
          pets: "Not allowed"
        },
        specialRequests: "Extra blankets"
      },
      {
        id: 3,
        hotelName: "Azure Coast Inn",
        location: "Santorini, Greece",
        checkIn: "2025-07-12",
        checkOut: "2025-07-18",
        roomType: "Caldera View Double",
        guests: 2,
        bookingRef: "ACI543210",
        status: "pending",
        price: 1500,
        taxes: 180,
        total: 1680,
        amenities: ["infinity pool", "sea view", "breakfast included", "sun terrace"],
        policies: {
          cancellation: "Non-refundable after July 7",
          checkIn: "3:00 PM",
          checkOut: "11:00 AM",
          pets: "Small pets allowed"
        },
        specialRequests: null
      },
      {
        id: 4,
        hotelName: "Kyoto Garden Hotel",
        location: "Kyoto, Japan",
        checkIn: "2025-08-01",
        checkOut: "2025-08-04",
        roomType: "Traditional Japanese Room",
        guests: 2,
        bookingRef: "KGH112233",
        status: "confirmed",
        price: 900,
        taxes: 100,
        total: 1000,
        amenities: ["onsen", "tea ceremony experience", "garden view", "bicycle rental"],
        policies: {
          cancellation: "Free cancellation until July 25",
          checkIn: "4:00 PM",
          checkOut: "10:00 AM",
          pets: "Not allowed"
        },
        specialRequests: "Non-smoking room"
      }
    ],
    past: [
      {
        id: 5,
        hotelName: "The Grand Majestic",
        location: "Paris, France",
        checkIn: "2024-09-15",
        checkOut: "2024-09-20",
        roomType: "Superior Double",
        guests: 2,
        bookingRef: "TGM654321",
        status: "completed",
        price: 1100,
        taxes: 130,
        total: 1230,
        amenities: ["city view", "fine dining", "bar", "elevator"],
        rating: 4.8,
        review: "A truly majestic experience! The hotel was beautiful and the service impeccable."
      },
      {
        id: 6,
        hotelName: "Tropical Sands Resort",
        location: "Maldives",
        checkIn: "2024-11-01",
        checkOut: "2024-11-07",
        roomType: "Overwater Bungalow",
        guests: 2,
        bookingRef: "TSR009988",
        status: "completed",
        price: 2500,
        taxes: 300,
        total: 2800,
        amenities: ["private deck", "snorkeling gear", "ocean view", "butler service"],
        rating: 5.0,
        review: "Absolutely breathtaking! The bungalow was stunning and the location was paradise."
      },
      {
        id: 7,
        hotelName: "Ancient City Inn",
        location: "Rome, Italy",
        checkIn: "2025-01-20",
        checkOut: "2025-01-24",
        roomType: "Classic Twin",
        guests: 2,
        bookingRef: "ACI223344",
        status: "completed",
        price: 700,
        taxes: 80,
        total: 780,
        amenities: ["historical building", "city center location", "free breakfast", "rooftop terrace"],
        rating: 4.2,
        review: "Great location for exploring Rome. The hotel had a lot of character."
      }
    ]
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const calculateNights = (checkIn, checkOut) => {
    const diffTime = new Date(checkOut) - new Date(checkIn);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const handleCancelBooking = (booking) => {
    setSelectedBooking(booking);
    setShowCancelModal(true);
  };

  const confirmCancellation = () => {
    // In a real app, you would call an API here
    console.log(`Cancelled booking ${selectedBooking.bookingRef}`);
    setShowCancelModal(false);
    setSelectedBooking(null);
  };

  const renderAmenityIcon = (amenity) => {
    switch (amenity) {
      case 'pool': return <FaSwimmingPool className="text-blue-500" />;
      case 'wifi': return <FaWifi className="text-green-500" />;
      case 'restaurant': return <FaUtensils className="text-red-500" />;
      case 'parking': return <FaParking className="text-gray-500" />;
      case 'spa': return <FaConciergeBell className="text-purple-500" />;
      case 'gym': return <FiUsers className="text-orange-500" />;
      default: return <FaHotel className="text-blue-400" />;
    }
  };

  const renderTripCard = (trip, index) => (
    <motion.div
      key={trip.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-md overflow-hidden mb-6"
    >
      <div className="md:flex">
        <div className="md:flex-shrink-0 md:w-1/3">
          <img
            className="h-48 w-full object-cover md:h-full"
            src={hotelImages[index % hotelImages.length]}
            alt={trip.hotelName}
          />
        </div>
        <div className="p-6 md:w-2/3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{trip.hotelName}</h3>
              <div className="flex items-center mt-1 text-gray-600">
                <FiMapPin className="mr-1" />
                <span>{trip.location}</span>
              </div>
            </div>
            <span className={`px-2 py-1 text-xs rounded-full ${trip.status === 'confirmed' ? 'bg-green-100 text-green-800' :
              trip.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
              {trip.status.charAt(0).toUpperCase() + trip.status.slice(1)}
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="flex items-center text-gray-700">
              <FiCalendar className="mr-2 text-indigo-500" />
              <div>
                <p className="text-sm">Check-in</p>
                <p className="font-medium">{formatDate(trip.checkIn)}</p>
              </div>
            </div>
            <div className="flex items-center text-gray-700">
              <FiCalendar className="mr-2 text-indigo-500" />
              <div>
                <p className="text-sm">Check-out</p>
                <p className="font-medium">{formatDate(trip.checkOut)}</p>
              </div>
            </div>
            <div className="flex items-center text-gray-700">
              <FiHome className="mr-2 text-indigo-500" />
              <div>
                <p className="text-sm">Room Type</p>
                <p className="font-medium">{trip.roomType}</p>
              </div>
            </div>
            <div className="flex items-center text-gray-700">
              <FiUsers className="mr-2 text-indigo-500" />
              <div>
                <p className="text-sm">Guests</p>
                <p className="font-medium">{trip.guests}</p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Booking Reference</p>
              <p className="font-mono text-gray-700">{trip.bookingRef}</p>
            </div>
            <button
              onClick={() => setExpandedTrip(expandedTrip === trip.id ? null : trip.id)}
              className="flex items-center text-indigo-600 hover:text-indigo-800"
            >
              {expandedTrip === trip.id ? (
                <>
                  <span className="mr-1">Less details</span>
                  <FiChevronUp />
                </>
              ) : (
                <>
                  <span className="mr-1 cursor-pointer">More details</span>
                  <FiChevronDown />
                </>
              )}
            </button>
          </div>

          <AnimatePresence>
            {expandedTrip === trip.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 overflow-hidden"
              >
                <div className="border-t pt-4">
                  <h4 className="font-medium text-gray-800 mb-2">Booking Summary</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600">Room Rate ({calculateNights(trip.checkIn, trip.checkOut)} nights)</p>
                      <p className="font-medium">${trip.price.toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Taxes & Fees</p>
                      <p className="font-medium">${trip.taxes.toFixed(2)}</p>
                    </div>
                    <div className="md:col-span-2 border-t pt-2">
                      <div className="flex justify-between">
                        <p className="text-gray-600 font-medium">Total</p>
                        <p className="font-bold text-lg">${trip.total.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>

                  <h4 className="font-medium text-gray-800 mt-6 mb-2">Amenities</h4>
                  <div className="flex flex-wrap gap-3">
                    {trip.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                        {renderAmenityIcon(amenity)}
                        <span className="ml-2 text-sm capitalize">{amenity}</span>
                      </div>
                    ))}
                  </div>

                  {trip.policies && (
                    <>
                      <h4 className="font-medium text-gray-800 mt-6 mb-2">Hotel Policies</h4>
                      <div className="space-y-2">
                        <div className="flex">
                          <FiClock className="mt-1 mr-2 text-indigo-500 flex-shrink-0" />
                          <div>
                            <p className="text-gray-600">Check-in/Check-out</p>
                            <p>{trip.policies.checkIn} / {trip.policies.checkOut}</p>
                          </div>
                        </div>
                        <div className="flex">
                          <FiX className="mt-1 mr-2 text-indigo-500 flex-shrink-0" />
                          <div>
                            <p className="text-gray-600">Cancellation Policy</p>
                            <p>{trip.policies.cancellation}</p>
                          </div>
                        </div>
                        <div className="flex">
                          <FiCheck className="mt-1 mr-2 text-indigo-500 flex-shrink-0" />
                          <div>
                            <p className="text-gray-600">Pet Policy</p>
                            <p>{trip.policies.pets}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {trip.specialRequests && (
                    <>
                      <h4 className="font-medium text-gray-800 mt-6 mb-2">Special Requests</h4>
                      <p className="text-gray-600">{trip.specialRequests}</p>
                    </>
                  )}

                  {trip.rating && (
                    <>
                      <h4 className="font-medium text-gray-800 mt-6 mb-2">Your Review</h4>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <FiStar
                            key={i}
                            className={`${i < Math.floor(trip.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                          />
                        ))}
                        <span className="ml-2 text-gray-600">{trip.rating}/5</span>
                      </div>
                      {trip.review && <p className="mt-2 text-gray-600 italic">"{trip.review}"</p>}
                    </>
                  )}

                  <div className="mt-6 flex flex-wrap gap-3">
                    {activeTab === 'upcoming' ? (
                      <>
                        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                          <FiEdit className="mr-2" />
                          Modify Booking
                        </button>
                        <button
                          onClick={() => handleCancelBooking(trip)}
                          className="flex items-center px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition"
                        >
                          <FiTrash2 className="mr-2" />
                          Cancel Booking
                        </button>
                        <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                          <FiShare2 className="mr-2" />
                          Share
                        </button>
                        <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                          <FiPrinter className="mr-2" />
                          Print
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                          <FiStar className="mr-2" />
                          Leave Review
                        </button>
                        <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                          <FiHome className="mr-2" />
                          Rebook
                        </button>
                        <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                          <FiPrinter className="mr-2" />
                          Invoice
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">My Trips</h1>
          <p className="mt-3 text-xl text-gray-500">
            Manage your upcoming and past hotel bookings
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`flex-1 py-4 px-6 text-center font-medium cursor-pointer ${activeTab === 'upcoming' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Upcoming Trips
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`flex-1 py-4 px-6 text-center font-medium cursor-pointer ${activeTab === 'past' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Past Trips
            </button>
          </div>

          <div className="p-6">
            {tripsData[activeTab].length > 0 ? (
              <div className="space-y-6">
                {tripsData[activeTab].map((trip, index) => renderTripCard(trip, index))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12"
              >
                <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
                  <FiCalendar className="w-full h-full" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">No {activeTab} trips</h3>
                <p className="mt-1 text-sm text-gray-500">
                  {activeTab === 'upcoming'
                    ? "You don't have any upcoming hotel bookings. Start planning your next trip!"
                    : "Your past hotel stays will appear here after you complete a booking."}
                </p>
                {activeTab === 'upcoming' && (
                  <div className="mt-6">
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Browse Hotels
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>

        {/* Recommendations Section */}
        {activeTab === 'past' && tripsData.past.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-md overflow-hidden mb-8"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Recommended for You</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ y: -5 }}
                    className="border rounded-lg overflow-hidden"
                  >
                    <img
                      src={hotelImages[item % hotelImages.length]}
                      alt={`Recommendation ${item}`}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-medium text-gray-800">Luxury Beach Resort</h3>
                      <p className="text-gray-600 text-sm mt-1">Miami, Florida</p>
                      <div className="flex items-center mt-2">
                        <FiStar className="text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm">4.8</span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-sm text-gray-500">$250/night</span>
                      </div>
                      <button className="mt-3 w-full py-2 bg-indigo-600 text-white rounded-md cursor-pointer hover:bg-indigo-700 transition">
                        View Deal
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Cancel Booking Modal */}
      <AnimatePresence>
        {showCancelModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowCancelModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-medium text-gray-900 mb-4">Cancel Booking</h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to cancel your booking at {selectedBooking?.hotelName}?
                Please review the cancellation policy before proceeding.
              </p>
              {selectedBooking?.policies?.cancellation && (
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <FiX className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        {selectedBooking.policies.cancellation}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowCancelModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Go Back
                </button>
                <button
                  onClick={confirmCancellation}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Confirm Cancellation
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Trips;