import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Pages that need a signed-in user. Who may see what (admin vs user) is enforced
// in server code (lib/auth.ts), not here, so a bypass of this file never exposes data.
const isProtected = createRouteMatcher(["/dashboard(.*)", "/home(.*)", "/map(.*)", "/lots(.*)", "/calculator(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtected(req)) {
    const { userId } = await auth();
    if (!userId) return NextResponse.redirect(new URL("/", req.url));
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};