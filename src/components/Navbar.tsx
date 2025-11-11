import { useLocation } from "react-router-dom";

import { SidebarTrigger } from "@/components/ui/sidebar";

function Navbar() {
  const location = useLocation().pathname;

  function formatRouteToTitle(route: string): string {
    const cleanRoute = route.replace(/^\/+|\/+$/g, "");

    if (!cleanRoute) return "";

    const words = cleanRoute
      .split(/[-/]/)
      .map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      );

    return words.join(" ");
  }

  console.log(formatRouteToTitle(location));

  return (
    <nav className="w-full p-3 flex items-center border-grid sticky top-0 z-50  border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 print:hidden">
      <SidebarTrigger className="h-8 w-8" />
      <p className="text-zinc-600 font-semibold ml-4">
        {formatRouteToTitle(location)}
      </p>
    </nav>
  );
}

export default Navbar;
