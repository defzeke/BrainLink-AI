import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});

export default function Hero() {

    const butts = 'px-10 p-3 cursor-pointer font-bold rounded-lg transition-all duration-300 ease-out [will-change:transform,box-shadow] hover:scale-105'


    return (
        <div className={`min-h-[70vh] w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center mt-5 fade-in-up`}>
            <img
                className="h-auto w-50 sm:w-28 md:w-36 lg:w-100"
                src="/brainlink.svg"
                alt="BrainLink Logo"
                draggable="false"
            />
            <div className="mt-4 flex flex-col items-center gap-3 sm:gap-4 md:gap-5">
                <span className={`${playfair.className} text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold tracking-tight -mt-3 sm:-mt-4 md:-mt-5 bg-gradient-to-r from-[#B32222] via-stone-700 to-stone-500 bg-clip-text text-transparent`}>BrainLink AI</span>
                <span className="text-[#B32222] font-bold text-2xl sm:text-3xl md:text-4xl">Collaborative Learning</span>

                <p className="max-w-2xl text-[#666666] text-base sm:text-lg md:text-xl lg:text-2xl mt-2 mb-3 sm:mb-4 md:mb-5 px-2">
                    Study together with AI assistance. Create <span className="text-[#B32222]">reviewers</span> and <span className="text-[#B32222]">quizzes</span> collaboratively with your classmates in beautiful, real-time study rooms.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 w-full sm:w-auto px-4 sm:px-0">
                    <button
                        className={`${butts} bg-gradient-to-r from-[#B32222] to-[#D53838] text-white shadow-none hover:[box-shadow:0_8px_18px_-8px_rgba(213,56,56,0.35),0_0_16px_rgba(179,34,34,0.30)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D53838]/60 text-sm sm:text-base w-full sm:w-auto`}
                    >
                        Get Started Free →
                    </button>
                    <button className={`${butts} outline outline-[#EACAC7] outline-2 font-semibold hover:bg-[#F1E5E1] text-sm sm:text-base w-full sm:w-auto`}>Try Demo Room</button>
                </div>
            </div>
        </div>
    );
}