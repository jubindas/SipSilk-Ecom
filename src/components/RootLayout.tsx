import { Outlet } from "react-router-dom";

import { SidebarProvider } from "@/components/ui/sidebar";

import { AppSidebar } from "./AppSidebar";

import Navbar from "./Navbar";

import { Home, Package } from "lucide-react";

const sidebarItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
    isVisibleToUserType: ["1", "2", "3", "4"],
  },
  {
    title: "Orders",
    url: "/order",
    icon: Package,
    isVisibleToUserType: ["1", "2", "3", "4"],
  },
];

function RootLayout() {
  return (
    <SidebarProvider>
      <AppSidebar items={sidebarItems} />
      <main className="w-full bg-white min-h-screen">
        <Navbar />
        <section className="p-2">
          <Outlet />
        </section>
      </main>
    </SidebarProvider>
  );
}

export default RootLayout;
