/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import { Search } from "lucide-react";

import { useQuery } from "@tanstack/react-query";

import { searchQuery } from "@/services/homepageProducts";

import { useNavigate } from "react-router-dom";

const BASE_URL = "http://127.0.0.1:3000";

export default function SearchBar() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["search", search],
    queryFn: () => searchQuery(search),
    enabled: search.trim().length > 0,
  });

  const products = data?.data ?? [];

  console.log("the datas are", products);

  const image = BASE_URL + products.mainImage;

  console.log("the image is", image);

  return (
    <div className="relative w-130 mx-6">
      <div
        className={`flex items-center bg-gray-50 rounded-xl px-4 py-2.5 border ${
          isSearchFocused
            ? "border-green-400 ring-2 ring-green-100"
            : "border-gray-200"
        }`}
      >
        <Search className="w-5 h-5 text-gray-400" />

        <input
          type="text"
          placeholder="Search for Products, Brands and More"
          className="ml-3 bg-transparent outline-none w-full text-gray-700"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
        />
      </div>

      {isSearchFocused && search && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-xl shadow-lg mt-2 z-50">
          {isLoading && (
            <div className="px-4 py-3 text-gray-500">Searching...</div>
          )}

          {!isLoading && products.length === 0 && (
            <div className="px-4 py-3 text-gray-500">No products found</div>
          )}

          {!isLoading &&
            products.map((item: any) => (
              <div
                key={item.id}
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer"
                onClick={() => {
                  navigate(`/product/${item.id}`);
                  setSearch("");
                }}
              >
                <img
                  src={BASE_URL + item.mainImage}
                  alt={item.productName}
                  className="w-10 h-10 object-cover rounded"
                />

                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {item.productName}
                  </p>
                  <p className="text-xs text-gray-500">₹{item.sellingPrice}</p>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
