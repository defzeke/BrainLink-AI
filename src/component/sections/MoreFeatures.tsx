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

    const cards = 'bg-white py-10 px-8 rounded-2xl shadow flex flex-col items-center justify-center text-center gap-4 min-w-[280px] min-h-[260px]'

    return (
        <div className="flex flex-col min-h-screen items-center justify-center gap-3 bg-[#f8f3ef]">
            <h1 className={`${playfair.className} text-5xl font-bold text-[#333333] mb-2`}>More Amazing Features</h1>
            <span className="block w-40 h-1 bg-gradient-to-r from-[#B32725] via-[#CA6C5B] to-[#E2B492] rounded mb-12"></span>
            <div className="w-full flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full px-4">
                    <div className={cards}>
                        <span className="bg-[#C0392B] p-4 rounded-xl mb-4 flex items-center justify-center"><ChatBubbleOutlineOutlinedIcon className="text-white" fontSize="large"/></span>
                        <h2 className={`${playfair.className} text-2xl font-bold text-[#333] mb-2`}>Smart Chat System</h2>
                        <p className="text-[#666] text-base font-normal">Enhanced messaging with AI-powered features</p>
                    </div>
                    <div className={cards}>
                        <span className="bg-[#C0392B] p-4 rounded-xl mb-4 flex items-center justify-center"><AccessTimeOutlinedIcon className="text-white" fontSize="large"/></span>
                        <h2 className={`${playfair.className} text-2xl font-bold text-[#333] mb-2`}>Session History</h2>
                        <p className="text-[#666] text-base font-normal">Keep track of all your study sessions and progress</p>
                    </div>
                    <div className={cards}>
                        <span className="bg-[#C0392B] p-4 rounded-xl mb-4 flex items-center justify-center"><ShieldOutlinedIcon className="text-white" fontSize="large"/></span>
                        <h2 className={`${playfair.className} text-2xl font-bold text-[#333] mb-2`}>Secure &amp; Private</h2>
                        <p className="text-[#666] text-base font-normal">Your data and conversations are always protected</p>
                    </div>
                    <div className={cards}>
                        <span className="bg-[#C0392B] p-4 rounded-xl mb-4 flex items-center justify-center"><MenuBookOutlinedIcon className="text-white" fontSize="large"/></span>
                        <h2 className={`${playfair.className} text-2xl font-bold text-[#333] mb-2`}>Multi-Subject Support</h2>
                        <p className="text-[#666] text-base font-normal">Perfect for any subject or academic level</p>
                    </div>
                </div>
            </div>
        </div>
    );
}