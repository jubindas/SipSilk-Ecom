import { User, MapPin, Banknote } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const location = useLocation();

  const menu = [
    { name: "Profile", icon: <User className="w-5 h-5" />, path: "/profile" },
    { name: "Addresses", icon: <MapPin className="w-5 h-5" />, path: "/profile/addresses" },
    { name: "Bank Details", icon: <Banknote className="w-5 h-5" />, path: "/profile/bank-details" },
  ];

  return (
    <aside className="w-64 bg-white shadow-md border rounded-lg p-5 h-fit">
      <h2 className="text-lg font-semibold mb-5">My Account</h2>

      <ul className="space-y-2">
        {menu.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-4 py-2 rounded-md text-gray-700 hover:bg-blue-50 transition",
                location.pathname === item.path && "bg-blue-600 text-white"
              )}
            >
              {item.icon}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
