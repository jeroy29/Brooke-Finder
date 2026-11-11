"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { 
    Show, 
    SignInButton, 
    useAuth, 
    UserButton, 
    SignUpButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const SiteHeader = () => {
    const pathname = usePathname();

    const { isSignedIn } = useAuth(); 
    const isLandingPage = true; 
    return (
        <header className="fixed fixed inset-x-0 top-0 z-20 flex h-18 items-center justify-between 
        border-b border-white/6 bg-background/70 px-6 backdrop-blur-md md:px-10">

        <Link 
            href = {isSignedIn && !isLandingPage ? "/dashboard" : "/"} 
            className="flex items-center">
            <Image
                src="/logo_village.svg"
                alt="Hidden Brooke Logo"
                width={314}
                height={160}
                className="h-9 w-auto"
                priority
            />
        </Link> 

            {isLandingPage && (
                <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
                    <Link href="/dashboard" className="transition-colors hover:text-foreground">
                        Dashboard
                    </Link>
                    <Link
                        href="/about"
                        className="transition-colors hover:text-foreground"
                    >
                        About Us
                    </Link>
                </nav>
            )}

            <div className="flex items-center gap-3">
                <Show when="signed-out"> 
                    <SignInButton mode="modal">
                        <Button variant = "ghost" size = "sm">
                            Sign In
                        </Button>
                    </SignInButton>
                </Show>

                <SignUpButton mode="modal">
                    <Button variant = "default" size = "sm">
                        Sign Up
                    </Button>
                </SignUpButton>

                <Show when="signed-in">
                    {isLandingPage && (
                        <Button asChild size = "sm">
                            <Link href="/dashboard">
                                Dashboard
                            </Link>
                        </Button>
                    )}

                <UserButton />
                </Show>
            </div>

        </header>
    );
};

export default SiteHeader;