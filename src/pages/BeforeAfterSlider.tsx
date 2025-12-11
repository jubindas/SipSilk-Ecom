import { useState, useRef } from "react";

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMove = (e: any) => {
    if (!containerRef.current) return;

    const bounds = containerRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;

    let percentage = (x / bounds.width) * 100;

    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;

    setPosition(percentage);
  };

  return (
    <section className="py-20 bg-[#e9f5e3]">
      {" "}
      <h2 className="text-3xl font-serif text-center text-red-900 mb-12">
       Bringing Assam’s Craft and Culture to You
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 px-6">
        <div className="md:col-span-3">
          <h3 className="text-2xl font-semibold text-red-900 mb-4">
            Bonfresh Organic Teas
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            Bonfresh brings pure, handcrafted organic teas from Assam—ranging
            from classic green teas to herbal blends and artisanal varieties.
            Sustainably sourced and free from chemicals, our teas support
            wellness while empowering local farmers and communities.
          </p>
        </div>

        <div
          className="relative md:col-span-6 rounded-xl overflow-hidden shadow-xl select-none cursor-pointer h-[450px]"
          ref={containerRef}
          onMouseMove={(e) => e.buttons === 1 && handleMove(e)}
          onTouchMove={(e) => handleMove({ clientX: e.touches[0].clientX })}
        >
          <img
            src="https://i.pinimg.com/1200x/ca/6d/b6/ca6db6721f44c2f8ea75dbad288d0710.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <img
            src="https://i.pinimg.com/1200x/b9/5a/58/b95a58919af7c48a7724042e57d3c22f.jpg"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ clipPath: `inset(0 0 0 ${position}%)` }}
          />

          <div className="absolute top-4 left-4 bg-white/80 px-3 py-1 rounded-md text-sm font-medium shadow">
            OUR TEA
          </div>

          <div className="absolute top-4 right-4 bg-white/80 px-3 py-1 rounded-md text-sm font-medium shadow">
            OUR SILK
          </div>

          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-md"
            style={{ left: `${position}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -ml-[18px] w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl border cursor-pointer">
              <span className="font-bold text-gray-700">|||</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-2xl font-semibold text-red-900 mb-4">
            Harmohan Silk Factory
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            Handwoven Eri, Muga, and Mulberry silk from Sualkuchi, where
            heritage meets craftsmanship. Every saree carries a golden glow and
            the soulful touch of master artisans.
          </p>
        </div>
      </div>
    </section>
  );
}
