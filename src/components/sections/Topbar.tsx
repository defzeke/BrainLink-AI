"use client";
import { useTabs } from "../context/TabsContext";

export default function Topbar() {
    const { active, setActive } = useTabs();

    const baseLink =
        "relative inline-flex items-center px-1 py-2 font-semibold text-[#666666] hover:text-[#B32222] transition-colors duration-400 focus:outline-none after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-2 after:w-2 after:rounded-full after:bg-[#B32222] after:opacity-0";

    return (
    <div className="fixed top-0 inset-x-0 z-50 w-full">
        
            <div className="w-full h-16 bg-[#F9F5F1] outline-1 outline-[#ECEEF0] shadow-none grid grid-cols-3 items-center px-6">
                <div className="flex items-center">
                    <img src='/brainlink.svg' alt="Brainlink Logo" className="w-24 h-auto cursor-pointer" draggable='false'/>
                    <span className="font-bold text-xl text-[#B32222] cursor-pointer">BrainLink</span>
                </div>

                    <nav className="flex justify-center gap-6 text-sm" aria-label="Main">
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

                <div className="flex justify-end gap-3 mr-5">
                        <button className="px-4 py-2 rounded-xl hover:bg-[#F2DFDB] transition-colors duration-400 font-semibold cursor-pointer">Sign In</button>
                        <button className="px-4 py-2 rounded-xl bg-[#B32222] text-white text-sm font-semibold shadow-sm transition-all duration-500 ease-out hover:shadow-lg hover:drop-shadow-[0_6px_12px_rgba(179,34,34,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B32222]/40 cursor-pointer">Sign Up</button>
                </div>

            </div>
        </div>
    );
}