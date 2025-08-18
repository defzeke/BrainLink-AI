import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});

export default function Values() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center gap-3">
            <h1 className={`${playfair.className} text-4xl font-bold text-[#333333]`}>Our Values</h1>

            <span className="px-15 py-1 bg-gradient-to-r from-[#B32725] via-[#CA6C5B] to-[#E2B492] rounded mb-10"></span>

            <div className="grid grid-cols-2 grid-rows-2 gap-6 w-350">
                <div className="rounded-xl bg-white p-6">
                    <div className="w-10 h-10 bg-black rounded"><img src=''/></div>
                    <h5>Collaboration First</h5>
                    <p>We believe learning is better together. Our platform encourages meaningful peer interactions.</p>    
                </div>

                <div className="rounded-xl bg-white p-6">Container 2</div>
                <div className="rounded-xl bg-white p-6">Container 3</div>
                <div className="rounded-xl bg-white p-6">Container 4</div>
            </div>
        </div>
    );
}