import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});

export default function Story() {
    return(
        <div className="p-10 bg-white rounded">
            <h2 className={`${playfair.className} text-center`}>Our Story</h2>
            <span className="flex flex-col gap-3">
                <p>Brainlink was born from a simple observation: students learn better when they learn together. During the pandemic, we saw how isolation affected learning outcomes and student engagement.</p>
                <p>Traditional video calls felt impersonal and study groups were hard to organize effectively. We knew there had to be a better way to bring students together in meaningful, productive study sessions.</p>
                <p>That's when we decided to build something different - a platform that combines the best of collaborative learning with intelligent AI assistance. A place where students can connect, learn from each other, and get personalized help when they need it.</p>
                <p>Today, PolyClassroom helps thousands of students study more effectively, building lasting friendships and achieving better academic outcomes together.</p>
            </span>
        </div>
    );
}