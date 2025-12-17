import { useCartStore } from "@/store/useCartStore";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  Truck,
  Tag,
  MapPin,
  CreditCard,
  Home,
  Trash2,
  Minus,
  Plus,
  Wallet,
} from "lucide-react";

import { Building2 } from "lucide-react";

export default function CartPage() {

  const { items, updateQty, removeItem, clearCart } = useCartStore();

  const navigate = useNavigate();

  const [coupon, setCoupon] = useState("");

  const [couponApplied, setCouponApplied] = useState(false);
  
  const [couponDiscount, setCouponDiscount] = useState(0);
  
  const [selectedAddress, setSelectedAddress] = useState("Home");
  
  const [paymentMethod, setPaymentMethod] = useState("COD");
  
  const [adressSHow, setAdressShow] = useState(false);

  const subTotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);
  
  const shippingFee = 23;
  
  const total = subTotal - couponDiscount + shippingFee;

  const addresses = [
    {
      id: "Home",
      label: "Home",
      details: "Mumbai, Maharashtra",
      icon: <Home className="w-6 h-6 text-green-700" />,
    },
    {
      id: "Office",
      label: "Office",
      details: "Pune, Maharashtra",
      icon: <Building2 className="w-6 h-6 text-green-700" />,
    },
  ];

  const applyCoupon = () => {
    if (coupon === "SAVE10") {
      setCouponApplied(true);
      setCouponDiscount(Math.round(subTotal * 0.1));
    } else {
      alert("Invalid coupon");
    }
  };

  const placeOrder = () => {
    if (!items.length) return alert("Cart empty!");
    alert("Order placed!");
    clearCart();
    navigate("/");
  };

  const hoverGreen =
    "hover:bg-green-50 hover:text-green-700 transition-all duration-200";

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-12 gap-10 text-[#111827]">
      <div className="col-span-8 space-y-6">

        <div className="bg-green-50 border border-green-200 rounded-xl p-5">
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-green-700" />
            <h3 className="font-semibold text-lg text-green-900">
              Check Delivery Time
            </h3>
          </div>
          <button
            className={`mt-3 px-4 py-2 border rounded-lg text-green-700 ${hoverGreen}`}
          >
            Enter PIN Code
          </button>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-5">
          <div className="flex items-center gap-3">
            <Tag className="w-6 h-6 text-green-600" />
            <h3 className="font-semibold text-lg text-green-900">
              Available Offers
            </h3>
          </div>

          <p className="text-green-700 text-sm mt-2">
            • Use coupon <strong>SAVE10</strong> to get 10% discount.
          </p>
        </div>


        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-green-900">
            ✓ {items.length}/{items.length} ITEMS SELECTED
          </h2>

          <button
            onClick={() => clearCart()}
            className="text-green-700 hover:underline"
          >
            Remove All
          </button>
        </div>

        {items.length === 0 ? (
          <div className="p-10 bg-white border rounded-xl text-center">
            <p>Your cart is empty.</p>
            <button
              className="mt-4 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          items.map((it, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-4 flex gap-6 relative shadow-sm hover:shadow-md transition"
            >
              <Trash2
                className="absolute right-4 top-4 w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer"
                onClick={() => removeItem(index)}
              />

              <img
                src={it.images[0]}
                className="w-28 h-32 object-cover rounded-xl"
                alt=""
              />

              <div className="flex-1">
                <h3 className="font-semibold text-lg text-green-900">
                  {it.title}
                </h3>
                <p className="text-sm text-gray-600">Sold by: Demo Supplier</p>


                <div className="flex gap-8 mt-3">
                  <div>
                    <p className="text-sm font-medium">Size</p>
                    <select className="border px-3 py-2 rounded-lg mt-1">
                      <option>{it.size}</option>
                    </select>
                  </div>

                  <div>
                    <p className="text-sm font-medium">Quantity</p>

                    <div className="flex border rounded-lg mt-1">
                      <button
                        className="px-3 py-1 hover:bg-green-50"
                        onClick={() => updateQty(index, it.qty - 1)}
                      >
                        <Minus className="w-4 h-4" />
                      </button>

                      <span className="px-4 py-1">{it.qty}</span>

                      <button
                        className="px-3 py-1 hover:bg-green-50"
                        onClick={() => updateQty(index, it.qty + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>


                <div className="mt-4">
                  <p className="font-bold text-lg text-green-900">
                    ₹{it.price}
                  </p>
                  <p className="text-sm line-through text-gray-500">
                    ₹{it.mrp}
                  </p>
                  <p className="text-green-600 text-sm font-medium">
                    You save: ₹{it.mrp - it.price}
                  </p>
                </div>

                <p className="text-sm text-gray-600 mt-2 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-green-700" />
                  14 Days Return Available
                </p>
              </div>
            </div>
          ))
        )}
      </div>


      <div className="col-span-4">
        <div className="sticky top-10 space-y-6">

          <div className="bg-white border rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Tag className="w-6 h-6 text-green-700" />
              <h3 className="font-semibold text-lg text-green-900">
                Apply Coupons
              </h3>
            </div>

            <div className="flex">
              <input
                type="text"
                className="flex-1 border px-3 py-2 rounded-l-lg"
                placeholder="Enter coupon code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button
                onClick={applyCoupon}
                className="px-5 py-2 bg-green-700 text-white rounded-r-lg hover:bg-green-800"
              >
                APPLY
              </button>
            </div>

            {couponApplied && (
              <p className="text-green-600 mt-2">
                Discount Applied: -₹{couponDiscount}
              </p>
            )}
          </div>


          <div
            className="bg-white border rounded-xl p-5 shadow-sm cursor-pointer hover:shadow-md"
            onClick={() => setAdressShow((prev) => !prev)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-6 h-6 text-green-700" />
                <h3 className="font-semibold text-lg text-green-900">
                  Delivery Address
                </h3>
              </div>

              <div
                className={`transition-transform ${
                  adressSHow ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </div>
            </div>

            <div
              className={`transition-all overflow-hidden ${
                adressSHow ? "max-h-[500px] mt-4" : "max-h-0"
              }`}
            >
              <div className="grid gap-4">
                {addresses.map((addr) => (
                  <div
                    key={addr.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedAddress(addr.id);
                    }}
                    className={`border rounded-xl p-4 flex items-start gap-3 transition-all cursor-pointer
                      ${
                        selectedAddress === addr.id
                          ? "border-green-600 bg-green-50 shadow-sm"
                          : "hover:border-green-400"
                      }`}
                  >
                    <div className="text-green-700">{addr.icon}</div>

                    <div>
                      <p className="font-semibold text-[15px] text-green-900">
                        {addr.label}
                      </p>
                      <p className="text-gray-600 text-sm">{addr.details}</p>
                    </div>

                    {selectedAddress === addr.id && (
                      <span className="ml-auto text-green-700 font-medium">
                        Selected
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>


          <div className="bg-white border rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="w-6 h-6 text-green-700" />
              <h3 className="font-semibold text-lg text-green-900">
                Payment Method
              </h3>
            </div>

            <div className="grid gap-4">

              <div
                onClick={() => setPaymentMethod("COD")}
                className={`border rounded-xl p-4 flex items-center gap-3 cursor-pointer transition-all
                    ${
                      paymentMethod === "COD"
                        ? "border-green-600 bg-green-50 shadow-sm"
                        : "hover:border-green-400"
                    }`}
              >
                <Wallet className="w-6 h-6 text-green-700" />
                <div className="flex-1">
                  <p className="font-semibold text-green-900">
                    Cash On Delivery (COD)
                  </p>
                  <p className="text-sm text-gray-600">
                    Pay in cash when your order arrives.
                  </p>
                </div>

                <input
                  type="radio"
                  checked={paymentMethod === "COD"}
                  onChange={() => setPaymentMethod("COD")}
                />
              </div>

              {paymentMethod === "COD" && (
                <div className="mt-2 ml-2 animate-fadeIn">
                  <input
                    type="text"
                    placeholder="Delivery notes (optional)…"
                    className="w-full border rounded-lg p-3 text-sm"
                  />
                </div>
              )}


              <div
                onClick={() => setPaymentMethod("ONLINE")}
                className={`border rounded-xl p-4 flex items-center gap-3 cursor-pointer transition-all
                    ${
                      paymentMethod === "ONLINE"
                        ? "border-green-600 bg-green-50 shadow-sm"
                        : "hover:border-green-400"
                    }`}
              >
                <CreditCard className="w-6 h-6 text-green-700" />
                <div className="flex-1">
                  <p className="font-semibold text-green-900">Online Payment</p>
                  <p className="text-sm text-gray-600">
                    UPI / Card / Net Banking
                  </p>
                </div>

                <input
                  type="radio"
                  checked={paymentMethod === "ONLINE"}
                  onChange={() => setPaymentMethod("ONLINE")}
                />
              </div>

              {paymentMethod === "ONLINE" && (
                <div className="mt-3 ml-2 space-y-2 animate-fadeIn">
                  <input
                    type="text"
                    placeholder="UPI ID"
                    className="w-full border rounded-lg p-3 text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full border rounded-lg p-3 text-sm"
                  />
                </div>
              )}
            </div>
          </div>

          {/* PRICE DETAILS */}
          <div className="bg-white border rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-green-900">
              PRICE DETAILS
            </h3>

            <div className="flex justify-between mb-2">
              <span>Total MRP</span>
              <span>₹{subTotal}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Coupon Discount</span>
              <span className="text-green-700">-₹{couponDiscount}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Platform Fee</span>
              <span>₹{shippingFee}</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between text-xl font-bold">
              <span>Total Amount</span>
              <span className="text-green-700">₹{total}</span>
            </div>

            <button
              onClick={placeOrder}
              className="w-full mt-6 py-3 bg-green-700 text-white rounded-lg font-semibold hover:bg-green-800 transition"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
