"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  {
    id: 1,
    img: "https://i.pinimg.com/736x/32/db/a0/32dba04d88989817c7f08f442a9874d9.jpg",
    title: "Mega Electronics Sale",
    subtitle: "Up to 50% OFF on phones, laptops & gadgets",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/736x/43/4a/e1/434ae1c2ad54c503ae45425f0598acb5.jpg",
    title: "Trending Fashion Collection",
    subtitle: "New arrivals for men & women",
  },
  {
    id: 3,
    img: "https://i.pinimg.com/736x/42/d1/a5/42d1a5bfbe20682a1b76dc47262d7f96.jpg",
    title: "Home Essentials Festival",
    subtitle: "Furniture, decor & more • Up to 40% OFF",
  },
];

export default function HomeCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goNext = () => setIndex((prev) => (prev + 1) % banners.length);
  const goPrev = () =>
    setIndex((prev) => (prev - 1 + banners.length) % banners.length);

  return (
    <>
      <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {banners.map((item) => (
            <div
              key={item.id}
              className="min-w-full relative h-[420px] md:h-[480px]"
            >
              <img
                src={item.img}
                className="w-full h-full object-cover"
                alt={item.title}
              />

              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-10 md:px-20">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white">
                  {item.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-200 mt-3">
                  {item.subtitle}
                </p>
                <button className="mt-6 bg-blue-600 px-6 py-3 rounded text-white font-medium hover:bg-blue-700 w-fit">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={goPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 
             bg-white w-12 h-12 shadow-lg rounded-r-full 
             flex items-center justify-center border border-gray-200
             hover:bg-gray-100 hover:scale-110 transition"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" />
        </button>

        <button
          onClick={goNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 
             bg-red-500 w-12 h-12 shadow-lg rounded-l-full 
             flex items-center justify-center border border-red-500
             hover:bg-red-600 hover:scale-110 transition"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        <div className="absolute bottom-4 w-full flex justify-center gap-2">
          {banners.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                index === i ? "bg-white" : "bg-white/50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
