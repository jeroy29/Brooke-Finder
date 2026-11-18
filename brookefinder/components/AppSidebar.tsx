"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { UserButton, useClerk, useUser } from "@clerk/nextjs";
import {
  Calculator,
  LayoutDashboard,
  LogOut,
  Map as MapIcon,
  Search,
  Table2,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";

export const NAV_ITEMS = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/map", label: "Lot map", icon: MapIcon },
  { href: "/lots", label: "All lots", icon: Table2 },
  { href: "/calculator", label: "Calculator", icon: Calculator },
];

const activeStyle =
  "h-10 rounded-xl data-[active=true]:bg-primary data-[active=true]:font-medium data-[active=true]:text-primary-foreground data-[active=true]:hover:bg-primary/90 data-[active=true]:hover:text-primary-foreground";

function SidebarSearch() {
  const router = useRouter();
  const { state, setOpen, isMobile } = useSidebar();
  const [q, setQ] = useState("");

  if (state === "collapsed" && !isMobile) {
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton tooltip="Search lots" className="h-10 rounded-xl" onClick={() => setOpen(true)}>
            <Search />
            <span>Search lots</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const t = q.trim();
        router.push(t ? `/lots?q=${encodeURIComponent(t)}` : "/lots");
      }}
      className="relative"
    >
      <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
      <SidebarInput
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search lots or homeowners"
        aria-label="Search lots or homeowners"
        className="h-10 rounded-xl bg-muted/60 pl-9 shadow-none"
      />
    </form>
  );
}

export function AppSidebar() {
  const pathname = usePathname();
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();

  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader className="gap-4 p-3">
        <Link href="/dashboard" className="flex items-center gap-3 rounded-xl p-1">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground">
            HB
          </span>
          <span className="min-w-0 leading-tight group-data-[collapsible=icon]:hidden">
            <span className="block truncate font-[family-name:var(--font-display)] text-[15px] font-semibold">
              Hidden Brooke
            </span>
            <span className="block truncate text-xs text-muted-foreground">Executive Village</span>
          </span>
        </Link>
        <SidebarSearch />
      </SidebarHeader>

      <SidebarContent className="px-1">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {NAV_ITEMS.map(({ href, label, icon: Icon }) => (
                <SidebarMenuItem key={href}>
                  <SidebarMenuButton
                    asChild
                    tooltip={label}
                    isActive={pathname === href || pathname.startsWith(`${href}/`)}
                    className={activeStyle}
                  >
                    <Link href={href}>
                      <Icon />
                      <span>{label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="gap-2 p-3">
        <SidebarSeparator className="mx-0" />
        <div className="flex items-center gap-3 px-1 py-1">
          <UserButton />
          {isLoaded && user && (
            <div className="min-w-0 leading-tight group-data-[collapsible=icon]:hidden">
              <p className="truncate text-sm font-medium">{user.fullName ?? user.username ?? "Admin"}</p>
              <p className="truncate text-xs text-muted-foreground">
                {user.primaryEmailAddress?.emailAddress}
              </p>
            </div>
          )}
        </div>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Log out"
              className="h-10 rounded-xl text-muted-foreground"
              onClick={() => signOut({ redirectUrl: "/" })}
            >
              <LogOut />
              <span>Log out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}