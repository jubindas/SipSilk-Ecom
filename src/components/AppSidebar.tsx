import React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { useLocation, Link } from "react-router-dom";

import type { LucideIcon } from "lucide-react";

interface SidebarItem {
  title: string;
  url: string;
  icon: LucideIcon;
  isVisibleToUserType?: string[];
  onClick?: () => void;
}

interface AppSidebarProps {
  items: SidebarItem[];
  user?: {
    name?: string;
    user_type?: string;
  };
  onLogout?: () => void;
  logoSrc?: string;
}

export const AppSidebar: React.FC<AppSidebarProps> = ({
  items,
  onLogout,
  logoSrc,
}) => {
  const location = useLocation();

  return (
    <Sidebar className="print:hidden">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mt-6">
            <div className="mx-auto mt-2 text-center">
              {logoSrc && <img src={logoSrc} alt="logo" className="mx-auto" />}
            </div>
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="mt-6">
              {items.map((item) => {
                const isActive = location.pathname === item.url;

                const handleClick = () => {
                  if (item.title === "Logout" && onLogout) onLogout();
                  if (item.onClick) item.onClick();
                };

                return (
                  <SidebarMenuItem key={item.title} className="my-1">
                    <SidebarMenuButton
                      isActive={isActive}
                      asChild
                      onClick={handleClick}
                    >
                      <Link to={item.url}>
                        <item.icon className="!w-5 !h-5" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
