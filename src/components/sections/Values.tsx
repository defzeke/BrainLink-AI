import { Playfair_Display } from "next/font/google";
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useRef, useEffect, useState } from "react";

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});

export default function Values() {

    const valuesRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const ref = valuesRef.current;
        if (!ref) return;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.5 }
        );
        observer.observe(ref)
        return () => observer.disconnect()
    }, []);

    return (
        <div ref={valuesRef} className={`flex flex-col min-h-screen items-center justify-center gap-3 px-4 sm:px-6 ${isVisible ? "fade-in-up" : "opacity-0"}`}>
            <h1  className={`${playfair.className} text-3xl sm:text-4xl font-bold text-[#333333] text-center`}>Our Values</h1>

            <span className={`px-15 py-1 bg-gradient-to-r from-[#B32725] via-[#CA6C5B] to-[#E2B492] rounded mb-6 sm:mb-10`}></span>

            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-[350px] md:max-w-[700px] lg:max-w-[900px]`}>

                <div className="rounded-xl bg-white p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-5 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-14 h-14 sm:w-16 sm:h-15 bg-[#EFD2D2] rounded-xl flex items-center justify-center flex-shrink-0">
                        <GroupOutlinedIcon sx={{ fontSize: { xs: 30, sm: 35 } }} className="text-[#B12020]"/>
                    </div>
                    <span className="flex flex-col gap-2 sm:gap-3">
                        <h5 className={`${playfair.className} font-semibold text-[#333333] text-lg sm:text-xl`}>Collaboration First</h5>
                        <p className="text-[#666666] text-sm sm:text-base">We believe learning is better together. Our platform encourages meaningful peer interactions.</p>    
                    </span>
                </div>

                <div className="rounded-xl bg-white p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-5 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-14 h-14 sm:w-16 sm:h-15 bg-[#EFD2D2] rounded-xl flex items-center justify-center flex-shrink-0">
                        <PsychologyOutlinedIcon sx={{ fontSize: { xs: 30, sm: 35 } }} className="text-[#B12020]"/>
                    </div>
                    <span className="flex flex-col gap-2 sm:gap-3">
                        <h5 className={`${playfair.className} font-semibold text-[#333333] text-lg sm:text-xl`}>AI Enhancement</h5>
                        <p className="text-[#666666] text-sm sm:text-base">Technology should amplify human potential, not replace it. Our AI assists, never dominates.</p>    
                    </span>
                </div>

                <div className="rounded-xl bg-white p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-5 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-14 h-14 sm:w-16 sm:h-15 bg-[#EFD2D2] rounded-xl flex items-center justify-center flex-shrink-0">
                        <AdsClickOutlinedIcon sx={{ fontSize: { xs: 30, sm: 35 } }} className="text-[#B12020]"/>
                    </div>
                    <span className="flex flex-col gap-2 sm:gap-3">
                        <h5 className={`${playfair.className} font-semibold text-[#333333] text-lg sm:text-xl`}>Focused Learning</h5>
                        <p className="text-[#666666] text-sm sm:text-base">Every feature is designed to help students learn more effectively and efficiently.</p>    
                    </span>
                </div>

                <div className="rounded-xl bg-white p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-5 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-14 h-14 sm:w-16 sm:h-15 bg-[#EFD2D2] rounded-xl flex items-center justify-center flex-shrink-0">
                        <FavoriteBorderOutlinedIcon sx={{ fontSize: { xs: 30, sm: 35 } }} className="text-[#B12020]"/>
                    </div>
                    <span className="flex flex-col gap-2 sm:gap-3">
                        <h5 className={`${playfair.className} font-semibold text-[#333333] text-lg sm:text-xl`}>Student-Centered</h5>
                        <p className="text-[#666666] text-sm sm:text-base">Built by educators and students, for students. Your success is our priority.</p>    
                    </span>
                </div>

            </div>
        </div>
    );
}