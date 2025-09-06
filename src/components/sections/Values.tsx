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
            ([entry]) => 
        )
    })

    return (
        <div className="flex flex-col min-h-screen items-center justify-center gap-3">
            <h1 className={`${playfair.className} text-4xl font-bold text-[#333333]`}>Our Values</h1>

            <span className="px-15 py-1 bg-gradient-to-r from-[#B32725] via-[#CA6C5B] to-[#E2B492] rounded mb-10"></span>

            <div className="grid grid-cols-2 grid-rows-2 gap-6 w-350 h-auto">

                <div className="rounded-xl bg-white p-6 flex flex-row gap-5 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-16 h-15 bg-[#EFD2D2] rounded-xl flex items-center justify-center">
                        <GroupOutlinedIcon sx={{ fontSize: 35 }} className="text-[#B12020]"/>
                    </div>
                    <span className="flex flex-col gap-3">
                        <h5 className={`${playfair.className} font-semibold text-[#333333] text-xl`}>Collaboration First</h5>
                        <p className="text-[#666666]">We believe learning is better together. Our platform encourages meaningful peer interactions.</p>    
                    </span>
                </div>

                <div className="rounded-xl bg-white p-6 flex flex-row gap-5 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-16 h-15 bg-[#EFD2D2] rounded-xl flex items-center justify-center">
                        <PsychologyOutlinedIcon sx={{ fontSize: 35 }} className="text-[#B12020]"/>
                    </div>
                    <span className="flex flex-col gap-3">
                        <h5 className={`${playfair.className} font-semibold text-[#333333] text-xl`}>AI Enhancement</h5>
                        <p className="text-[#666666]">Technology should amplify human potential, not replace it. Our AI assists, never dominates.</p>    
                    </span>
                </div>

                <div className="rounded-xl bg-white p-6 flex flex-row gap-5 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-16 h-15 bg-[#EFD2D2] rounded-xl flex items-center justify-center">
                        <AdsClickOutlinedIcon sx={{ fontSize: 35 }} className="text-[#B12020]"/>
                    </div>
                    <span className="flex flex-col gap-3">
                        <h5 className={`${playfair.className} font-semibold text-[#333333] text-xl`}>Focused Learning</h5>
                        <p className="text-[#666666]">Every feature is designed to help students learn more effectively and efficiently.</p>    
                    </span>
                </div>

                <div className="rounded-xl bg-white p-6 flex flex-row gap-5 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-16 h-15 bg-[#EFD2D2] rounded-xl flex items-center justify-center">
                        <FavoriteBorderOutlinedIcon sx={{ fontSize: 35 }} className="text-[#B12020]"/>
                    </div>
                    <span className="flex flex-col gap-3">
                        <h5 className={`${playfair.className} font-semibold text-[#333333] text-xl`}>Student-Centered</h5>
                        <p className="text-[#666666]">Built by educators and students, for students. Your success is our priority.</p>    
                    </span>
                </div>

            </div>
        </div>
    );
}