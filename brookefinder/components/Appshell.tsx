"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Home } from "lucide-react";
import SiteHeader from "./SiteHeader";
import { AppSidebar, NAV_ITEMS } from "./AppSidebar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const Appshell = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const isFullscreen =
    pathname.startsWith("/workspace/") || pathname.startsWith("/login") || pathname.startsWith("/register");
  if (isFullscreen) return <>{children}</>;

  const current = NAV_ITEMS.find((n) => pathname === n.href || pathname.startsWith(`${n.href}/`));

  // Signed-in app pages get the sidebar; the landing page and About keep the top header.
  if (current) {
    return (
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="sticky top-0 z-10 flex h-14 items-center gap-2 border-b bg-background/80 px-4 backdrop-blur-md">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mx-1 h-5" />
            <span className="text-sm text-muted-foreground">{current.label}</span>
            <Button asChild variant="ghost" size="icon" className="ml-auto size-8 rounded-lg text-muted-foreground">
              <Link href="/" aria-label="Go to landing page" title="Landing page">
                <Home className="size-4" />
              </Link>
            </Button>
          </header>
          <div className="flex-1">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    );
  }

  return (
    <>
      <SiteHeader />
      <div className="flex flex-1 flex-col pt-18">{children}</div>
    </>
  );
};

export default Appshell;