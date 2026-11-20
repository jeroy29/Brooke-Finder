"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Show, SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const arrow = (
  <span className="flex size-5 items-center justify-center rounded-full border border-white/60">
    <ArrowRight className="size-3" />
  </span>
);

export function HeroCta() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Show when="signed-out">
        <SignInButton mode="modal">
          <Button size="lg" className="h-11 gap-3 rounded-xl px-5 shadow-md shadow-primary/25">
            Sign in to get started
            {arrow}
          </Button>
        </SignInButton>
      </Show>

      <Show when="signed-in">
        {/* /home sends admins on to the dashboard, so one link works for everyone */}
        <Button asChild size="lg" className="h-11 gap-3 rounded-xl px-5 shadow-md shadow-primary/25">
          <Link href="/home">
            Open the app
            {arrow}
          </Link>
        </Button>
      </Show>
    </div>
  );
}