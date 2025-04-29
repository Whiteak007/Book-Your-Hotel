import React from 'react'
import Navbar from '../../components/hotelOwner/Navbar'
import Sidebar from '../../components/hotelOwner/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className="flex flex-col h-screen bg-gray-50 overflow-hidden">
            <Navbar />
            <div className='flex flex-1 overflow-hidden'>
                <Sidebar />
                <main className="flex-1 overflow-y-auto p-4 pt-6 md:px-8 md:py-6 bg-white md:rounded-tl-lg shadow-inner">
                    <div className="max-w-[1800px] mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Layout