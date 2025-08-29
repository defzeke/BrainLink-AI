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
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex flex-col items-center justify-center bg-white py-20 w-100 h-auto rounded-xl shadow-sm">
                <span>
                    <img src='/brainlink.svg' draggable='false'/>
                </span>

                <h1 className={`${playfair.className}`}>Join Study Room</h1>
                <p className="text-[#666666]">Enter a class code to join or create a new room</p>

                <label className="flex justify-start mb-2">Class Code</label>
                <input 
                    type="text" 
                    placeholder="Enter class code (e.g. ABC123)" 
                    className="border border-gray-300 rounded-md px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button type="submit" className="outline bg-red-400">
                    <PeopleAltOutlinedIcon /> Join Room
                </button>

                <button type="submit" className="outline">
                    <AutoAwesomeOutlinedIcon /> Create New Room
                </button>
            </div>
        </div>
    );
}