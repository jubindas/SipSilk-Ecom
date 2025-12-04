/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import { Link } from "react-router";

export default function CategoriesList() {
  const categories = [
    {
      name: "Mobiles & Tablets",
      img: "https://i.pinimg.com/736x/5a/c0/d5/5ac0d522480fabc0b612e2e303c17b53.jpg",
    },
    {
      name: "Fashion",
      img: "https://i.pinimg.com/736x/ce/ef/4f/ceef4f217da7abdc09629104213085cf.jpg",
      arrow: true,
      dropdown: ["Men's Wear", "Women's Wear", "Kids Fashion"],
    },
    {
      name: "Electronics",
      img: "https://i.pinimg.com/1200x/eb/d8/4a/ebd84aee9bd1feddce359d9803236f4b.jpg",
      arrow: true,
      dropdown: ["Laptops", "Mobiles", "Headphones"],
    },
    {
      name: "Home & Furniture",
      img: "https://i.pinimg.com/1200x/18/27/f4/1827f4f4b7db10aa379281338cf730c5.jpg",
      arrow: true,
      dropdown: ["Furniture", "Decor", "Lighting"],
    },
    {
      name: "Appliances",
      img: "https://i.pinimg.com/1200x/eb/d8/4a/ebd84aee9bd1feddce359d9803236f4b.jpg",
      arrow: true,
      dropdown: ["Refrigerators", "Washing Machines", "Air Conditioners"],
    },
    {
      name: "Beauty & Personal Care",
      img: "https://i.pinimg.com/736x/27/6e/f3/276ef331f2dfa51b1cb35ebaed5cb42d.jpg",
      arrow: true,
      dropdown: ["Makeup", "Skincare", "Hair Care"],
    },
    {
      name: "Sports & Fitness",
      img: "https://i.pinimg.com/736x/ac/34/d1/ac34d1e734d3ce5490f836a2836f4fbd.jpg",
      arrow: true,
      dropdown: ["Gym Equipment", "Sportswear", "Outdoor Sports"],
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
