import { Playfair_Display } from "next/font/google";
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import Blobs from '../ui/Blobs2'

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});

export default function Hero() {
    return (
        <>
        <Blobs />
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center gap-5 fade-in-up">
            <span className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-[#B52424] to-[#D73A3A] flex items-center justify-center shadow-sm float-fast shadow-xl shadow-[#EED7D3]">
                <MenuBookOutlinedIcon className="text-white" sx={{ fontSize: { xs: 56, sm: 80 } }} />
            </span>
            
                
            <h1 className={`${playfair.className} font-bold tracking-wide bg-gradient-to-r from-[#B32222] via-stone-700 to-stone-500 bg-clip-text text-transparent text-6xl`}>About BrainLink</h1>

            <p className="max-w-3xl text-[#666666] text-2xl mt-2 mb-5">We're on a mission to revolutionize how students learn together, combining the power of collaboration with intelligent AI assistance.</p>
            
        </div>
        </>
    );
}