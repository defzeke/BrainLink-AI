"use client";
import { createContext, useContext, useState, type ReactNode } from "react";

export type TabKey = "home" | "about" | "feature" | "study";

type TabsContextValue = {
	active: TabKey;
	setActive: (tab: TabKey) => void;
};

const TabsContext = createContext<TabsContextValue | null>(null);

export function TabsProvider({ children }: { children: ReactNode }) {
	const [active, setActive] = useState<TabKey>("home");

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

