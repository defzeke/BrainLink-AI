import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});

export default function How() {
    return(
        <div className="flex flex-col min-h-screen items-center justify-center gap-3">
            <h1 className={`${playfair.className} text-4xl font-bold text-[#333333]`}>How It Works</h1>

            <span className="px-15 py-1 bg-gradient-to-r from-[#B32725] via-[#CA6C5B] to-[#E2B492] rounded mb-10"></span>
            
            <div className="flex flex-col gap-6 max-w-4xl mx-auto px-6">
                
                <div className="flex items-center bg-white rounded-lg shadow-sm p-6 gap-4">
                    <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-[#B32725] rounded-lg flex items-center justify-center">
                            <span className="text-white text-2xl font-bold">1</span>
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#333333] mb-2">Create or Join a Room</h3>
                        <p className="text-gray-600">Start by creating a new study room or joining an existing one with a class code.</p>
                    </div>
                </div>

                <div className="flex items-center bg-white rounded-lg shadow-sm p-6 gap-4">
                    <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-[#B32725] rounded-lg flex items-center justify-center">
                            <span className="text-white text-2xl font-bold">2</span>
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#333333] mb-2">Start Discussing</h3>
                        <p className="text-gray-600">Chat with your classmates about the topics you're studying. BrainLink listens and takes notes.</p>
                    </div>
                </div>

                <div className="flex items-center bg-white rounded-lg shadow-sm p-6 gap-4">
                    <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-[#B32725] rounded-lg flex items-center justify-center">
                            <span className="text-white text-2xl font-bold">3</span>
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#333333] mb-2">Get AI Assistance</h3>
                        <p className="text-gray-600">Ask questions, request explanations, or generate quizzes with simple commands.</p>
                    </div>
                </div>

                <div className="flex items-center bg-white rounded-lg shadow-sm p-6 gap-4">
                    <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-[#B32725] rounded-lg flex items-center justify-center">
                            <span className="text-white text-2xl font-bold">4</span>
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#333333] mb-2">Download Your Materials</h3>
                        <p className="text-gray-600">Get comprehensive study materials automatically generated from your discussions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}