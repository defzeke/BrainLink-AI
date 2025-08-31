"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Topbar from "./sections/Topbar";

export default function HideTopbarOnAuth({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideTopbar = pathname === "/SignIn" || pathname === "/login";
  return (
    <>
      {!hideTopbar && <Topbar />}
      {children}
    </>
  );
}