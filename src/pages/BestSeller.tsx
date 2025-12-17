import { ShoppingCart, Heart } from "lucide-react";

export default function BestSeller() {
  const products = [
    {
      id: 1,
      title: "Handmade Brass Paraat",
      subtitle: "Hammered Finish & Pure Brass",
      image: "blue-tea.jpg",
      price: 2849,
      oldPrice: 3400,
      discount: 16,
      reviews: 12,
    },
    {
      id: 2,
      title: "Brass Chapati Box",
      subtitle: "Secure Lid, Anti-Bacterial",
      image: "green-tea.jpg",
      price: 3499,
      oldPrice: 3600,
      discount: 2,
      reviews: 3,
    },
    {
      id: 3,
      title: "Copper Lagaan",
      subtitle: "Tin coated with Lid",
      image: "rose-tea.jpg",
      price: 5499,
      oldPrice: 6300,
      discount: 12,
      reviews: 7,
    },
    {
      id: 4,
      title: "Pure Brass Water Pot",
      subtitle: "Traditional Handmade",
      image: "smoke-tea.jpg",
      price: 4299,
      oldPrice: 4800,
      discount: 10,
      reviews: 5,
    },
  ];

  return (
    <>
      <section className="py-20 bg-[#e9f5e3]">
        <div className="container mx-auto px-12">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 text-center">
              Best Sellers
            </h2>
            <div className="h-1 w-20 bg-green-600 mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((p) => (
              <div
                key={p.id}
                className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <button className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-full text-slate-400 hover:text-red-500 hover:bg-white transition-all shadow-sm">
                    <Heart
                      size={18}
                      fill="currentColor"
                      className="fill-transparent hover:fill-red-500"
                    />
                  </button>

                  {p.discount > 0 && (
                    <div className="absolute top-4 left-0 bg-green-600 text-white text-[11px] font-bold px-3 py-1 rounded-r-full shadow-lg">
                      SAVE {p.discount}%
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-linear-to-t from-black/50 to-transparent">
                    <button className="w-full bg-white py-2.5 cursor-pointer rounded-xl text-slate-900 font-bold text-sm flex items-center justify-center gap-2 hover:bg-green-600 hover:text-white transition-colors">
                      <ShoppingCart size={16} />
                      Quick Add
                    </button>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-semibold text-green-700 uppercase tracking-widest">
                        {p.subtitle?.split(",")[0] || "Handcrafted"}
                      </span>

                      <div className="flex text-yellow-400 text-[11px]">
                        ★★★★★
                      </div>
                    </div>

                    <h3 className="text-[17px] font-semibold text-slate-800 leading-snug mb-3 group-hover:text-green-700 transition-colors line-clamp-2">
                      {p.title}
                    </h3>

                    <div className="h-px bg-gray-200/70 mb-4"></div>

                    <div className="flex items-center gap-2">
                      <span className="text-xl font-extrabold text-slate-900">
                        ₹{p.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        ₹{p.oldPrice.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <p className="text-[11px] text-gray-400 mt-1">
                      {p.reviews} verified reviews
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
