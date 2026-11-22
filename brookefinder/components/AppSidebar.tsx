"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton, useClerk, useUser } from "@clerk/nextjs";
import {
  Calculator,
  Home,
  LayoutDashboard,
  LogOut,
  Map as MapIcon,
  Table2,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { useRole } from "@/hooks/use-admin";

export const NAV_ITEMS = [
  { href: "/home", label: "Home", icon: Home, access: "user" },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard, access: "admin" },
  { href: "/map", label: "Lot Map", icon: MapIcon, access: "all" },
  { href: "/lots", label: "All lots", icon: Table2, access: "admin" },
  { href: "/calculator", label: "Calculator", icon: Calculator, access: "admin" },
] as const;

const activeStyle =
  "h-10 rounded-xl data-[active=true]:bg-primary data-[active=true]:font-medium data-[active=true]:text-primary-foreground data-[active=true]:hover:bg-primary/90 data-[active=true]:hover:text-primary-foreground";

export function AppSidebar() {
  const pathname = usePathname();
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const role = useRole();
  
  const items = NAV_ITEMS.filter(
    (n) =>
      n.access === "all" ||
      (n.access === "admin" && role === "ADMIN") ||
      (n.access === "user" && role === "USER"),
  );

  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader className="gap-4 p-3 group-data-[collapsible=icon]:p-2">
        <Link
          href={role === "ADMIN" ? "/dashboard" : role === "USER" ? "/home" : "/map"}
          className="flex items-center gap-3 rounded-xl p-1 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-0"
        >
          <span className="flex size-9 shrink-0 group-data-[collapsible=icon]:size-8 items-center justify-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground">
            HB
          </span>
          <span className="min-w-0 leading-tight group-data-[collapsible=icon]:hidden">
            <span className="block truncate font-[family-name:var(--font-display)] text-[15px] font-semibold">
              Hidden Brooke
            </span>
            <span className="block truncate text-xs text-muted-foreground">Executive Village</span>
          </span>
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-1 group-data-[collapsible=icon]:px-0">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-3">
              {items.map(({ href, label, icon: Icon }) => (
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

      <SidebarFooter className="gap-2 p-3 group-data-[collapsible=icon]:p-2">
        <SidebarSeparator className="mx-0" />
        <div className="flex items-center gap-3 px-1 py-1 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0">
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