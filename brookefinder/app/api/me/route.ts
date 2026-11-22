import { NextResponse } from "next/server";
import { getDbUser } from "@/lib/auth";

/** Tells the sidebar which links to show. Returns only the role, nothing else. */
export async function GET() {
  const user = await getDbUser();
  if (!user) return NextResponse.json({ role: null }, { status: 401 });
  return NextResponse.json({ role: user.role });
}