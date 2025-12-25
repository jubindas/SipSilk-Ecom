import { useAuthStore } from "@/store/useAuthStore";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

import { ShoppingCart, User, Heart, LogOut, Box, Bell } from "lucide-react";

import { Link, useNavigate } from "react-router";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const user = useAuthStore((s) => s.user);

  console.log("User", user);

  const logout = useAuthStore((s) => s.logout);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const hoverGreen =
    "hover:bg-linear-to-r hover:from-green-50 hover:to-green-100 hover:text-green-700";

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 lg:px-8 py-3 max-w-[1600px] mx-auto">
        <Link
          to="/"
          className={`flex items-center gap-3 transition-all duration-300 group shrink-0 ml-9 `}
        >
          <img
            src="/sipsilk-logo.png"
            alt="Logo"
            className="w-14 h-14 object-cover scale-110 group-hover:scale-125 transition-all duration-300"
          />
          <span className="font-logo-nav text-4xl font-bold bg-linear-to-r from-green-600 to-yellow-700 bg-clip-text text-transparent">
            SipSilk
          </span>
        </Link>

        <div>
          <SearchBar />
        </div>

        <div className="flex items-center gap-4 text-gray-700 font-medium shrink-0">
          <Link
            to="categories"
            className={`px-4 py-2 text-gray-700 font-medium text-sm rounded-lg transition-all duration-200 ${hoverGreen}`}
          >
            All Categories
          </Link>

          <Link
            to="/cart"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 group ${hoverGreen}`}
          >
            <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            <span>Cart</span>
          </Link>

          <div className="flex items-center gap-2">
            {!user ? (
              <Link
                to="/login"
                className={`flex items-center gap-2 px-4 py-2 bg-linear-to-r from-green-50 to-green-100 text-green-700 rounded-lg transition-all duration-200 group ${hoverGreen}`}
              >
                <User className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span>Login</span>
              </Link>
            ) : (
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={`px-4 py-2 mr-5 text-gray-700 rounded-lg transition-all duration-200 flex items-center gap-2 ${hoverGreen}`}
                    >
                      <User className="w-5 h-5" />
                      <span className="max-w-[100px] truncate">
                        {user.fullName}
                      </span>
                    </NavigationMenuTrigger>

                    <NavigationMenuContent asChild>
                      <ul className="p-3 bg-white shadow-xl rounded-xl border border-gray-100 animate-in fade-in-0 zoom-in-95 duration-200">
                        <li>
                          <Link
                            to="/profile"
                            className={`flex w-40 items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${hoverGreen}`}
                          >
                            <User className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                            <span className="font-medium">My Profile</span>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/wish-list"
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${hoverGreen}`}
                          >
                            <Heart className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                            <span className="font-medium">Wishlist</span>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/orders"
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${hoverGreen}`}
                          >
                            <Box className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                            <span className="font-medium">Orders</span>
                          </Link>
                        </li>

                        <div className="h-px bg-gray-200 my-2"></div>

                        <li>
                          <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 w-full text-left px-4 py-3 text-red-600 hover:bg-linear-to-r hover:from-red-50 hover:to-red-100 rounded-lg transition-all duration-200 group"
                          >
                            <LogOut className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                            <span className="font-medium">Logout</span>
                          </button>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            )}

            <button
              className={`p-2 rounded-lg transition-all duration-200 ${hoverGreen}`}
            >
              <Bell />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
