import { useState } from "react";

import { useAuthStore } from "@/store/useAuthStore";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

import {
  ShoppingCart,
  Search,
  User,
  MoreVertical,
  Heart,
  Ticket,
  LogOut,
  Zap,
} from "lucide-react";

import { Link, useNavigate } from "react-router";

export default function Navbar() {
  const user = useAuthStore((s) => s.user);

  const logout = useAuthStore((s) => s.logout);

  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const popularItems = [
    { name: "Smartphones", slug: "smartphones" },
    { name: "Laptops", slug: "laptops" },
    { name: "Clothing", slug: "clothing" },
    { name: "Shoes", slug: "shoes" },
    { name: "Headphones", slug: "headphones" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100 backdrop-blur-md ">
      <div className="flex items-center justify-between px-6 lg:px-8 py-3 max-w-[1600px] mx-auto">
        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-90 transition-all duration-300 group shrink-0 ml-9"
        >
          <div className="relative">
            <img
              src="https://i.pinimg.com/736x/32/25/8b/32258bad6d6b85a64d4dbdabf813bc6f.jpg"
              alt="Logo"
              className="w-11 h-11 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105"
            />
          </div>
          <span className="text-2xl font-bold bg-linear-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
            ShopKart
          </span>
        </Link>

        <div
          className={`flex items-center bg-gray-50 rounded-xl px-4 py-2.5 w-90 mx-6 shadow-sm border transition-all duration-300 ${
            isSearchFocused
              ? "border-blue-400 shadow-md ring-2 ring-blue-100"
              : "border-gray-200 hover:border-gray-300"
          }`}
        >
          <Search
            className={`w-5 h-5 transition-colors duration-200 ${
              isSearchFocused ? "text-blue-600" : "text-gray-400"
            }`}
          />
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="ml-3 bg-transparent outline-none w-full text-gray-700 placeholder:text-gray-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
        </div>

        <div className="flex items-center gap-4 text-gray-700 font-medium shrink-0">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-4 py-2 text-gray-700 font-medium text-sm hover:text-blue-600 transition-colors duration-200 hover:bg-blue-50 rounded-lg flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Popular
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="p-3 bg-white shadow-xl rounded-xl w-56 border border-gray-100 animate-in fade-in-0 zoom-in-95 duration-200">
                    {popularItems.map((item) => (
                      <li key={item.slug}>
                        <Link
                          to={`/category/${item.slug}`}
                          className="flex items-center px-4 py-3 rounded-lg hover:bg-linear-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-700 transition-all duration-200 font-medium text-gray-700"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            to="/categories"
            className="px-4 py-2 text-gray-700 font-medium text-sm hover:text-blue-600 transition-colors duration-200 hover:bg-blue-50 rounded-lg"
          >
            All Categories
          </Link>

          <Link
            to="/cart"
            className="flex items-center gap-2 px-4 py-2 hover:text-blue-600 transition-all duration-200 hover:bg-blue-50 rounded-lg group"
          >
            <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            <span>Cart</span>
          </Link>

          <div className="flex items-center gap-2">
            {!user ? (
              <Link
                to="/login"
                className="flex items-center gap-2 px-4 py-2 hover:text-blue-600 transition-all duration-200 hover:bg-blue-50 rounded-lg group"
              >
                <User className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span>Account</span>
              </Link>
            ) : (
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="px-4 py-2 bg-transparent text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 flex items-center gap-2">
                      <User className="w-5 h-5" />
                      <span className="max-w-[100px] truncate">
                        {user.name}
                      </span>
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                      <ul className="p-3 bg-white shadow-xl rounded-xl w-52 border border-gray-100 animate-in fade-in-0 zoom-in-95 duration-200">
                        <li>
                          <Link
                            to="/profile"
                            className="flex items-center gap-3 px-4 py-3 hover:bg-linear-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-700 rounded-lg transition-all duration-200 group"
                          >
                            <User className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                            <span className="font-medium">My Profile</span>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/wish-list"
                            className="flex items-center gap-3 px-4 py-3 hover:bg-linear-to-r hover:from-pink-50 hover:to-pink-100 hover:text-pink-700 rounded-lg transition-all duration-200 group"
                          >
                            <Heart className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                            <span className="font-medium">Wishlist</span>
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/coupons"
                            className="flex items-center gap-3 px-4 py-3 hover:bg-linear-to-r hover:from-green-50 hover:to-green-100 hover:text-green-700 rounded-lg transition-all duration-200 group"
                          >
                            <Ticket className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                            <span className="font-medium">Coupons</span>
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
          </div>

          <button className="flex items-center p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 group">
            <MoreVertical className="w-5 h-5 text-gray-700 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-200" />
          </button>
        </div>
      </div>
    </header>
  );
}
