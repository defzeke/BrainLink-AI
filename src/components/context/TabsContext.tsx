"use client";
import { createContext, useContext, useState, type ReactNode } from "react";

export type TabKey = "home" | "about" | "feature" | "study";

type TabsContextValue = {
	active: TabKey;
	setActive: (tab: TabKey) => void;
};

const TabsContext = createContext<TabsContextValue | null>(null);

export function TabsProvider({ children }: { children: ReactNode }) {
	const [active, setActiveState] = useState<TabKey>("home");

	function setActive(tab: TabKey) {
		setActiveState(tab);
		if (typeof window !== "undefined") {
			window.scrollTo({ top: 0, left: 0, behavior: "auto" });
		}
	}

	return (
		<TabsContext.Provider value={{ active, setActive }}>
			{children}
		</TabsContext.Provider>
	);
}

export function useTabs() {
	const ctx = useContext(TabsContext);
	if (!ctx) throw new Error("useTabs must be used within TabsProvider");
	return ctx;
}

