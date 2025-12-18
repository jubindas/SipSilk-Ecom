import { ArrowRight } from "lucide-react";

import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Why Handmade Brass Is Making a Comeback",
    image:
      "https://i.pinimg.com/1200x/dd/78/2f/dd782fab487c0b714178b44ab5bd0531.jpg",
    excerpt:
      "Handcrafted brass products are returning to modern homes due to their durability, health benefits, and timeless beauty.",
  },
  {
    id: 2,
    title: "Copper Utensils and Their Health Benefits",
    image:
      "https://i.pinimg.com/736x/04/47/2e/04472e608e52e95a8fcba2933da4260d.jpg",
    excerpt:
      "Copper has been used in Indian households for centuries. Learn why science supports this ancient tradition.",
  },
  {
    id: 3,
    title: "How to Maintain Brass & Copper Products",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    excerpt:
      "Simple natural methods to clean and maintain brass and copper so they shine for generations.",
  },
  {
    id: 4,
    title: "Eco-Friendly Kitchen: A Sustainable Choice",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    excerpt:
      "Switching to metal cookware helps reduce plastic use and supports sustainable living.",
  },
];

export default function AllBlogs() {
  return (
    <section className="py-20 bg-linear-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-serif text-slate-900">
            Our Blogs
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm">
            Discover stories, traditions, and insights behind handcrafted brass,
            copper, and sustainable living.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-green-700 transition-colors">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {blog.excerpt}
                  </p>
                </div>

                <Link
                  to={`/blogs/${blog.id}`}
                  className="inline-flex items-center gap-2 text-green-700 font-semibold text-sm hover:gap-3 transition-all"
                >
                  Read Full Article
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
