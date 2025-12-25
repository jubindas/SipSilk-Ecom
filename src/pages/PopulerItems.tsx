/* eslint-disable @typescript-eslint/no-explicit-any */
import GlobalLoading from "@/components/GlobalLoading";
import { getPopulerProducts } from "@/services/homepageProducts";
import { useQuery } from "@tanstack/react-query";
import { ShoppingCart, Heart, SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BASE_URL = "http://127.0.0.1:3000";

export default function PopularItems() {
  const { data, isLoading } = useQuery({
    queryKey: ["populerProducts"],
    queryFn: getPopulerProducts,
  });

  const products = data?.data || [];

  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("wishlist");
    if (saved) setWishlist(JSON.parse(saved));
  }, []);

  const toggleWishlist = (id: string) => {
    let updated;
    if (wishlist.includes(id)) {
      updated = wishlist.filter((item) => item !== id);
    } else {
      updated = [...wishlist, id];
    }
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  if (isLoading) return <GlobalLoading />;

  return (
    <section className="py-20 bg-linear-to-b from-white via-[#f3faef] to-[#d6f7c5]">
      <div className="container mx-auto px-12">
        <div className="flex flex-col items-center mb-16">
          <span className="text-green-600 font-semibold tracking-widest text-sm uppercase mb-2">
            Our Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900">
            Popular Products
          </h2>
          <div className="h-1 w-20 bg-green-600 mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p: any) => {
            const discount = Math.round(
              ((p.maximumRetailPrice - p.sellingPrice) / p.maximumRetailPrice) *
                100
            );

            return (
              <div
                key={p.id}
                className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={`${BASE_URL}${p.mainImage}`}
                    alt={p.productName}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <button
                    onClick={() => toggleWishlist(p.id)}
                    className="absolute top-4 right-4 p-2.5 bg-white rounded-full shadow"
                  >
                    <Heart
                      size={18}
                      className={
                        wishlist.includes(p.id)
                          ? "text-red-500 fill-red-500"
                          : "text-gray-400"
                      }
                    />
                  </button>

                  {discount > 0 && (
                    <div className="absolute top-4 left-0 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-r-full">
                      SAVE {discount}%
                    </div>
                  )}

                  {p.isBestSelling && (
                    <span className="absolute bottom-4 left-4 bg-orange-500 text-white text-[11px] px-2 py-1 rounded-full">
                      Best Seller
                    </span>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-all bg-linear-to-t from-black/60 to-transparent flex gap-3">
                    <button className="w-1/2 bg-white py-2 rounded-xl text-sm font-semibold hover:bg-green-600 hover:text-white transition">
                      <ShoppingCart size={16} className="inline mr-1" />
                      Add
                    </button>

                    <Link
                      to={`/products/${p.id}`}
                      className="w-1/2 bg-white py-2 rounded-xl text-sm font-semibold text-center hover:bg-green-600 hover:text-white transition"
                    >
                      <SearchIcon size={16} className="inline mr-1" />
                      View
                    </Link>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">
                    {p.masterCategory?.name}
                  </h3>

                  <h2 className="text-lg font-semibold text-slate-900 line-clamp-2 mb-2">
                    {p.productName}
                  </h2>

                  <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                    {p.shortDesc}
                  </p>

                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-slate-900">
                      ₹{p.sellingPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      ₹{p.maximumRetailPrice.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
