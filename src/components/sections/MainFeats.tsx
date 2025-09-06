import { Playfair_Display } from "next/font/google";
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import { useRef, useEffect, useState } from "react";

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});

export default function Features() {

    const cards ='rounded-xl bg-white p-6 flex flex-row gap-5 shadow-sm hover:-translate-y-1 transition-transform duration-300 outline p-15'
    const featRef = useRef<HTMLDivElement>(null);
    const [ isVisible, setIsVisible ] = useState(false);

    useEffect(() => {
        const ref = featRef.current;
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
    }, []);

    return(
        <div ref={featRef} className={`flex flex-col items-center justify-center gap-3 mt-60 ${isVisible ? "fade-in-up" : "opacity-0"}`}>
            <div className="grid grid-cols-2 grid-rows-2 gap-6 w-350 h-auto">

                <div className={`${cards} bg-gradient-to-r from-[#FCEFE4] to-[#FEF7F1] outline-[#FAE2D0]`}>
                    <div className="w-16 h-16 bg-[#EDC6BD] rounded-xl flex items-center justify-center">
                        <GroupOutlinedIcon className="text-[#B12020]" fontSize="large"/>
                    </div>
                    <div className="flex flex-col">
                        <span className="flex flex-col gap-2">
                            <h5 className={`${playfair.className} font-semibold text-[#333333] text-xl`}>Real-time Collaboration</h5>
                            <p className="text-[#666666]">Study with classmates in beautiful, synchronized study rooms</p>    
                        </span>
                        <ul className="flex flex-col gap-2 mt-4 -ml-20 mt-10">
                            <li className="flex items-center gap-2">
                                <TaskAltOutlinedIcon className="text-[#B12020]" fontSize="medium" />
                                <span className="text-[#666666] text-base">Live chat with classmates</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <TaskAltOutlinedIcon className="text-[#B12020]" fontSize="medium" />
                                <span className="text-[#666666] text-base">Real-time message synchronization</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <TaskAltOutlinedIcon className="text-[#B12020]" fontSize="medium" />
                                <span className="text-[#666666] text-base">See who's online and active</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <TaskAltOutlinedIcon className="text-[#B12020]" fontSize="medium" />
                                <span className="text-[#666666] text-base">Join rooms with simple class codes</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={`${cards} bg-gradient-to-r from-[#D8D8D8] to-[#EBEBEB] outline-[#B1B1B1]`}>
                    <div className="w-16 h-16 bg-[#D1B4B4] rounded-xl flex items-center justify-center">
                        <EmojiObjectsOutlinedIcon className="text-[#B12020]" fontSize="large"/>
                    </div>
                    <div className="flex flex-col">
                        <span className="flex flex-col gap-2">
                            <h5 className={`${playfair.className} font-semibold text-[#333333] text-xl`}>AI Study Assistant</h5>
                            <p className="text-[#666666]">BrainLink helps create reviewers and explains complex concepts</p>    
                        </span>
                        <ul className="flex flex-col gap-2 mt-4 -ml-20 mt-10">
                            <li className="flex items-center gap-2">
                                <TaskAltOutlinedIcon className="text-[#B12020]" fontSize="medium" />
                                <span className="text-[#666666] text-base">Intelligent Q&A assistance</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <TaskAltOutlinedIcon className="text-[#B12020]" fontSize="medium" />
                                <span className="text-[#666666] text-base">Concept explanation and clarification</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <TaskAltOutlinedIcon className="text-[#B12020]" fontSize="medium" />
                                <span className="text-[#666666] text-base">Automatic study material generation</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <TaskAltOutlinedIcon className="text-[#B12020]" fontSize="medium" />
                                <span className="text-[#666666] text-base">Personalized learning recommendations</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={`${cards} bg-gradient-to-r from-[#CBEDCB] to-[#E0F5E0] outline-[#9CDC9C]`}>
                    <div className="w-16 h-16 bg-[#C7C4AA] rounded-xl flex items-center justify-center">
                        <ElectricBoltOutlinedIcon className="text-[#B12020]" fontSize="large"/>
                    </div>
                    <div className="flex flex-col">
                        <span className="flex flex-col gap-2">
                            <h5 className={`${playfair.className} font-semibold text-[#333333] text-xl`}>Instant Quiz Generation</h5>
                            <p className="text-[#666666]">Generate personalized quizzes with a simple /quiz command</p>    
                        </span>
                        <ul className="flex flex-col gap-2 mt-4 -ml-20 mt-10">
                            <li className="flex items-center gap-2">
                                <TaskAltOutlinedIcon className="text-[#B12020]" fontSize="medium" />
                                <span className="text-[#666666] text-base">Command-based quiz creation</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <TaskAltOutlinedIcon className="text-[#B12020]" fontSize="medium" />
                                <span className="text-[#666666] text-base">Questions based on your discussions</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <TaskAltOutlinedIcon className="text-[#B12020]" fontSize="medium" />
                                <span className="text-[#666666] text-base">Multiple difficulty levels</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <TaskAltOutlinedIcon className="text-[#B12020]" fontSize="medium" />
                                <span className="text-[#666666] text-base">Immediate feedback and explanations</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={`${cards} bg-gradient-to-r from-[#EFD2D2] to-[#F6E8E8] outline-[#DC9D9D]`}>
                    <div className="w-16 h-16 bg-[#E3B0B0] rounded-xl flex items-center justify-center">
                        <DownloadOutlinedIcon className="text-[#B12020]" fontSize="large"/>
                    </div>
                    <div className="flex flex-col">
                        <span className="flex flex-col gap-2">
                            <h5 className={`${playfair.className} font-semibold text-[#333333] text-xl`}>Live Study Materials</h5>
                            <p className="text-[#666666]">Automatic reviewer generation from your study sessions</p>    
                        </span>
                        <ul className="flex flex-col gap-2 mt-4 -ml-20 mt-10">
                            <li className="flex items-center gap-2">
                                <TaskAltOutlinedIcon className="text-[#B12020]" fontSize="medium" />
                                <span className="text-[#666666] text-base">Real-time note compilation</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <TaskAltOutlinedIcon className="text-[#B12020]" fontSize="medium" />
                                <span className="text-[#666666] text-base">Key points extraction</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <TaskAltOutlinedIcon className="text-[#B12020]" fontSize="medium" />
                                <span className="text-[#666666] text-base">Downloadable study guides</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <TaskAltOutlinedIcon className="text-[#B12020]" fontSize="medium" />
                                <span className="text-[#666666] text-base">Topic-based organization</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}