import { Playfair_Display } from "next/font/google";
import { useRef, useEffect, useState} from "react";

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});

export default function Mission() {

    const missionRef = useRef<HTMLDivElement>(null);
    const [ isVisible, setIsVisible ] = 

    return (
    <div className="w-full px-2 sm:px-4 lg:px-6 mt-12 md:mt-60 flex justify-center">
            <div className="w-full max-w-[1600px] xl:max-w-[1800px] rounded-xl bg-gradient-to-br from-[#FFFEFE] via-[#FBE9D9] to-[#F7D7BB] ring-1 ring-black/5 shadow-sm px-8 sm:px-14 py-6 md:py-8 lg:py-8">
                <h2 className={`${playfair.className} text-center text-stone-800 text-4xl md:text-4xl font-bold`}>Our Mission</h2>

                <p className="mt-4 text-center text-[#676767] text-lg md:text-xl max-w-5xl mx-auto">
                    Education should be collaborative, engaging, and accessible to everyone. We're building the future of study groups where students can learn together, supported by AI that understands and adapts to their needs.
                </p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
                    <div>
                        <h3 className={`${playfair.className} text-2xl md:text-2xl font-bold text-[#B32222] flex items-center gap-3`}>
                            <span aria-hidden className="text-2xl md:text-2xl">🎯</span>
                            What We Do
                        </h3>
                        <p className="mt-3 text-[#676767] text-base md:text-md leading-6">
                            We create virtual study rooms where students can collaborate in real-time, with AI assistance that helps generate study materials, answer questions, and facilitate meaningful learning experiences.
                        </p>
                    </div>

                    <div>
                        <h3 className={`${playfair.className} text-2xl md:text-2xl font-bold text-[#B32222] flex items-center gap-3`}>
                            <span aria-hidden className="text-2xl md:text-2xl">✨</span>
                            Why It Matters
                        </h3>
                        <p className="mt-3 text-[#676767] text-base md:text-md leading-6">
                            Traditional studying can be isolating and inefficient. By combining peer collaboration with intelligent AI support, we help students learn faster, retain more, and enjoy the process.
                        </p>
                    </div>
                </div>
            </div>
    </div>
    );
}