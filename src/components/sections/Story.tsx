import { Playfair_Display } from "next/font/google";
import { useRef, useEffect, useState } from "react";

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});

export default function Story() {

    const storyRef = useRef<HTMLDivElement>(null);
    const [ isVisible, setIsVisible ] = useState(false)

    useEffect(() => {
        const ref = storyRef.current;
        
    }, []);

    return(
        <div className="p-10 bg-gradient-to-r from-[#FDF7F1] to-[#FEFBF8] rounded-xl max-w-4xl mx-auto shadow-lg">
            <h2 className={`${playfair.className} text-center text-3xl md:text-4xl font-bold text-gray-900 mb-6`}>Our Story</h2>
            <div className="flex flex-col gap-4 text-left">
                <p className="text-[#6D6D6D] text-lg leading-8">Brainlink was born from a simple observation: students learn better when they learn together. During the pandemic, we saw how isolation affected learning outcomes and student engagement.</p>
                <p className="text-[#6D6D6D] text-lg leading-8">Traditional video calls felt impersonal and study groups were hard to organize effectively. We knew there had to be a better way to bring students together in meaningful, productive study sessions.</p>
                <p className="text-[#6D6D6D] text-lg leading-8">That's when we decided to build something different - a platform that combines the best of collaborative learning with intelligent AI assistance. A place where students can connect, learn from each other, and get personalized help when they need it.</p>
                <p className="text-red-700 font-semibold text-lg md:text-xl leading-8 mt-2">Today, BrainLink helps thousands of students study more effectively, building lasting friendships and achieving better academic outcomes together.</p>
            </div>
        </div>
    );
}