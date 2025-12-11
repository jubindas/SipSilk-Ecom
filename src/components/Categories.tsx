import { Link } from "react-router-dom";

const categoriesData = [
  {
    name: "Mobiles & Tablets",
    slug: "mobiles",
    img: "https://i.pinimg.com/736x/ce/ef/4f/ceef4f217da7abdc09629104213085cf.jpg",
  },
  {
    name: "Laptops",
    slug: "mobiles",
    img: "https://i.pinimg.com/736x/5b/26/e9/5b26e9fc9f2700d2e1e898821f1fcbdc.jpg",
  },
  {
    name: "Fashion",
    slug: "mobiles",
    img: "https://i.pinimg.com/1200x/d3/ef/08/d3ef082cceffe4791ec75a6ef9e449cc.jpg",
  },
  {
    name: "Beauty",
    slug: "mobiles",
    img: "https://i.pinimg.com/736x/3b/62/f4/3b62f4a435f957aa3083081fecf39673.jpg",
  },
  {
    name: "Home & Kitchen",
    slug: "mobiles",
    img: "https://i.pinimg.com/736x/96/85/f5/9685f59454be32e6cceb1f236f0fffcf.jpg",
  },
  {
    name: "Electronics",
    slug: "mobiles",
    img: "https://i.pinimg.com/1200x/e1/22/34/e122343ac7ddb125851689e1fb05cc4a.jpg",
  },
  {
    name: "Sports",
    slug: "mobiles",
    img: "https://i.pinimg.com/736x/ff/21/96/ff219690d5723fe50272c4ca2e4ca352.jpg",
  },
  {
    name: "Kids",
    slug: "mobiles",
    img: "https://i.pinimg.com/736x/f8/29/ef/f829efb8940140c34a116091a7f74b6e.jpg",
  },
];

export default function Categories() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {categoriesData.map((cat) => (
          <Link
            key={cat.slug}
            to={`/categories/${cat.slug}`}
            className="group bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all"
          >
            <div className="w-full h-40 overflow-hidden">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                {cat.name}
              </h2>
              <p className="text-sm text-gray-500 mt-1">View Products →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
