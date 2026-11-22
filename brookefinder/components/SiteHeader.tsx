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
import { cn } from "@/lib/utils";
import { useRole } from "@/hooks/use-admin";


// access: "public" = everyone, "all" = any signed-in user,
// "admin" = admins only, "user" = regular users only.
// Pages also enforce this on the server, so this only decides which links are shown.
const navLinks = [
  { href: "/home", label: "Home", access: "user" },
  { href: "/dashboard", label: "Dashboard", access: "admin" },
  { href: "/map", label: "Lot map", access: "all" },
  { href: "/lots", label: "All lots", access: "admin" },
  { href: "/calculator", label: "Calculator", access: "admin" },
  { href: "/about", label: "About Us", access: "public" },
] as const;

const SiteHeader = () => {
    const pathname = usePathname();

    const { isSignedIn } = useAuth();
    const role = useRole();
    const isLandingPage = true;
    const links = navLinks.filter(
        (l) =>
            l.access === "public" ||
            (isSignedIn &&
                (l.access === "all" ||
                    (l.access === "admin" && role === "ADMIN") ||
                    (l.access === "user" && role === "USER"))),
    );
    return (
        <header className="fixed inset-x-3 top-3 z-20 mx-auto flex h-14 max-w-[120rem] items-center justify-between
        rounded-full border bg-white/80 px-4 shadow-sm backdrop-blur-md sm:inset-x-5 md:px-6">

        <Link
            href = {isSignedIn && !isLandingPage ? "/dashboard" : "/"}
            className="flex items-center">
            <Image
                src="/logo_village.svg"
                alt="Hidden Brooke Logo"
                width={314}
                height={160}
                className="h-8 w-auto"
                priority
            />
        </Link>

            {isLandingPage && (
            <nav className="hidden items-center gap-1 text-sm text-muted-foreground md:absolute md:left-1/2 md:flex md:-translate-x-1/2">
                {links.map((l) => (
                <Link
                    key={l.href}
                    href={l.href}
                    className={cn(
                    "rounded-full px-3.5 py-1.5 transition-colors hover:bg-muted hover:text-foreground",
                    pathname.startsWith(l.href) && "bg-muted font-medium text-foreground",
                    )}
                >
                    {l.label}
                </Link>
                ))}
            </nav>
            )}

            <div className="flex items-center gap-2">
                {/* Sign in / Sign up only for visitors who are not signed in */}
                <Show when="signed-out">
                    <SignInButton mode="modal">
                        <Button variant = "ghost" size = "sm" className="rounded-full">
                            Sign In
                        </Button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                        <Button variant = "default" size = "sm" className="rounded-full">
                            Sign Up
                        </Button>
                    </SignUpButton>
                </Show>

                <Show when="signed-in">
                    {isLandingPage && (
                        <Button asChild size = "sm" className="rounded-full">
                            <Link href={role === "ADMIN" ? "/dashboard" : "/home"}>
                                {role === "ADMIN" ? "Dashboard" : "Home"}
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