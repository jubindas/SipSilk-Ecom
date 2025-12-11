"use client";

import { useState, useEffect } from "react";

const banners = [
  {
    id: 1,
    img: "./sipsilk-banner.jpg",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/736x/43/4a/e1/434ae1c2ad54c503ae45425f0598acb5.jpg",
  },
  {
    id: 3,
    img: "https://i.pinimg.com/736x/42/d1/a5/42d1a5bfbe20682a1b76dc47262d7f96.jpg",
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
              <img src={item.img} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

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
