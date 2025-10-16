"use client";

import { useTabs } from "../context/TabsContext";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';


export default function Topbar() {
    const { active, setActive } = useTabs();
    const { user, loading, signOut } = useAuth();
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const baseLink =
        "relative inline-flex items-center px-1 py-2 font-semibold text-[#666666] hover:text-[#B32222] transition-colors duration-400 focus:outline-none after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-2 after:w-2 after:rounded-full after:bg-[#B32222] after:opacity-0";

    const mobileLink = "block px-4 py-3 font-semibold text-[#666666] hover:text-[#B32222] hover:bg-[#F2DFDB] transition-colors duration-400";

    // Debug: Log user state
    useEffect(() => {
        console.log('Topbar - Loading:', loading, 'User:', user);
    }, [user, loading]);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSignOut = async () => {
        await signOut();
        setIsDropdownOpen(false);
        router.push('/');
    };

    return (
    <div className="fixed top-0 inset-x-0 z-50 w-full">
        
            <div className="w-full h-16 bg-[#F9F5F1] outline-1 outline-[#ECEEF0] shadow-none flex items-center justify-between px-6">
                {/* Mobile Hamburger - Left side on mobile */}
                <button 
                    className="md:hidden p-2 text-[#666666] hover:text-[#B32222] transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                </button>

                {/* Logo - Right on mobile, left on desktop */}
                <div className="flex items-center order-last md:order-first">
                    <img src='/brainlink.svg' alt="Brainlink Logo" className="w-16 sm:w-24 h-auto cursor-pointer" draggable='false'/>
                    <span className="hidden sm:block font-bold text-lg sm:text-xl text-[#B32222] cursor-pointer">BrainLink</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex justify-center gap-6 text-sm" aria-label="Main">
                    <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); setActive("home"); }}
                        className={`${baseLink} ${active === "home" ? "text-[#B32222] after:opacity-100" : ""}`}
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); setActive("about"); }}
                        className={`${baseLink} ${active === "about" ? "text-[#B32222] after:opacity-100" : ""}`}
                    >
                        About
                    </a>
                    <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); setActive("feature"); }}
                        className={`${baseLink} ${active === "feature" ? "text-[#B32222] after:opacity-100" : ""}`}
                    >
                        Feature
                    </a>
                    <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); setActive("study"); }}
                        className={`${baseLink} ${active === "study" ? "text-[#B32222] after:opacity-100" : ""}`}
                    >
                        Study Room
                    </a>
                </nav>

                {/* Desktop Buttons / User Profile */}
                <div className="hidden md:flex justify-end gap-3 mr-5">
                    {loading ? (
                        <div className="w-20 h-10 bg-gray-200 animate-pulse rounded-xl"></div>
                    ) : user ? (
                        <div className="relative" ref={dropdownRef}>
                            <button 
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#F2DFDB] transition-colors duration-400 font-semibold cursor-pointer"
                            >
                                <PersonIcon className="text-[#B32222]" />
                                <span>{user.name}</span>
                            </button>
                            
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                                    <div className="px-4 py-2 border-b border-gray-100">
                                        <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                                        <p className="text-xs text-gray-500 truncate">{user.email}</p>
                                    </div>
                                    <button
                                        onClick={handleSignOut}
                                        className="w-full flex items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-[#F2DFDB] transition-colors duration-200"
                                    >
                                        <LogoutIcon fontSize="small" />
                                        Sign Out
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <button 
                                onClick={() => router.push("/login")}
                                className="px-4 py-2 rounded-xl hover:bg-[#F2DFDB] transition-colors duration-400 font-semibold cursor-pointer">Sign In</button>
                            <button 
                                onClick={() => router.push("/register")}
                                className="px-4 py-2 rounded-xl bg-[#B32222] text-white text-sm font-semibold shadow-sm transition-all duration-500 ease-out hover:shadow-lg hover:drop-shadow-[0_6px_12px_rgba(179,34,34,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B32222]/40 cursor-pointer">Sign Up</button>
                        </>
                    )}
                </div>
            </div>

            {/* Mobile Menu Overlay with Blur */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 backdrop-blur-sm bg-black/20 z-40 md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            {/* Mobile Menu - Side Drawer */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-[#F9F5F1] shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    {/* Menu Header */}
                    <div className="flex items-center justify-between p-4 border-b border-[#ECEEF0]">
                        <div className="flex items-center gap-2">
                            <img src='/brainlink.svg' alt="Brainlink Logo" className="w-12 h-auto" draggable='false'/>
                            <span className="font-bold text-lg text-[#B32222]">BrainLink</span>
                        </div>
                        <button 
                            onClick={() => setIsMenuOpen(false)}
                            className="p-2 text-[#666666] hover:text-[#B32222] transition-colors"
                            aria-label="Close menu"
                        >
                            <CloseIcon />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-col flex-1 py-4">
                        <a
                            href="#"
                            onClick={(e) => { 
                                e.preventDefault(); 
                                setActive("home"); 
                                setIsMenuOpen(false);
                            }}
                            className={`${mobileLink} ${active === "home" ? "text-[#B32222] bg-[#F2DFDB]" : ""}`}
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            onClick={(e) => { 
                                e.preventDefault(); 
                                setActive("about"); 
                                setIsMenuOpen(false);
                            }}
                            className={`${mobileLink} ${active === "about" ? "text-[#B32222] bg-[#F2DFDB]" : ""}`}
                        >
                            About
                        </a>
                        <a
                            href="#"
                            onClick={(e) => { 
                                e.preventDefault(); 
                                setActive("feature"); 
                                setIsMenuOpen(false);
                            }}
                            className={`${mobileLink} ${active === "feature" ? "text-[#B32222] bg-[#F2DFDB]" : ""}`}
                        >
                            Feature
                        </a>
                        <a
                            href="#"
                            onClick={(e) => { 
                                e.preventDefault(); 
                                setActive("study"); 
                                setIsMenuOpen(false);
                            }}
                            className={`${mobileLink} ${active === "study" ? "text-[#B32222] bg-[#F2DFDB]" : ""}`}
                        >
                            Study Room
                        </a>
                    </nav>

                    {/* Auth Buttons / User Profile */}
                    <div className="flex flex-col gap-3 p-4 border-t border-[#ECEEF0]">
                        {loading ? (
                            <div className="w-full h-10 bg-gray-200 animate-pulse rounded-xl"></div>
                        ) : user ? (
                            <>
                                <div className="px-4 py-3 bg-[#F2DFDB] rounded-xl">
                                    <div className="flex items-center gap-2 mb-1">
                                        <PersonIcon className="text-[#B32222]" fontSize="small" />
                                        <p className="font-semibold text-gray-900">{user.name}</p>
                                    </div>
                                    <p className="text-xs text-gray-600 truncate">{user.email}</p>
                                </div>
                                <button 
                                    onClick={() => { handleSignOut(); setIsMenuOpen(false); }}
                                    className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-400 font-semibold cursor-pointer"
                                >
                                    <LogoutIcon fontSize="small" />
                                    Sign Out
                                </button>
                            </>
                        ) : (
                            <>
                                <button 
                                    onClick={() => { router.push("/login"); setIsMenuOpen(false); }}
                                    className="w-full px-4 py-2 rounded-xl hover:bg-[#F2DFDB] transition-colors duration-400 font-semibold cursor-pointer">Sign In</button>
                                <button 
                                    onClick={() => { router.push("/register"); setIsMenuOpen(false); }}
                                    className="w-full px-4 py-2 rounded-xl bg-[#B32222] text-white text-sm font-semibold shadow-sm transition-all duration-500 ease-out hover:shadow-lg hover:drop-shadow-[0_6px_12px_rgba(179,34,34,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B32222]/40 cursor-pointer">Sign Up</button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}