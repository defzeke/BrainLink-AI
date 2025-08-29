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

    const cards = 'bg-white p-10 rounded-xl shadow-sm flex items-center justify-center text-center gap-2 flex-col'

    return (
        <div className="flex flex-col min-h-screen items-center justify-center gap-3 px-4">
            <h1 className={`${playfair.className} text-4xl font-bold text-[#333333]`}>More Amazing Features</h1>

            <span className="px-15 py-1 bg-gradient-to-r from-[#B32725] via-[#CA6C5B] to-[#E2B492] rounded mb-10"></span>
         
            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
                
                {/* Smart Chat System */}
                <div className={cards}>
                    <div className="w-16 h-16 bg-[#B32725] rounded-xl flex items-center justify-center mb-4">
                        <ChatBubbleOutlineOutlinedIcon className="text-white text-3xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#333333] mb-2">Smart Chat System</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Enhanced messaging with AI-powered features
                    </p>
                </div>

                {/* Session History */}
                <div className={cards}>
                    <div className="w-16 h-16 bg-[#B32725] rounded-xl flex items-center justify-center mb-4">
                        <AccessTimeOutlinedIcon className="text-white text-3xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#333333] mb-2">Session History</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Keep track of all your study sessions and progress
                    </p>
                </div>

                {/* Secure & Private */}
                <div className={cards}>
                    <div className="w-16 h-16 bg-[#B32725] rounded-xl flex items-center justify-center mb-4">
                        <ShieldOutlinedIcon className="text-white text-3xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#333333] mb-2">Secure & Private</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Your data and conversations are always protected
                    </p>
                </div>

                {/* Multi-Subject Support */}
                <div className={cards}>
                    <div className="w-16 h-16 bg-[#B32725] rounded-xl flex items-center justify-center mb-4">
                        <MenuBookOutlinedIcon className="text-white text-3xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#333333] mb-2">Multi-Subject Support</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Perfect for any subject or academic level
                    </p>
                </div>

            </div>

        </div>
    );
}