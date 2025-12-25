/* eslint-disable @typescript-eslint/no-explicit-any */
import GlobalLoading from "@/components/GlobalLoading";
import { getcategoriesById } from "@/services/categories";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const DEFAULT_IMG =
  "https://i.pinimg.com/736x/0b/e7/53/0be753fb55b0e053f6a769b360b0489b.jpg";

export default function CategoriesById() {
  const { categoryId } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["categoriesbyid", categoryId],
    queryFn: () => getcategoriesById(categoryId),
    enabled: !!categoryId,
  });

  if (isLoading) return <GlobalLoading />;

  const children = data?.data?.children ?? [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Sub Categories</h1>
        <p className="text-sm text-gray-500 mt-1">
          Browse available sub categories
        </p>
      </div>

      {/* Empty State */}
      {children.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20">
          <p className="text-gray-500 text-lg">No sub categories found</p>
        </div>
      )}

  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {children.map((cat: any) => (
          <Link
            to={`/categories/slug/${cat.slug}`}
            key={cat.id}
            className="group border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-white"
          >
            {/* Image */}
            <div className="h-36 bg-gray-100 overflow-hidden">
              <img
                src={DEFAULT_IMG}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h2 className="font-semibold text-gray-900 truncate">
                {cat.name}
              </h2>

              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs text-gray-500">Slug: {cat.slug}</span>

                {cat.isActive && (
                  <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
                    Active
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
