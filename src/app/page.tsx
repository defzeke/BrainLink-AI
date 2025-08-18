"use client";
import HomeTab from "../component/tabs/Home";
import AboutTab from "../component/tabs/About";
import FeaturesTab from "../component/tabs/Features";
import StudyRoomTab from "../component/tabs/StudyRoom";
import Blobs from "../component/ui/Blobs";
import { useTabs } from "../component/context/TabsContext";

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
