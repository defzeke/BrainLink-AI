import { Playfair_Display } from "next/font/google";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});

export default function Join() {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center fade-in-up px-4">
            <div className="flex flex-col items-center bg-white py-8 md:py-10 px-6 md:px-8 w-full max-w-[420px] rounded-2xl shadow-sm border border-[#f3eaea]">
                <span className="mb-4">
                    <img src='/brainlink.svg' draggable='false' className="w-auto h-20 md:h-auto" />
                </span>
                <h1 className={`${playfair.className} text-2xl md:text-3xl font-bold mb-1 text-center`}>Join Study Room</h1>
                <p className="text-[#666666] text-center mb-6 text-sm md:text-base">Enter a class code to join or create a new room</p>
                <div className="w-full flex flex-col gap-2 mb-6">
                    <label className="text-left font-medium text-sm md:text-base">Class Code</label>
                    <input
                        type="text"
                        placeholder="Enter class code (e.g. ABC123)"
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#E79A9A] text-sm md:text-base"
                    />
                </div>
                <button
                    type="submit"
                    className="flex items-center justify-center w-full bg-[#E79A9A] hover:bg-red-400 text-white font-semibold py-2.5 md:py-3 rounded-lg mb-3 transition-colors duration-150 text-sm md:text-base"
                    disabled
                >
                    <PeopleAltOutlinedIcon className="mr-2 text-xl md:text-2xl" /> Join Room
                </button>
                <button
                    type="button"
                    className="flex items-center justify-center w-full border border-red-200 text-[#c0392b] font-semibold py-2.5 md:py-3 rounded-lg bg-[#fdf7f7] hover:bg-red-50 transition-colors duration-150 text-sm md:text-base"
                >
                    <AutoAwesomeOutlinedIcon className="mr-2 text-xl md:text-2xl" /> Create New Room
                </button>
            </div>
        </div>
    );
}