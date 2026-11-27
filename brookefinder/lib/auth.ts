import { cache } from "react";
import { redirect } from "next/navigation";
import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

/** The signed-in person's row in your own users table (created on first sign-in). */
export const getDbUser = cache(async () => {
  const { userId } = await auth();
  if (!userId) return null;

  const existing = await prisma.user.findUnique({ where: { clerkId: userId } });
  if (existing) return existing;

  const cu = await currentUser();
  const email = cu?.primaryEmailAddress?.emailAddress;
  if (!cu || !email) return null;

  return prisma.user.upsert({
    where: { clerkId: userId },
    update: {},
    create: { clerkId: userId, email, name: cu.fullName, imageUrl: cu.imageUrl },
  });
});

/** Any signed-in user. Logged out goes to the landing page. */
export async function requireUser() {
  const user = await getDbUser();
  if (!user) redirect("/");
  return user;
}

/** Admins only. A regular user is sent to their own home page. */
export async function requireAdmin() {
  const user = await requireUser();
  if (user.role !== "ADMIN") redirect("/map");
  return user;
}