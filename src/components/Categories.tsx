import { getAllCategories } from "@/services/categories";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import GlobalLoading from "./GlobalLoading";

interface Categories {
  id: string;
  img: string;
  name: string;
  slug: string;
  description: string;
}

const DEFAULT_IMG =
  "https://i.pinimg.com/736x/0b/e7/53/0be753fb55b0e053f6a769b360b0489b.jpg";

export default function Categories() {
  const {
    data: categories,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
    staleTime: 5 * 60 * 1000,
  });
  console.log("the categories are", categories);

  if (isLoading || isFetching) {
    return <GlobalLoading />;
  }

  const list = Array.isArray(categories) // isse category array hai ya nahi cnfrm karke kisting karte he
    ? categories
    : categories?.categories ?? [];

  if (list.length === 0 && !isFetching) {
    return (
      <div className="flex justify-center items-center h-[50vh] text-gray-500">
        No categories found
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {list.map((cat: Categories) => (
          <Link
            key={cat.slug}
            to={`/categories/${cat.id}`}
            className="group bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all"
          >
            <div className="w-full h-40 overflow-hidden">
              <img
                src={cat?.img || DEFAULT_IMG}
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
