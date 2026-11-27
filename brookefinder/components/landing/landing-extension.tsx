"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Show, SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const primary =
  "h-12 gap-2 rounded-full bg-violet-600 px-6 text-base font-medium text-white shadow-lg shadow-violet-900/40 ring-1 ring-white/20 transition hover:bg-violet-500";

export function LandingExtension() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Show when="signed-out">
        <SignInButton mode="modal">
          <Button size="lg" className={primary}>
            Sign in to get started
            <ArrowRight className="size-4" />
          </Button>
        </SignInButton>
      </Show>

      <Show when="signed-in">
        <Button asChild size="lg" className={primary}>
          <Link href="/home">
            Open the app
            <ArrowRight className="size-4" />
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="ghost"
          className="h-12 rounded-full border border-white/30 bg-white/10 px-6 text-base text-white backdrop-blur-md hover:bg-white/20 hover:text-white"
        >
          {/* adjust href to your lot map route */}
          <Link href="/map">View lot map</Link>
        </Button>
      </Show>
    </div>
  );
}