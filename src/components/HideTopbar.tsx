"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Topbar from "./sections/Topbar";

export default function HideTopbar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideTopbar = pathname === "/register" || pathname === "/login" || pathname === "/room" || pathname === "/profile";
  return (
    <>
      {!hideTopbar && <Topbar />}
      {children}
    </>
  );
}