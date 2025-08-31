"use client";
import HomeTab from "../components/tabs/Home";
import AboutTab from "../components/tabs/About";
import FeaturesTab from "../components/tabs/Features";
import StudyRoomTab from "../components/tabs/StudyRoom";
import Blobs from "../components/ui/Blobs";
import { useTabs } from "../components/context/TabsContext";

export default function Main() {
  const { active } = useTabs();
  return (
    <div className="relative min-h-screen overflow-hidden">
      {active === "home" && <Blobs />}

        <main className="relative z-0 mx-auto max-w-4xl px-6 pb-24">
          {active === "home" && <HomeTab />}
          {active === "about" && <AboutTab />}
          {active === "feature" && <FeaturesTab />}
          {active === "study" && <StudyRoomTab />}
        </main>
    </div>
  );
}
