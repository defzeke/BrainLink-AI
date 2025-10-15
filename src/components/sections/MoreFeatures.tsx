import { Playfair_Display } from "next/font/google";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import { useRef, useEffect, useState } from "react";


const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});

export default function MoreFeats() {

    const cards = 'bg-white p-4 sm:p-5 w-full sm:w-60 md:w-80 rounded-xl shadow-sm hover:-translate-y-1 transition-transform duration-300'
    const featsRef = useRef<HTMLDivElement>(null);
    const [ isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const ref = featsRef.current;
        if (!ref) return;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );
        observer.observe(ref)
        return () => observer.disconnect() 
    }), [];

    return (
        <div ref={featsRef} className={`flex flex-col min-h-screen items-center justify-center gap-3 px-4 sm:px-6 ${isVisible ? "fade-in-up" : "opacity-0"}`}>
            <h1  className={`${playfair.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] text-center`}>More Amazing Features</h1>

            <span className={`px-15 py-1 bg-gradient-to-r from-[#B32725] via-[#CA6C5B] to-[#E2B492] rounded mb-6 sm:mb-10`}></span>
         
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-[350px] sm:max-w-[700px] lg:max-w-[1400px]`}>
                <div className={`${cards} flex items-center justify-center text-center flex-col gap-3 py-6 sm:py-7`}>
                    <span className="p-3 bg-gradient-to-br from-[#B52323] to-[#D53838] w-14 h-14 sm:w-15 sm:h-15 rounded-xl flex items-center justify-center">
                        <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: { xs: 35, sm: 40 } }} className="text-white"/>
                    </span>

                    <h1 className={`${playfair.className} text-base sm:text-lg font-semibold text-[#333333]`}>Smart Chat System</h1>
                    <p className="text-[#666666] text-sm sm:text-base">Enhanced messaging with AI-powered features</p>
                </div>  

                <div className={`${cards} flex items-center justify-center text-center flex-col gap-3 py-6 sm:py-7`}>
                    <span className="p-3 bg-gradient-to-br from-[#B52323] to-[#D53838] w-14 h-14 sm:w-15 sm:h-15 rounded-xl flex items-center justify-center">
                        <AccessTimeOutlinedIcon sx={{ fontSize: { xs: 35, sm: 40 } }} className="text-white"/>
                    </span>

                    <h1 className={`${playfair.className} text-base sm:text-lg font-semibold text-[#333333]`}>Session History</h1>
                    <p className="text-[#666666] text-sm sm:text-base">Keep track of all your study sessions and progress</p>
                </div>  

                <div className={`${cards} flex items-center justify-center text-center flex-col gap-3 py-6 sm:py-7`}>
                    <span className="p-3 bg-gradient-to-br from-[#B52323] to-[#D53838] w-14 h-14 sm:w-15 sm:h-15 rounded-xl flex items-center justify-center">
                        <ShieldOutlinedIcon sx={{ fontSize: { xs: 35, sm: 40 } }} className="text-white"/>
                    </span>

                    <h1 className={`${playfair.className} text-base sm:text-lg font-semibold text-[#333333]`}>Secure & Private</h1>
                    <p className="text-[#666666] text-sm sm:text-base">Your data and conversations are always protected</p>
                </div>  

                <div className={`${cards} flex items-center justify-center text-center flex-col gap-3 py-6 sm:py-7`}>
                    <span className="p-3 bg-gradient-to-br from-[#B52323] to-[#D53838] w-14 h-14 sm:w-15 sm:h-15 rounded-xl flex items-center justify-center">
                        <MenuBookOutlinedIcon sx={{ fontSize: { xs: 35, sm: 40 } }} className="text-white"/>
                    </span>

                    <h1 className={`${playfair.className} text-base sm:text-lg font-semibold text-[#333333]`}>Multi-Subject Support</h1>
                    <p className="text-[#666666] text-sm sm:text-base">Perfect for any subject or academic level</p>
                </div>  

            </div>
        </div>
    );
}