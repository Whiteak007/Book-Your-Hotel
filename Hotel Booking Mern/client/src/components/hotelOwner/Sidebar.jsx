import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    const sidebarLinks = [
        { name: "Dashboard", path: "/owner", icon: assets.dashboardIcon },
        { name: "Add Room", path: "/owner/add-room", icon: assets.addIcon },
        { name: "List Room", path: "/owner/list-room", icon: assets.listIcon },
    ]
    
    return (
        <div className='md:w-64 w-20 h-full bg-white border-r border-gray-200 flex flex-col transition-all duration-300 shadow-sm'>
            <div className="p-4 md:p-6 mb-2 hidden md:block">
                <h2 className="text-xl font-semibold text-gray-800">Hotel Admin</h2>
            </div>
            
            <nav className="flex-1 flex flex-col gap-1 px-2 md:px-4 py-4 overflow-y-auto">
                {sidebarLinks.map((item, index) => (
                    <NavLink 
                        to={item.path} 
                        key={index} 
                        end 
                        className={({ isActive }) => 
                            `flex items-center py-3 px-3 md:px-4 gap-3 rounded-lg transition-all duration-200 ${
                                isActive 
                                    ? "bg-blue-50 text-blue-600 font-medium border-l-4 border-blue-600" 
                                    : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                            }`
                        }
                    >
                        <img 
                            src={item.icon} 
                            alt={item.name} 
                            className={`w-5 h-5 min-w-[20px] ${item.name === "Dashboard" ? "opacity-90" : "opacity-70"}`}
                        />
                        <span className='md:block hidden text-sm font-medium'>{item.name}</span>
                    </NavLink>
                ))}
            </nav>
            
            {/* Bottom spacer */}
            <div className="p-2 border-t border-gray-100 mt-auto">
                <div className="hidden md:flex items-center gap-3 p-3 text-sm text-gray-500 hover:text-gray-700 cursor-pointer">
                    <img src={assets.settingsIcon} alt="Settings" className="w-4 h-4 opacity-70" />
                    <span>Settings</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar