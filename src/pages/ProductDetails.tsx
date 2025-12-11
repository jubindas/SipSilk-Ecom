import { useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import products from "@/components/productsData";

import { useCartStore } from "@/store/useCartStore";

export default function ProductDetails() {
  const { id } = useParams();

  const product = products.find((p) => String(p.id) === String(id));

  const navigate = useNavigate();

  const addToCart = useCartStore((state) => state.addToCart);

  const [mainMedia, setMainMedia] = useState(
    product ? product.images[0] : null
  );

  const isVideo = mainMedia === "video";

  if (!product) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <p>Product not found.</p>
        <button className="mt-4 text-blue-600" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-12 gap-8">
      <div className="col-span-2 space-y-4 sticky top-24 self-start">
        {[...product.images, "video"].map((src, index) => (
          <button
            key={index}
            onClick={() => setMainMedia(src)}
            className={`w-full p-2 border rounded-xl bg-white hover:shadow-md transition ${
              mainMedia === src ? "border-blue-500" : "border-gray-200"
            }`}
          >
            {src === "video" ? (
              <img
                src="https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
                className="w-full h-24 object-cover rounded-md"
                alt="video-thumb"
              />
            ) : (
              <img
                src={src}
                className="w-full h-24 object-contain rounded-md"
                alt="thumb"
              />
            )}
          </button>
        ))}
      </div>

      <div className="col-span-6 flex items-center justify-center">
        <div className="w-full max-w-[600px] p-5 border rounded-2xl bg-white shadow-sm">
          {isVideo ? (
            <iframe
              width="100%"
              height="420"
              className="rounded-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          ) : (
            <img
              src={mainMedia || ""}
              className="w-full h-[500px] object-contain rounded-lg hover:scale-105 transition-transform"
              alt={product.title}
            />
          )}
        </div>
      </div>

      <div className="col-span-4">
        <div className="sticky top-24 bg-white p-5 rounded-2xl border shadow-sm">
          <h1 className="text-2xl font-bold leading-snug mb-3">
            {product.title}
          </h1>

          <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
            ⭐⭐⭐⭐☆ <span>({product.rating})</span>
            <span className="text-gray-400">•</span>
            <span>{product.sold}</span>
          </div>

          <div className="mb-4">
            <span className="text-4xl font-bold">{product.priceDisplay}</span>
            <p className="text-sm text-gray-500 line-through">
              M.R.P: {product.mrp}
            </p>
            <p className="text-green-600 font-medium mt-1">
              Limited time deal — {product.offer}
            </p>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            {product.description}
          </p>

          <div className="p-3 bg-gray-50 rounded-lg border mb-4">
            <p className="text-sm">
              <strong>Delivery:</strong> Free delivery Saturday.
            </p>
            <p className="text-sm text-gray-600">
              Fastest delivery Tomorrow if ordered within 4 hrs.
            </p>
          </div>

          <p
            className={`font-semibold mb-2 ${
              product.stock ? "text-green-600" : "text-red-600"
            }`}
          >
            {product.stock ? "In stock" : "Out of stock"}
          </p>

          <p className="text-gray-500 text-sm mb-6">
            Ships from Amazon • Sold by Demo Seller
          </p>

          <div className="flex gap-4 mb-4">
            <button
              className="flex-1 py-3 rounded-lg bg-yellow-400 font-semibold hover:bg-yellow-500 transition"
              onClick={() => {
                addToCart(product);
                alert("Added to cart!");
              }}
            >
              Add to Cart
            </button>

            <button
              className="flex-1 py-3 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
              onClick={() => {
                addToCart(product);
                navigate("/cart");
              }}
            >
              Buy Now
            </button>
          </div>

          <p className="text-xs text-gray-500">
            Secure payment • 10-day replacement policy
          </p>
        </div>
      </div>
    </div>
  );
}
