import React, { useState } from 'react'
import { assets, dashboardDummyData } from '../../assets/assets'
import Title from '../../components/Title'
import { motion } from 'framer-motion'
import { FiTrendingUp, FiDollarSign, FiCalendar, FiUser, FiHome } from 'react-icons/fi'

const Dashboard = () => {
    const [dashboardData, setDashboarData] = useState(dashboardDummyData)

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
            className="max-w-6xl mx-auto p-6"
        >
            <Title
                align='left'
                font='outfit'
                title='Dashboard'
                subTitle=' A single dashboard allows you to oversee your available rooms, keep track of reservations as they come in, and understand your financial performance, all while providing up-to-the-minute information to keep things running without a hitch.'
            />

            {/* Stats Cards */}
            <motion.div 
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8"
            >
                {/* Total Bookings */}
                <motion.div 
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                    <div className="flex items-center">
                        <div className="p-3 rounded-full bg-blue-50 text-blue-600 mr-4">
                            <FiCalendar className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Total Bookings</p>
                            <p className="text-2xl font-bold text-gray-800">{dashboardData.totalBookings}</p>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm text-green-500">
                        <FiTrendingUp className="mr-1" />
                        <span>12% from last month</span>
                    </div>
                </motion.div>

                {/* Total Revenue */}
                <motion.div 
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                    <div className="flex items-center">
                        <div className="p-3 rounded-full bg-green-50 text-green-600 mr-4">
                            <FiDollarSign className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Total Revenue</p>
                            <p className="text-2xl font-bold text-gray-800">${dashboardData.totalRevenue.toLocaleString()}</p>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm text-green-500">
                        <FiTrendingUp className="mr-1" />
                        <span>8% from last month</span>
                    </div>
                </motion.div>

                {/* Occupancy Rate */}
                <motion.div 
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                    <div className="flex items-center">
                        <div className="p-3 rounded-full bg-purple-50 text-purple-600 mr-4">
                            <FiHome className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Occupancy Rate</p>
                            <p className="text-2xl font-bold text-gray-800">78%</p>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm text-green-500">
                        <FiTrendingUp className="mr-1" />
                        <span>5% from last month</span>
                    </div>
                </motion.div>

                {/* Active Users */}
                <motion.div 
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                    <div className="flex items-center">
                        <div className="p-3 rounded-full bg-amber-50 text-amber-600 mr-4">
                            <FiUser className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Active Users</p>
                            <p className="text-2xl font-bold text-gray-800">1,248</p>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm text-green-500">
                        <FiTrendingUp className="mr-1" />
                        <span>15% from last month</span>
                    </div>
                </motion.div>
            </motion.div>

            {/* Recent Bookings */}
            <motion.div 
                variants={itemVariants}
                className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
            >
                <div className="p-6 border-b border-gray-200">
                    <h2 className="text-xl font-bold text-gray-800 flex items-center">
                        <FiCalendar className="mr-2" />
                        Recent Bookings
                    </h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                                <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Room</th>
                                <th className="py-4 px-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                <th className="py-4 px-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {dashboardData.bookings.map((item, index) => (
                                <motion.tr 
                                    key={index}
                                    whileHover={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
                                    className="transition-colors duration-150"
                                >
                                    <td className="py-4 px-6 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                                <FiUser className="text-blue-600" />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{item.user.username}</div>
                                                <div className="text-sm text-gray-500">{item.user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 whitespace-nowrap hidden sm:table-cell">
                                        <div className="text-sm text-gray-900">{item.room.roomType}</div>
                                        <div className="text-sm text-gray-500">2 nights</div>
                                    </td>
                                    <td className="py-4 px-6 whitespace-nowrap text-center">
                                        <span className="px-2 inline-flex text-sm font-semibold rounded-full bg-green-100 text-green-800">
                                            ${item.totalPrice}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 whitespace-nowrap text-center">
                                        <motion.span 
                                            className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${item.isPaid ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {item.isPaid ? 'Completed' : 'Pending'}
                                        </motion.span>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="bg-gray-50 px-6 py-3 flex items-center justify-between border-t border-gray-200">
                    <div className="text-sm text-gray-500">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of <span className="font-medium">{dashboardData.bookings.length}</span> results
                    </div>
                    <div className="flex space-x-2">
                        <button className="px-3 py-1 rounded-md cursor-pointer bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100">
                            Previous
                        </button>
                        <button className="px-3 py-1 rounded-md cursor-pointer bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100">
                            Next
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Dashboard