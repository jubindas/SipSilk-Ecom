import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import products from "@/components/productsData";

export default function SubCategories() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState("All");
  const [wishlist, setWishlist] = useState<number[]>([]);

  const departments = [
    "Amazon Devices & Accessories",
    "Baby",
    "Bags, Wallets and Luggage",
    "Beauty",
    "Electronics",
    "Mobiles",
  ];

  const brands = ["iQOO", "OnePlus", "Samsung", "Vivo", "Apple"];

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const filteredProducts = products.filter((p) => {
    if (selectedDepartment !== "All" && p.department !== selectedDepartment)
      return false;
    if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand))
      return false;
    if (selectedRating !== "All" && p.rating < Number(selectedRating))
      return false;
    return true;
  });

  const greenHover =
    "hover:bg-green-50 hover:text-green-700 transition-colors duration-200";

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-6 flex gap-8">
      {/* SIDEBAR */}
      <aside className="w-64 shrink-0 bg-white border border-green-200 rounded-lg p-5 h-fit sticky top-6 shadow-sm">
        {/* Departments */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2 text-green-900">
            Department
          </h2>

          <label className="flex items-center gap-2 mb-1">
            <input
              type="radio"
              name="dept"
              checked={selectedDepartment === "All"}
              onChange={() => setSelectedDepartment("All")}
            />
            All
          </label>

          {departments.map((dept) => (
            <label key={dept} className="flex items-center gap-2 mb-1">
              <input
                type="radio"
                name="dept"
                checked={selectedDepartment === dept}
                onChange={() => setSelectedDepartment(dept)}
              />
              {dept}
            </label>
          ))}
        </section>

        <hr className="my-4" />

        {/* Brands */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2 text-green-900">Brands</h2>

          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-2 mb-1">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => toggleBrand(brand)}
              />
              {brand}
            </label>
          ))}
        </section>

        <hr className="my-4" />

        {/* Rating */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2 text-green-900">
            Customer Reviews
          </h2>

          <label className="flex items-center gap-2 mb-1">
            <input
              type="radio"
              name="rating"
              checked={selectedRating === "All"}
              onChange={() => setSelectedRating("All")}
            />
            All
          </label>

          <label className="flex items-center gap-2 mb-1">
            <input
              type="radio"
              name="rating"
              checked={selectedRating === "4"}
              onChange={() => setSelectedRating("4")}
            />
            ⭐⭐⭐⭐ & up
          </label>
        </section>
      </aside>

      {/* PRODUCT GRID */}
      <main className="flex-1">
        <h1 className="text-xl font-semibold mb-4 text-green-900">
          Showing Products for:
          <span className="text-green-700 font-bold">
            {" "}
            {selectedDepartment}
          </span>
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="relative bg-white border border-green-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(p.id)}
                className="absolute top-3 right-3 p-2 rounded-full bg-white shadow hover:bg-green-50"
              >
                <Heart
                  className={`w-5 h-5 ${
                    wishlist.includes(p.id)
                      ? "text-red-500 fill-red-500"
                      : "text-green-700"
                  }`}
                />
              </button>

              <Link to={`/product/${p.id}`} state={{ fromList: true }}>
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-44 object-contain mb-3"
                />

                {/* Offer badge */}
                <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
                  {p.offer}
                </span>

                <p className="font-semibold mt-2 text-lg text-green-900">
                  {p.priceDisplay}
                </p>

                <p className="text-sm text-gray-500 line-through">
                  M.R.P: {p.mrp}
                </p>

                <p className="mt-2 text-sm text-gray-700">{p.title}</p>
              </Link>

              {/* Add button + Details */}
              <div className="flex items-center gap-3 mt-4">
                <button
                  title="Add"
                  className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold hover:bg-green-700 transition"
                >
                  +
                </button>

                <Link
                  to={`/product/${p.id}`}
                  className="ml-auto text-sm bg-green-600 text-white px-4 py-2 rounded-md font-medium hover:bg-green-700 transition-all duration-200"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-gray-500 mt-5">No products match the filters.</p>
        )}
      </main>
    </div>
  );
}
