"use client";
import { Playfair_Display } from "next/font/google";
import { useRef, useEffect, useState } from "react";

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});

export default function Benefits() {

    const boxes = 'w-100 h-70 bg-white rounded-lg shadow-sm outline transition-all duration-400 hover:-translate-y-2'
    const headingRef = useRef<HTMLHeadingElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const ref = headingRef.current;
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
        observer.observe(ref);
        return () => observer.disconnect();
    }, []);

    return(
        <div ref={headingRef} className={`flex flex-col min-h-screen items-center justify-center -mt-10 gap-3 ${isVisible ? "fade-in-up" : "opacity-0"}`}>
            <h1 className={`${playfair.className} text-4xl font-bold text-[#333333]`}
            >Why Choose BrainLink?</h1>

            <span
                className={`px-15 py-1 bg-gradient-to-r from-[#B32725] via-[#CA6C5B] to-[#E2B492] rounded mb-10`}
            ></span>

            <div className={`flex flex-row gap-6`}>
                <div className={`${boxes} outline-[#FAE3D1] bg-gradient-to-r from-[#FAE3D1] to-[#FEF7F1] flex items-center justify-center p-8 text-center`}>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <img src='/realtime.svg' alt='Realtime' className="w-16 h-16"/>
                        <h6 className={`${playfair.className} font-semibold tracking-wide text-[#333333] text-2xl`}>Real-time Collaboration</h6>
                        <p className="text-[#6C6C6B] text-lg">Study with classmates in beautiful real-time rooms. Everyone sees the same conversation and materials.</p>
                    </div>
                </div>
                <div className={`${boxes} outline-[#B8B8B8] bg-gradient-to-r from-[#D9D9D9] to-[#EBEBEB] flex items-center justify-center p-8 text-center`}>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <img src='/brain.svg' alt='Realtime' className="w-16 h-16"/>
                        <h6 className={`${playfair.className} font-semibold tracking-wide text-[#333333] text-2xl`}>AI Study Assistant</h6>
                        <p className="text-[#6C6C6B] text-lg">BrainLink helps create reviewers, explains complex concepts, and generates personalized quizzes.</p>
                    </div>
                </div>
                <div className={`${boxes} outline-[#BAE7BA] bg-gradient-to-r from-[#CBEDCB] to-[#DFF4DF] flex items-center justify-center p-8 text-center`}>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <img src='/instant.svg' alt='Realtime' className="w-16 h-16"/>
                        <h6 className={`${playfair.className} font-semibold tracking-wide text-[#333333] text-2xl`}>Instant Resources</h6>
                        <p className="text-[#6C6C6B] text-lg">Generate instant quizzes and comprehensive study materials from your discussions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}