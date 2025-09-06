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
        const observer = new
    })

    return (
        <section className="w-full px-4 sm:px-6 lg:px-8">
            <div
                className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-br from-[#FFFEFD] to-[#F7D8BC] ring-1 ring-black/5 shadow-sm text-center px-6 sm:px-12 py-10 md:py-12 lg:py-14"
            >
                <h1
                    className={`${playfair.className} bg-gradient-to-r from-[#942828] via-[#433E3E] to-[#645E58] bg-clip-text text-transparent text-3xl md:text-4xl lg:text-4xl font-bold leading-tight`}
                >
                    Ready to Transform Your Study Sessions?
                </h1>

                <p className="mt-6 text-[#666666] text-lg md:text-2xl max-w-2xl mx-auto">
                    Join thousands of students already using BrainLink to study smarter, not harder.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button
                        className="inline-flex items-center gap-3 rounded-2xl bg-[#C0392B] text-white font-semibold px-6 sm:px-8 py-4 shadow-md transition-transform duration-400 hover:scale-105"
                        aria-label="Start Learning Together"
                    >
                        <AutoAwesomeOutlinedIcon fontSize="small" />
                        <span>Start Learning Together</span>
                    </button>

                    <button
                        className="inline-flex items-center gap-2 text-neutral-800 font-semibold hover:gap-3 transition-all"
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