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

    const cards = 'bg-white p-3 w-60 rounded-xl shadow-sm'

    return (
        <div className="flex flex-col min-h-screen items-center justify-center gap-3">
            <h1 className={`${playfair.className} text-4xl font-bold text-[#333333]`}>More Amazing Features</h1>

            <span className="px-15 py-1 bg-gradient-to-r from-[#B32725] via-[#CA6C5B] to-[#E2B492] rounded mb-10"></span>
         
            <div className="flex flex-row gap-3">
                <div className={`${cards} flex items-center justify-center text-center flex-col`}>
                    <span className="p-3 bg-gradient-to-br from-[#B52323] to-[#D53838] w-10 h-10 rounded-xl flex items-center justify-center">
                        <ChatBubbleOutlineOutlinedIcon fontSize="medium" className="text-white"/>
                    </span>

                    <h1 className={`${playfair.className}`}>Smart Chat System</h1>
                    <p className="">Enhanced messaging with AI-powered features</p>
                </div>  

            </div>
        </div>
    );
}