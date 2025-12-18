import { User, MapPin, Banknote, LogOut, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const location = useLocation();

  const menu = [
    { name: "Personal Profile", icon: User, path: "/profile" },
    { name: "Saved Addresses", icon: MapPin, path: "/profile/addresses" },
    { name: "Bank Accounts", icon: Banknote, path: "/profile/bank-details" },
  ];

  return (
    <aside className="w-72 bg-emerald-50/30 border border-emerald-100 rounded-2xl p-6 flex flex-col gap-8 h-screen max-h-[600px] sticky top-5 ml-20">
      <div>
        <h2 className="text-emerald-900 text-sm font-bold uppercase tracking-wider px-4">
          Settings
        </h2>
        <p className="text-emerald-600/60 text-xs px-4 mt-1">
          Manage your account details
        </p>
      </div>

      <nav className="flex-1">
        <ul className="space-y-1.5">
          {menu.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200",
                    isActive
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200/50"
                      : "text-emerald-800 hover:bg-emerald-100/50"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <item.icon
                      className={cn(
                        "w-5 h-5",
                        isActive ? "text-white" : "text-emerald-500"
                      )}
                    />
                    <span className="font-medium text-[15px]">{item.name}</span>
                  </div>
                  {isActive && <ChevronRight className="w-4 h-4 opacity-70" />}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="pt-6 border-t border-emerald-100">
        <button className="flex items-center gap-3 px-4 py-2 w-full text-emerald-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors group">
          <LogOut className="w-5 h-5 text-emerald-400 group-hover:text-red-400" />
          <span className="font-medium">Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
