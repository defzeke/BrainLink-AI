import { Playfair_Display } from "next/font/google";
import { useRef, useEffect, useState } from 'react';

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});

export default function Hero() {

    const butts = 'px-10 p-3 cursor-pointer font-bold rounded-lg transition-all duration-300 ease-out [will-change:transform,box-shadow] hover:scale-105'

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(false);
        const timeout = setTimeout(() => setAnimate(true), 10);
        return () => clearTimeout(timeout);
    }, []);
        
    return (
        <div className="min-h-[70vh] w-full flex flex-col items-center justify-center px-4 text-center mt-5 ${animate ? 'animate-fade-in-up' : ''">
            <img
                className="h-auto w-24 sm:w-32 md:w-40 lg:w-100"
                src="/brainlink.svg"
                alt="BrainLink Logo"
                draggable="false"
            />
            <div className="mt-4 flex flex-col items-center gap-5">
                <span className={`${playfair.className} text-4xl sm:text-5xl md:text-8xl font-semibold tracking-tight -mt-5 bg-gradient-to-r from-[#B32222] via-stone-700 to-stone-500 bg-clip-text text-transparent`}>BrainLink AI</span>
                <span className="text-[#B32222] font-bold text-4xl sm:text-3xl md:text-4xl">Collaborative Learning</span>

                <p className="max-w-2xl text-[#666666] text-2xl mt-2 mb-5">
                    Study together with AI assistance. Create <span className="text-[#B32222]">reviewers</span> and <span className="text-[#B32222]">quizzes</span> collaboratively with your classmates in beautiful, real-time study rooms.
                </p>

                <div className="flex flex-row gap-5">
                    <button
                        className={`${butts} bg-gradient-to-r from-[#B32222] to-[#D53838] text-white shadow-none hover:[box-shadow:0_8px_18px_-8px_rgba(213,56,56,0.35),0_0_16px_rgba(179,34,34,0.30)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D53838]/60`}
                    >
                        Get Started Free →
                    </button>
                    <button className={`${butts} outline outline-[#EACAC7] outline-2 font-semibold hover:bg-[#F1E5E1]`}>Try Demo Room</button>
                </div>
            </div>
        </div>
    );
}