import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { assets } from '../assets/assets';
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";

const BookIcon = () => (
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
    </svg>
);

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/rooms' },
        { name: 'Trips', path: '/trips' },
        { name: 'Contact', path: '/contact' },
        { name: 'About', path: '/about' },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { openSignIn } = useClerk();
    const { user } = useUser();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Check if the user is logged in and set the menu open state accordingly
        if (location.pathname !== '/') {
            setIsScrolled(true);
            return
        } else {
            setIsScrolled(false);
        }

        setIsScrolled(prev => location.pathname !== '/' ? true : prev);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    // Close menu when route changes
    React.useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    return (
        <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"
            }`}>
            {/* Logo */}
            <Link to="/">
                <img
                    src={assets.logo}
                    alt="logo"
                    className={`h-9 transition-all duration-300 ${isScrolled ? "invert opacity-80" : ""}`}
                />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {navLinks.map((link, i) => (
                    <Link
                        key={i}
                        to={link.path}
                        className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"
                            } ${location.pathname === link.path ? (isScrolled ? "font-medium" : "font-medium") : ""
                            }`}
                    >
                        {link.name}
                        <div className={`${isScrolled ? "bg-gray-700" : "bg-white"
                            } h-0.5 w-0 group-hover:w-full transition-all duration-300 ${location.pathname === link.path ? "w-full" : ""
                            }`} />
                    </Link>
                ))}
                <button
                    onClick={() => navigate('/owner')}
                    className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'border-gray-700 text-gray-700' : 'border-white text-white'
                        } transition-all hover:bg-black hover:text-white hover:border-black`}
                >
                    Dashboard
                </button>
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-4">
                <button className="focus:outline-none">
                    <img
                        src={assets.searchIcon}
                        alt="search"
                        className={`${isScrolled ? 'invert' : ''} h-5 w-5 transition-all duration-300`}
                    />
                </button>

                {user ? (
                    <div className="ml-4">
                        <UserButton>
                            <UserButton.MenuItems>
                                <UserButton.Action
                                    label="My Bookings"
                                    labelIcon={<BookIcon />}
                                    onClick={() => navigate('/my-bookings')}
                                />
                            </UserButton.MenuItems>
                        </UserButton>
                    </div>
                ) : (
                    <button
                        onClick={openSignIn}
                        className="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-300 hover:bg-gray-800"
                    >
                        Login
                    </button>
                )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
                {user && (
                    <div className="mr-2">
                        <UserButton>
                            <UserButton.MenuItems>
                                <UserButton.Action
                                    label="My Bookings"
                                    labelIcon={<BookIcon />}
                                    onClick={() => navigate('/my-bookings')}
                                />
                            </UserButton.MenuItems>
                        </UserButton>
                    </div>
                )}
                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="focus:outline-none"
                    aria-label="Open menu"
                >
                    <img
                        src={assets.menuIcon}
                        alt="menu"
                        className={`${isScrolled ? 'invert' : ''} h-6 w-6`}
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-8 font-medium text-gray-800 transition-all duration-300 z-50 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`}>
                <button
                    className="absolute top-4 right-4 p-2 focus:outline-none"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                >
                    <img
                        src={assets.closeIcon}
                        alt="close-menu"
                        className="h-6 w-6"
                    />
                </button>

                {navLinks.map((link, i) => (
                    <Link
                        key={i}
                        to={link.path}
                        className={`text-lg hover:text-indigo-500 transition-colors duration-300 ${location.pathname === link.path ? "text-indigo-600 font-semibold" : ""
                            }`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}

                <div className="flex flex-col items-center gap-4 mt-4">
                    {user && (
                        <button
                            onClick={() => {
                                navigate('/owner');
                                setIsMenuOpen(false);
                            }}
                            className="border border-gray-700 px-6 py-2 text-sm rounded-full cursor-pointer transition-all hover:bg-gray-100"
                        >
                            Dashboard
                        </button>
                    )}
                    {!user && (
                        <button
                            onClick={() => {
                                openSignIn();
                                setIsMenuOpen(false);
                            }}
                            className="bg-black text-white px-8 py-3 rounded-full transition-all duration-300 hover:bg-gray-800 text-sm"
                        >
                            Login
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;