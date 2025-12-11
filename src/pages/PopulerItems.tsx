export default function PopulerItems() {
  const products = [
    {
      id: 1,
      title: "Brass Paraat - Handmade, Hammered Finish & Pure Brass",
      image: "blue-tea.jpg",
      price: 2849,
      oldPrice: 3400,
      discount: 16,
    },
    {
      id: 2,
      title: "Brass Chapati Box — Secure Lid, Anti-Bacterial",
      image: "green-tea.jpg",
      price: 3499,
      oldPrice: 3600,
      discount: 2,
      reviews: 3,
    },
    {
      id: 3,
      title: "Copper Lagaan - Tin coated with Lid",
      image: "rose-tea.jpg",
      price: 5499,
      oldPrice: 6300,
      discount: 12,
    },
  ];

  const hoverGreen =
    "hover:bg-linear-to-r hover:from-green-50 hover:to-green-100 hover:text-green-700";

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center text-gray-700 mb-8 tracking-wider">
          POPULER ITEMS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl border border-gray-100"
            >
              <div className="relative w-full h-72 overflow-hidden group">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {p.discount > 0 && (
                  <div className="absolute top-3 left-3 bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                    -{p.discount}% OFF
                  </div>
                )}

                <div className="absolute inset-0 bg-opacity-0 flex flex-col justify-end p-4 transition-all duration-300 group-hover:bg-black/20">
                  <div className="flex gap-3 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                    <button
                      className={`flex-1 bg-white text-green-700 border border-green-700 font-semibold py-2 px-4 rounded-md text-sm transition-all duration-300 shadow-md ${hoverGreen}`}
                    >
                      Quick View
                    </button>

                    <button
                      className={`flex-1 bg-green-700 text-white hover:bg-green-800 font-semibold py-2 px-4 rounded-md text-sm transition-all duration-300 shadow-md`}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-4 text-center">
                <h3 className="text-base font-medium text-gray-800 mb-2 truncate px-2">
                  {p.title}
                </h3>

                <div className="flex items-center justify-center gap-3 mb-2">
                  {p.reviews && (
                    <span className="text-xs text-gray-500">
                      ({p.reviews} reviews)
                    </span>
                  )}
                </div>

                <div className="flex items-baseline justify-center gap-3">
                  <span className="text-green-700 font-bold text-xl">
                    ₹{p.price.toLocaleString("en-IN")}
                  </span>

                  <span className="text-gray-500 line-through text-base font-light">
                    ₹{p.oldPrice.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
