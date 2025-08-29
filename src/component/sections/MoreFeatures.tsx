import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});

export default function MoreFeats() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center gap-3">
            <h1 className={`${playfair.className} text-4xl font-bold text-[#333333]`}>More Amazing Features</h1>

            <span className="px-15 py-1 bg-gradient-to-r from-[#B32725] via-[#CA6C5B] to-[#E2B492] rounded mb-10"></span>

            <div className="grid grid-cols-4 gap-4 max-w-3xl w-full">
                <span className="flex items-center justify-center bg-white rounded shadow p-4 text-[#333333] font-medium">Seamless integration</span>
                <span className="flex items-center justify-center bg-white rounded shadow p-4 text-[#333333] font-medium">Customizable themes</span>
                <span className="flex items-center justify-center bg-white rounded shadow p-4 text-[#333333] font-medium">Progress analytics</span>
                <span className="flex items-center justify-center bg-white rounded shadow p-4 text-[#333333] font-medium">Collaborative notes</span>
            </div>

        </div>
    );
}