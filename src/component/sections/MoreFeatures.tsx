import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});

export default function MoreFeats() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center gap-3">
            <h1 className={`${playfair.className} text-4xl font-bold text-[#333333]`}>Our Values</h1>
        </div>
    );
}