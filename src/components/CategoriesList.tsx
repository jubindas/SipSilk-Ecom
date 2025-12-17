/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import { Link } from "react-router";

export default function CategoriesList() {
  const categories = [
    {
      name: "Blue Tea",
      img: "products/blue-tea-2.jpg",
    },
    {
      name: "Green Tea",
      img: "products/blue-tea-2.jpg",
      arrow: true,
      dropdown: ["Men's Wear", "Women's Wear", "Kids Fashion"],
    },
    {
      name: "Green Hurble Tea",
      img: "products/green-tea-50g.jpg",
      arrow: true,
      dropdown: ["Laptops", "Mobiles", "Headphones"],
    },
    {
      name: "Rose Tea",
      img: "products/rose-tea-1.jpg",
      arrow: true,
      dropdown: ["Furniture", "Decor", "Lighting"],
    },
    {
      name: "Smoke Tea",
      img: "smoke-tea.jpg",
      arrow: true,
      dropdown: ["Refrigerators", "Washing Machines", "Air Conditioners"],
    },
    {
      name: "Turmeric Tea",
      img: "products/turmeric-tea.jpeg",
      arrow: true,
      dropdown: ["Makeup", "Skincare", "Hair Care"],
    },
  ];

  return (
    <div className="w-full py-4">
      <div className="max-w-[1500px] mx-auto flex items-center justify-center gap-14 flex-wrap px-6">
        {categories.map((cat) => (
          <CategoryItem key={cat.name} cat={cat} />
        ))}
      </div>
    </div>
  );
}

function CategoryItem({ cat }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center cursor-pointer group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <img
        src={cat.img}
        alt={cat.name}
        className="w-14 h-14 object-contain transition-transform duration-200 group-hover:scale-105"
      />

      <div className="flex items-center gap-1 mt-1 text-sm font-medium text-gray-700 group-hover:text-blue-600">
        {cat.name}
        {cat.arrow && <span className="text-lg">▾</span>}
      </div>

      {cat.arrow && open && (
        <div className="absolute top-[70px] z-50 mt-5">
          <ul className="p-3 bg-white shadow-xl rounded-xl w-56 border border-gray-200 animate-fadeIn">
            {cat.dropdown.map((item: any, index: any) => (
              <li key={index}>
                <Link
                  to={`/category/${item.toLowerCase().replace(/ /g, "-")}`}
                  className="block px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 text-gray-700 font-medium"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
