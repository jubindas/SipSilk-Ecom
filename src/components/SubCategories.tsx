import { useState } from "react";

export default function SubCategories() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRating, setSelectedRating] = useState("All");

  const departments = [
    "Amazon Devices & Accessories",
    "Baby",
    "Bags, Wallets and Luggage",
    "Beauty",
    "Electronics",
    "Mobiles",
  ];

  const brands = ["iQOO", "OnePlus", "Samsung", "Vivo", "Apple"];

  const products = [
    {
      id: 1,
      title: "iQOO 15 (Legend, 12GB RAM, 256GB Storage)",
      price: "₹72,999",
      mrp: "₹76,999",
      img: "https://m.media-amazon.com/images/I/71+DWmbvjBL._SY741_.jpg",
      offer: "5% off",
    },
    {
      id: 2,
      title: "OnePlus Nord 5",
      price: "₹31,998",
      mrp: "₹34,999",
      img: "https://m.media-amazon.com/images/I/71x2QJjvTRL._SL1500_.jpg",
      offer: "9% off",
    },
    {
      id: 3,
      title: "Samsung Galaxy Z Fold 6",
      price: "₹1,09,,999",
      mrp: "₹1,64,,999",
      img: "https://m.media-amazon.com/images/I/71f6lZbrt9L._SX679_.jpg",
      offer: "33% off",
    },
  ];

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-6 flex gap-8">
      {/* ---------------- LEFT SIDEBAR ---------------- */}
      <aside className="w-64 shrink-0 bg-white border border-gray-200 rounded-lg p-5 h-fit sticky top-24">
        {/* Department */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Department</h2>

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
          <h2 className="text-lg font-semibold mb-2">Brands</h2>

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

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Customer Reviews</h2>

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

      <main className="flex-1">
        <h1 className="text-xl font-semibold mb-4">
          Showing Products for:{" "}
          <span className="text-blue-600">{selectedDepartment}</span>
        </h1>

        <div className="grid grid-cols-4 gap-5">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-lg transition"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-48 object-contain mb-3"
              />

              <span className="inline-block bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded">
                {p.offer}
              </span>

              <p className="font-semibold mt-2 text-lg">{p.price}</p>
              <p className="text-sm text-gray-500 line-through">
                M.R.P: {p.mrp}
              </p>

              <p className="mt-2 text-sm text-gray-700">{p.title}</p>

              <button className="w-10 h-10 rounded-full bg-yellow-400 mt-3 flex items-center justify-center text-xl font-bold">
                +
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}




