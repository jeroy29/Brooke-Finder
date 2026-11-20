"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

export type Role = "ADMIN" | "USER";

// Remember the answer for the whole browser session so navigating doesn't refetch.
let cache: { id: string; role: Role } | null = null;

/**
 * The signed-in user's role, or null while it is still loading (or signed out).
 * This is for showing and hiding links only. The real protection is server-side
 * (lib/auth.ts), so a wrong answer here can never expose data.
 */
export function useRole(): Role | null {
  const { user, isLoaded } = useUser();
  const [state, setState] = useState(cache);

  useEffect(() => {
    if (!isLoaded || !user || cache?.id === user.id) return;
    let cancelled = false;
    fetch("/api/me")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (cancelled) return;
        if (d?.role === "ADMIN" || d?.role === "USER") {
          cache = { id: user.id, role: d.role };
          setState(cache);
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [isLoaded, user]);

  return user && state?.id === user.id ? state.role : null;
}

export function useIsAdmin(): boolean {
  return useRole() === "ADMIN";
}