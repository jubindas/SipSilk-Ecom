/* eslint-disable @typescript-eslint/no-explicit-any */
import GlobalLoading from "@/components/GlobalLoading";
import { getNewArrivalProducts } from "@/services/homepageProducts";
import { useQuery } from "@tanstack/react-query";
import { ShoppingCart, Heart, SearchIcon } from "lucide-react";

const BASE_URL = "http://127.0.0.1:3000";

export default function NewArrivals() {
  const { data, isLoading } = useQuery({
    queryKey: ["newArrivals"],
    queryFn: getNewArrivalProducts,
  });

  const products = data?.data || [];

  if (isLoading) return <GlobalLoading />;

  return (
    <section className="py-20 bg-[#ffffff]">
      <div className="container mx-auto px-12">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 text-center">
            New Arrivals
          </h2>
          <div className="h-1 w-20 bg-green-600 mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p: any) => (
            <div
              key={p.id}
              className="group bg-white rounded-4xl border border-green-100/50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <img
                  src={`${BASE_URL}${p.mainImage}`}
                  alt={p.productName}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <button className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-full text-slate-400 hover:text-red-500 hover:bg-white transition-all shadow-sm">
                  <Heart
                    size={18}
                    fill="currentColor"
                    className="fill-transparent hover:fill-red-500"
                  />
                </button>

                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-linear-to-t from-black/50 to-transparent flex gap-3">
                  <button className="w-1/2 bg-white py-2.5 cursor-pointer rounded-xl text-slate-900 font-bold text-sm flex items-center justify-center gap-2 hover:bg-green-600 hover:text-white transition-colors">
                    <ShoppingCart size={16} />
                    Quick Add
                  </button>

                  <button className="w-1/2 bg-white py-2.5 cursor-pointer rounded-xl text-slate-900 font-bold text-sm flex items-center justify-center gap-2 hover:bg-green-600 hover:text-white transition-colors">
                    <SearchIcon size={16} />
                    View Details
                  </button>
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
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button className="px-10 py-4 mb-5 bg-green-700 text-white cursor-pointer font-bold rounded-full hover:bg-green-800 hover:shadow-xl transition-all tracking-wide">
            Explore All New Arrivals
          </button>
        </div>
      </div>
    </section>
  );
}
