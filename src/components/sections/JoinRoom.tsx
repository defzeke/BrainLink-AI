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
        <div className="fixed inset-0 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center bg-white py-10 px-8 w-[420px] rounded-2xl shadow-sm border border-[#f3eaea]">
                <span className="mb-4">
                    <img src='/brainlink.svg' draggable='false' />
                </span>
                <h1 className={`${playfair.className} text-3xl font-bold mb-1`}>Join Study Room</h1>
                <p className="text-[#666666] text-center mb-6">Enter a class code to join or create a new room</p>
                <div className="w-full flex flex-col gap-2 mb-6">
                    <label className="text-left font-medium">Class Code</label>
                    <input
                        type="text"
                        placeholder="Enter class code (e.g. ABC123)"
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="flex items-center justify-center w-full bg-[#E79A9A] hover:bg-red-400 text-white font-semibold py-3 rounded-lg mb-3 transition-colors duration-150"
                    disabled
                >
                    <PeopleAltOutlinedIcon className="mr-2" /> Join Room
                </button>
                <button
                    type="button"
                    className="flex items-center justify-center w-full border border-red-200 text-[#c0392b] font-semibold py-3 rounded-lg bg-[#fdf7f7] hover:bg-red-50 transition-colors duration-150"
                >
                    <AutoAwesomeOutlinedIcon className="mr-2" /> Create New Room
                </button>
            </div>
        </div>
    );
}