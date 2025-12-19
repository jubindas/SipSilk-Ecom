import { useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import products from "@/components/productsData";

import { useCartStore } from "@/store/useCartStore";

import {
  ChevronLeft,
  Zap,
  Star,
  ShieldCheck,
  RefreshCcw,
  Truck,
  MessageSquare,
} from "lucide-react";

export default function ProductDetails() {
  const { id } = useParams();

  const product = products.find((p) => String(p.id) === String(id));

  const navigate = useNavigate();

  const addToCart = useCartStore((state) => state.addToCart);

  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      rating: 5,
      date: "12 Aug 2025",
      comment: "Amazing product quality. Totally worth the price.",
    },
    {
      id: 2,
      name: "Ananya Verma",
      rating: 4,
      date: "02 Aug 2025",
      comment: "Product is good overall. Battery life could be better.",
    },
    {
      id: 3,
      name: "Amit Das",
      rating: 3,
      date: "28 Jul 2025",
      comment: "Average experience. Expected better build quality.",
    },
  ];

  const [mainMedia, setMainMedia] = useState(
    product ? product.images[0] : null
  );

  const isVideo = mainMedia === "video";

  if (!product)
    return <div className="p-10 text-center">Product not found.</div>;

  return (
    <div className="min-h-screen bg-[#fcfdfc] text-slate-700 pb-12">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-emerald-600 hover:text-emerald-700 text-sm font-medium"
        >
          <ChevronLeft size={16} /> Back
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7 flex flex-col md:flex-row gap-3">
          <div className="flex md:flex-col gap-2 order-2 md:order-1">
            {[...product.images, "video"].map((src, index) => (
              <button
                key={index}
                onClick={() => setMainMedia(src)}
                className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all p-0.5 bg-white ${
                  mainMedia === src
                    ? "border-emerald-500"
                    : "border-slate-100 hover:border-emerald-200"
                }`}
              >
                <img
                  src={
                    src === "video"
                      ? "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
                      : src
                  }
                  className="w-full h-full object-cover rounded-lg"
                  alt="thumb"
                />
              </button>
            ))}
          </div>

          <div className="flex-1 bg-white rounded-3xl border border-emerald-50 p-4 shadow-sm flex items-center justify-center order-1 md:order-2 h-[400px]">
            {isVideo ? (
              <iframe
                width="100%"
                height="100%"
                className="rounded-xl"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="video"
              />
            ) : (
              <img
                src={mainMedia || ""}
                className="max-h-full object-contain hover:scale-105 transition-transform"
                alt={product.title}
              />
            )}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 space-y-4">
          <div className="bg-white rounded-3xl p-6 border border-emerald-50 shadow-sm">
            <div className="flex justify-between items-start">
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-md text-[10px] font-bold uppercase">
                {product.stock ? "In Stock" : "Low Stock"}
              </span>
              <div className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                <Star size={12} className="fill-emerald-500" /> {product.rating}
              </div>
            </div>

            <h1 className="text-2xl font-bold text-slate-800 mt-2">
              {product.title}
            </h1>

            <div className="mt-4">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-slate-900">
                  {product.priceDisplay}
                </span>
                <span className="text-sm text-slate-400 line-through">
                  {product.mrp}
                </span>
              </div>
              <p className="text-emerald-600 text-xs font-semibold flex items-center gap-1 mt-1">
                <Zap size={12} fill="currentColor" /> {product.offer} discount
                applied
              </p>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed mt-4 line-clamp-3">
              {product.description}
            </p>

            <div className="grid grid-cols-3 gap-2 mt-6">
              {[
                { icon: Truck, label: "Free Shipping" },
                { icon: RefreshCcw, label: "Easy Returns" },
                { icon: ShieldCheck, label: "Secure" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center p-2 rounded-xl bg-slate-50 border border-slate-100"
                >
                  <item.icon size={14} className="text-emerald-600 mb-1" />
                  <span className="text-[10px] font-medium text-slate-600">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <button
                className="py-3 rounded-xl bg-emerald-600 text-white text-sm font-bold hover:bg-emerald-700 transition shadow-md shadow-emerald-100"
                onClick={() => {
                  addToCart(product);
                  alert("Added!");
                }}
              >
                Add to Cart
              </button>
              <button
                className="py-3 rounded-xl bg-slate-800 text-white text-sm font-bold hover:bg-black transition"
                onClick={() => {
                  addToCart(product);
                  navigate("/cart");
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <MessageSquare size={20} className="text-emerald-500" /> Customer
            Feedback
          </h2>
          <button className="text-sm font-bold text-emerald-600 hover:underline">
            Write a Review
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-emerald-900 text-white p-6 rounded-2xl flex flex-col justify-center items-center">
            <p className="text-4xl font-black">{product.rating}</p>
            <div className="flex gap-1 my-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-emerald-400 text-emerald-400"
                />
              ))}
            </div>
            <p className="text-emerald-200 text-xs mt-1 italic">
              Total {reviews.length} reviews
            </p>
          </div>


          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:border-emerald-100 transition"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 text-xs font-bold uppercase">
                    {review.name.charAt(0)}
                  </div>
                  <span className="text-sm font-bold">{review.name}</span>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={10}
                      className={
                        i < review.rating
                          ? "fill-emerald-500 text-emerald-500"
                          : "text-slate-100"
                      }
                    />
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed italic">
                "{review.comment}"
              </p>
              <p className="text-[10px] text-slate-300 mt-3 font-medium uppercase tracking-wider">
                {review.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
