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

export default function Blogs() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-serif text-slate-900">Our Blog</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mt-4 rounded-full" />
        </div>

        <div>
          <div
            className="
              flex gap-8 w-max
              animate-blog-scroll
              hover:paused
              transform-gpu will-change-transform
            "
          >
            {[...blogs, ...blogs].map((blog, index) => (
              <div
                key={index}
                className="
                  min-w-[320px] max-w-[320px]
                  bg-white rounded-3xl overflow-hidden
                  shadow-md hover:shadow-xl
                  transition-shadow duration-300
                  group
                "
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="
                      w-full h-full object-cover
                      transition-transform duration-500
                      group-hover:scale-110
                    "
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2 transition-colors group-hover:text-green-700">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {blog.excerpt}
                  </p>

                  <button className="text-green-700 text-sm font-semibold cursor-pointer">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-14">
          <Link
            to="/blogs"
            className="
              group inline-flex items-center gap-2
              px-8 py-3 rounded-full
              bg-green-600 text-white
              font-semibold text-sm
              shadow-md transition-all
              hover:bg-green-700 hover:-translate-y-0.5
              cursor-pointer
            "
          >
            Check Out More Blogs
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes blog-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-blog-scroll {
          animation: blog-scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
