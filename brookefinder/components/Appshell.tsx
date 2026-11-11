"use client";

import { usePathname } from "next/navigation";
import React from "react";
import SiteHeader from "./SiteHeader";

const Appshell = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const isFullscreen = pathname.startsWith("/workspace/") || pathname.startsWith("/login") || pathname.startsWith("/register");

    if (isFullscreen) {
        return <>{children}</>;
    }

    return(
        <>
        <SiteHeader/> <div className="flex-1 flex-1 flex-col pt-18">{children}</div> 
        </>
    )
};

export default Appshell;
