'use client';
import { Playfair_Display } from "next/font/google";
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import { useRef, useEffect, useState } from "react";

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});

export default function Cta() {

    const ctaRef = useRef<HTMLDivElement>(null);
    const [isVisible, setisVisible] = useState(false)

    useEffect(() => {
        const ref = ctaRef.current;
        if (!ref) return;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setisVisible(true);
                    observer.disconnect();
                }
            },
            {threshold: 0.5}
        );
        observer.observe(ref)
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ctaRef} className={`w-full px-4 sm:px-6 lg:px-8 mt-16 sm:mt-0 mb-8 sm:mb-12 md:mb-16 ${isVisible ? "fade-in-up" : "opacity-0"}`}>
            <div
                className="mx-auto max-w-7xl rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#FFFEFD] to-[#F7D8BC] ring-1 ring-black/5 shadow-sm text-center px-4 sm:px-8 md:px-12 py-8 sm:py-10 md:py-12 lg:py-14"
            >
                <h1
                    className={`${playfair.className} bg-gradient-to-r from-[#942828] via-[#433E3E] to-[#645E58] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl font-bold leading-tight px-2`}
                >
                    Ready to Transform Your Study Sessions?
                </h1>

                <p className="mt-4 sm:mt-5 md:mt-6 text-[#666666] text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto px-2">
                    Join thousands of students already using BrainLink to study smarter, not harder.
                </p>

                <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 md:gap-6">
                    <button
                        className="inline-flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl bg-[#C0392B] text-white font-semibold px-5 sm:px-6 md:px-8 py-3 sm:py-4 shadow-md transition-transform duration-400 hover:scale-105 text-sm sm:text-base w-full sm:w-auto"
                        aria-label="Start Learning Together"
                    >
                        <AutoAwesomeOutlinedIcon fontSize="small" />
                        <span>Start Learning Together</span>
                    </button>

                    <button
                        className="inline-flex items-center gap-2 text-neutral-800 font-semibold hover:gap-3 transition-all text-sm sm:text-base"
                        aria-label="Learn More"
                    >
                        <span>Learn More</span>
                        <span aria-hidden>→</span>
                    </button>
                </div>
            </div>
        </section>
    );
}