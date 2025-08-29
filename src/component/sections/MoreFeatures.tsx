import { Playfair_Display } from "next/font/google";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';


const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});

export default function MoreFeats() {

    const cards = 'bg-white p-10 rounded-xl shadow-sm flex items-center justify-center flex-col'

    return (
        <div className="flex flex-col min-h-screen items-center justify-center gap-3">
            <h1 className={`${playfair.className} text-4xl font-bold text-[#333333]`}>More Amazing Features</h1>

            <span className="px-15 py-1 bg-gradient-to-r from-[#B32725] via-[#CA6C5B] to-[#E2B492] rounded mb-10"></span>

            <div className="grid grid-cols-4 gap-4 max-w-4xl w-full mx-auto">
                <div className={`${cards}`}>
                    <span className="bg-gradient-to-br from-[#B62424] to-[#D53838] p-2 rounded-xl"><ChatBubbleOutlineOutlinedIcon className="text-[#fff]" fontSize="medium"/></span>

                    <h1 className={`${playfair.className} `}>Smart Chat System</h1>

                    <p>Enhanced messaging with AI-powered features</p>
                </div>
            </div>

        </div>
    );
}