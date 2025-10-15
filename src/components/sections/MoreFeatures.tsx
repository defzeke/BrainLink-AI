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

    const cards = 'bg-white p-5 w-60 rounded-xl shadow-sm hover:-translate-y-1 transition-transform duration-300'
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
        <div ref={featsRef} className={`flex flex-col min-h-screen items-center justify-center gap-3 px-4 md:px-6 lg:px-8 ${isVisible ? "fade-in-up" : "opacity-0"}`}>
            <h1  className={`${playfair.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] text-center`}>More Amazing Features</h1>

            <span className={`px-15 py-1 bg-gradient-to-r from-[#B32725] via-[#CA6C5B] to-[#E2B492] rounded mb-6 md:mb-10`}></span>
         
            <div className={`flex flex-col md:flex-row gap-6 w-full max-w-7xl justify-center items-center md:items-stretch`}>
                <div className={`${cards} flex items-center justify-center text-center flex-col gap-3 w-full max-w-sm md:w-80 py-7`}>
                    <span className="p-3 bg-gradient-to-br from-[#B52323] to-[#D53838] w-15 h-15 rounded-xl flex items-center justify-center">
                        <ChatBubbleOutlineOutlinedIcon fontSize="large" className="text-white"/>
                    </span>

                    <h1 className={`${playfair.className} text-lg font-semibold text-[#333333]`}>Smart Chat System</h1>
                    <p className="text-[#666666]">Enhanced messaging with AI-powered features</p>
                </div>  

                <div className={`${cards} flex items-center justify-center text-center flex-col gap-3 w-full max-w-sm md:w-80 py-7`}>
                    <span className="p-3 bg-gradient-to-br from-[#B52323] to-[#D53838] w-15 h-15 rounded-xl flex items-center justify-center">
                        <AccessTimeOutlinedIcon fontSize="large" className="text-white"/>
                    </span>

                    <h1 className={`${playfair.className} text-lg font-semibold text-[#333333]`}>Session History</h1>
                    <p className="text-[#666666]">Keep track of all your study sessions and progress</p>
                </div>  

                <div className={`${cards} flex items-center justify-center text-center flex-col gap-3 w-full max-w-sm md:w-80 py-7`}>
                    <span className="p-3 bg-gradient-to-br from-[#B52323] to-[#D53838] w-15 h-15 rounded-xl flex items-center justify-center">
                        <ShieldOutlinedIcon fontSize="large" className="text-white"/>
                    </span>

                    <h1 className={`${playfair.className} text-lg font-semibold text-[#333333]`}>Secure & Private</h1>
                    <p className="text-[#666666]">Your data and conversations are always protected</p>
                </div>  

                <div className={`${cards} flex items-center justify-center text-center flex-col gap-3 w-full max-w-sm md:w-80 py-7`}>
                    <span className="p-3 bg-gradient-to-br from-[#B52323] to-[#D53838] w-15 h-15 rounded-xl flex items-center justify-center">
                        <MenuBookOutlinedIcon fontSize="large" className="text-white"/>
                    </span>

                    <h1 className={`${playfair.className} text-lg font-semibold text-[#333333]`}>Multi-Subject Support</h1>
                    <p className="text-[#666666]">Perfect for any subject or academic level</p>
                </div>  

            </div>
        </div>
    );
}