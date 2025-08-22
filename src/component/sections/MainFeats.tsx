import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});

export default function Features() {

    const cards ='rounded-xl'

    return(
        <div className="flex flex-col items-center justify-center gap-3 mt-60">
            <div className="grid grid-cols-2 grid-rows-2 gap-6 w-350 h-auto">

                <div className="rounded-xl bg-white p-6 flex flex-row gap-5 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-16 h-15 bg-[#EFD2D2] rounded-xl flex items-center justify-center">
                        asd
                    </div>
                    <span className="flex flex-col gap-3">
                        <h5 className={`${playfair.className} font-semibold text-[#333333] text-xl`}>Collaboration First</h5>
                        <p className="text-[#666666]">We believe learning is better together. Our platform encourages meaningful peer interactions.</p>    
                    </span>
                </div>

                <div className="rounded-xl bg-white p-6 flex flex-row gap-5 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-16 h-15 bg-[#EFD2D2] rounded-xl flex items-center justify-center">
                        asd
                    </div>
                    <span className="flex flex-col gap-3">
                        <h5 className={`${playfair.className} font-semibold text-[#333333] text-xl`}>AI Enhancement</h5>
                        <p className="text-[#666666]">Technology should amplify human potential, not replace it. Our AI assists, never dominates.</p>    
                    </span>
                </div>

                <div className="rounded-xl bg-white p-6 flex flex-row gap-5 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-16 h-15 bg-[#EFD2D2] rounded-xl flex items-center justify-center">
                        asd
                    </div>
                    <span className="flex flex-col gap-3">
                        <h5 className={`${playfair.className} font-semibold text-[#333333] text-xl`}>Focused Learning</h5>
                        <p className="text-[#666666]">Every feature is designed to help students learn more effectively and efficiently.</p>    
                    </span>
                </div>

                <div className="rounded-xl bg-white p-6 flex flex-row gap-5 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-16 h-15 bg-[#EFD2D2] rounded-xl flex items-center justify-center">
                        asd
                    </div>
                    <span className="flex flex-col gap-3">
                        <h5 className={`${playfair.className} font-semibold text-[#333333] text-xl`}>Student-Centered</h5>
                        <p className="text-[#666666]">Built by educators and students, for students. Your success is our priority.</p>    
                    </span>
                </div>

            </div>
        </div>
    );
}