import { Playfair_Display } from "next/font/google";
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});

export default function Features() {

    const cards ='rounded-xl bg-white p-6 flex flex-row gap-5 shadow-sm hover:-translate-y-1 transition-transform duration-300 outline'

    return(
        <div className="flex flex-col items-center justify-center gap-3 mt-60">
            <div className="grid grid-cols-2 grid-rows-2 gap-6 w-350 h-auto">

                <div className={`${cards} bg-gradient-to-r from-[#FCEFE4] to-[#FEF7F1] outline-[#FAE2D0]`}>
                    <div className="w-16 h-15 bg-[#EFD2D2] rounded-xl flex items-center justify-center">
                        <GroupOutlinedIcon />
                    </div>
                    <span className="flex flex-col gap-2">
                        <h5 className={`${playfair.className} font-semibold text-[#333333] text-xl`}>Real-time Collaboration</h5>
                        <p className="text-[#666666]">Study with classmates in beautiful, synchronized study rooms</p>    
                    </span>
                </div>

                <div className={`${cards} bg-gradient-to-r from-[#D8D8D8] to-[#EBEBEB] outline-[#B1B1B1]`}>
                    <div className="w-16 h-15 bg-[#EFD2D2] rounded-xl flex items-center justify-center">
                        <EmojiObjectsOutlinedIcon />
                    </div>
                    <span className="flex flex-col gap-2">
                        <h5 className={`${playfair.className} font-semibold text-[#333333] text-xl`}>AI Study Assistant</h5>
                        <p className="text-[#666666]">PolyBot helps create reviewers and explains complex concepts</p>    
                    </span>
                </div>

                <div className={`${cards} bg-gradient-to-r from-[#CBEDCB] to-[#E0F5E0] outline-[#9CDC9C]`}>
                    <div className="w-16 h-15 bg-[#EFD2D2] rounded-xl flex items-center justify-center">
                        <ElectricBoltOutlinedIcon />
                    </div>
                    <span className="flex flex-col gap-2">
                        <h5 className={`${playfair.className} font-semibold text-[#333333] text-xl`}>Instant Quiz Generation</h5>
                        <p className="text-[#666666]">Generate personalized quizzes with a simple /quiz command</p>    
                    </span>
                </div>

                <div className={`${cards} bg-gradient-to-r from-[#EFD2D2] to-[#F6E8E8] outline-[#DC9D9D]`}>
                    <div className="w-16 h-15 bg-[#EFD2D2] rounded-xl flex items-center justify-center">
                        <DownloadOutlinedIcon />
                    </div>
                    <span className="flex flex-col gap-2">
                        <h5 className={`${playfair.className} font-semibold text-[#333333] text-xl`}>Live Study Materials</h5>
                        <p className="text-[#666666]">Automatic reviewer generation from your study sessions</p>    
                    </span>
                </div>

            </div>
        </div>
    );
}