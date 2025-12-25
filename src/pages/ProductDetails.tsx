/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "@/services/products";
import {

  Star,
  ShieldCheck,
  RefreshCcw,
  Truck,
  ChevronRight,
} from "lucide-react";
import GlobalLoading from "@/components/GlobalLoading";

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    rating: 5,
    date: "12 Aug 2025",
    comment:
      "Excellent performance and build quality. The laptop handles heavy multitasking without any lag.",
  },
  {
    id: 2,
    name: "Ananya Verma",
    rating: 4,
    date: "03 Aug 2025",
    comment:
      "Very smooth experience and premium design. Battery life is good but could be slightly better.",
  },
  {
    id: 3,
    name: "Amit Das",
    rating: 5,
    date: "28 Jul 2025",
    comment:
      "Perfect for professional work. Display quality is sharp and the keyboard feels great.",
  },
  {
    id: 4,
    name: "Neha Gupta",
    rating: 4,
    date: "20 Jul 2025",
    comment:
      "Fast boot time and amazing performance. Worth the price for daily office and coding work.",
  },
  {
    id: 5,
    name: "Sourav Dey",
    rating: 3,
    date: "15 Jul 2025",
    comment:
      "Overall good laptop, but it heats a little during long usage. Still satisfied with the purchase.",
  },
  {
    id: 6,
    name: "Pooja Singh",
    rating: 5,
    date: "09 Jul 2025",
    comment:
      "Premium look, powerful performance, and excellent display. Highly recommended!",
  },
];

const BASE_URL = "http://127.0.0.1:3000";

export default function ProductDetails() {
  const { productId } = useParams();

  const { data: productbyId, isLoading } = useQuery({
    queryKey: ["productbyid", productId],
    queryFn: () => getProductsByCategory(productId),
  });

  const products = productbyId?.data;
  const [mainMedia, setMainMedia] = useState<string | "video" | null>(null);

  if (isLoading) return <GlobalLoading />;
  if (!products)
    return (
      <div className="p-20 text-center font-medium">Product not found</div>
    );

  const images: string[] = products?.productImages
    ? JSON.parse(products.productImages)
    : [];
  const currentMedia = mainMedia || products.mainImage;
  const isVideo = currentMedia === "video";

  return (
    <div className="min-h-screen bg-white text-slate-900 pb-20">
      <nav className="max-w-7xl mx-auto px-6 py-4 text-xs text-slate-400 uppercase tracking-widest flex items-center gap-2">
        <span>Shop</span> <ChevronRight size={10} />
        <span>{products.masterCategory?.name}</span> <ChevronRight size={10} />
        <span className="text-slate-900 font-semibold">
          {products.productName}
        </span>
      </nav>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-4">
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="bg-[#f9f9f9] rounded-2xl overflow-hidden aspect-square flex items-center justify-center border border-slate-100">
            {isVideo ? (
              <iframe
                width="100%"
                height="100%"
                src={products.youtubeLink.replace("watch?v=", "embed/")}
                title="Product video"
                allowFullScreen
              />
            ) : (
              <img
                src={`${BASE_URL}${currentMedia}`}
                className="w-full h-full object-contain mix-blend-multiply p-8 hover:scale-105 transition-transform duration-700"
                alt={products.productName}
              />
            )}
          </div>


          <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
            <Thumbnail
              active={currentMedia === products.mainImage}
              onClick={() => setMainMedia(null)}
              src={`${BASE_URL}${products.mainImage}`}
            />
            {images.map((img, i) => (
              <Thumbnail
                key={i}
                active={currentMedia === img}
                onClick={() => setMainMedia(img)}
                src={`${BASE_URL}${img}`}
              />
            ))}
            {products.youtubeLink && (
              <button
                onClick={() => setMainMedia("video")}
                className={`w-20 h-20 rounded-lg border-2 flex items-center justify-center bg-slate-900 text-[10px] text-white font-bold uppercase ${
                  currentMedia === "video"
                    ? "border-emerald-500"
                    : "border-transparent"
                }`}
              >
                Video
              </button>
            )}
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] bg-slate-900 text-white px-2 py-0.5 rounded uppercase font-bold tracking-tighter">
              {products.quantity > 0 ? "In Stock" : "Sold Out"}
            </span>
            <div className="flex items-center gap-1 text-sm font-semibold text-amber-500">
              <Star size={14} className="fill-current" /> 4.8{" "}
              <span className="text-slate-400 font-normal">(24 Reviews)</span>
            </div>
          </div>

          <h1 className="text-4xl font-serif text-slate-800 mb-2">
            {products.productName}
          </h1>
          <p className="text-slate-500 text-lg mb-6 leading-relaxed font-light">
            {products.shortDesc}
          </p>

          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-3xl font-bold">
              ₹{products.sellingPrice.toLocaleString()}
            </span>
            <span className="text-xl text-slate-300 line-through">
              ₹{products.maximumRetailPrice.toLocaleString()}
            </span>
            <span className="text-emerald-600 font-bold text-sm uppercase tracking-tight">
              Save{" "}
              {Math.round(
                ((products.maximumRetailPrice - products.sellingPrice) /
                  products.maximumRetailPrice) *
                  100
              )}
              % Off
            </span>
          </div>

          <div className="space-y-4 mb-10 border-t border-b border-slate-100 py-8">
            <p className="text-slate-600 leading-relaxed text-sm italic">
              "{products.longDesc}"
            </p>
            <div className="grid grid-cols-2 gap-y-3 text-xs tracking-widest font-semibold text-slate-400">
              <p>
                Category:{" "}
                <span className="text-slate-900">
                  {products.masterCategory?.name}
                </span>
              </p>
              <p>
                Size:{" "}
                <span className="text-slate-900">
                  {products.size || "Standard"}
                </span>
              </p>
            </div>
          </div>


          <div className="flex flex-col gap-3">
            <button className="w-full bg-slate-900 text-white py-5 rounded-full font-bold hover:bg-slate-800 transition-all active:scale-[0.98] shadow-xl shadow-slate-200">
              Add to Bag — ₹{products.sellingPrice.toLocaleString()}
            </button>
            <button className="w-full bg-white text-slate-900 border border-slate-200 py-5 rounded-full font-bold hover:bg-slate-50 transition-all">
              Save to Wishlist
            </button>
          </div>


          <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-slate-50">
            <Feature icon={Truck} label="Free Shipping" />
            <Feature icon={RefreshCcw} label="30-Day Returns" />
            <Feature icon={ShieldCheck} label="Secure Payment" />
          </div>
        </div>
      </div>


      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="border-b border-slate-200 pb-8 mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-serif italic mb-2">Guest Feedback</h2>
            <p className="text-slate-400 text-sm tracking-widest uppercase">
              What our community says
            </p>
          </div>
          <div className="text-right">
            <p className="text-4xl font-bold italic">4.8</p>
            <div className="flex gap-1 justify-end text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="currentColor" />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reviews.map((review) => (
            <div key={review.id} className="group">
              <div className="flex gap-1 text-amber-400 mb-4 transition-transform group-hover:-translate-y-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-6 font-light">
                "{review.comment}"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    {review.name}
                  </p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-tighter">
                    {review.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Thumbnail({
  active,
  onClick,
  src,
}: {
  active: boolean;
  onClick: () => void;
  src: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all shrink-0 p-1 bg-white ${
        active ? "border-slate-900" : "border-slate-100 hover:border-slate-300"
      }`}
    >
      <img src={src} className="w-full h-full object-contain" alt="thumbnail" />
    </button>
  );
}

function Feature({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="flex flex-col items-center text-center gap-2">
      <Icon size={20} className="text-slate-400 font-light" />
      <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500">
        {label}
      </span>
    </div>
  );
}
