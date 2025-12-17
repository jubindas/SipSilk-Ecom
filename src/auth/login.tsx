import { useState } from "react";

import { Eye, EyeOff } from "lucide-react";

import { useNavigate } from "react-router-dom";

import { useAuthStore } from "@/store/useAuthStore";

export default function LoginPage() {

  const [showPassword, setShowPassword] = useState(false);
  
  const [email, setEmail] = useState("");
  
  const [password, setPassword] = useState("");

  const login = useAuthStore((s) => s.login);
  
  const navigate = useNavigate();

  const handleLogin = () => {
    login({ name: "Jubin", email }, "sample-token");
    navigate("/");
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 font-sans">
      <div className="flex items-center justify-center bg-white px-6">
        <div className="w-full max-w-md text-center ml-50">
          <h1 className="text-3xl font-bold text-gray-900 mb-10">
            Login to Your Account
          </h1>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 rounded-full bg-gray-100 px-5 mb-4 outline-none focus:ring-2 focus:ring-emerald-400"
          />

          <div className="relative mb-6">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 rounded-full bg-gray-100 px-5 pr-12 outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button
            onClick={handleLogin}
            className="w-full h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 cursor-pointer text-white font-medium transition"
          >
            Sign In
          </button>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center bg-linear-to-br from-emerald-400 to-teal-500 relative overflow-hidden ml-50">
        <div className="absolute w-96 h-96 bg-white/10 rounded-full -top-20 -left-20" />
        <div className="absolute w-72 h-72 bg-white/10 rounded-full bottom-10 right-10" />

        <div className="text-center text-white max-w-sm z-10">
          <h2 className="text-3xl font-bold mb-4">New Here?</h2>
          <p className="text-sm mb-6 opacity-90">
            Sign up and discover a great amount of new opportunities!
          </p>

          <button
            onClick={() => navigate("/register")}
            className="px-10 h-11 rounded-full bg-white text-emerald-600 font-semibold hover:bg-gray-100 cursor-pointer transition"
          >
            Sign Up
          </button>

          <button
            onClick={() => navigate("/")}
            className="mt-4 tesxt-lg text-white/90 hover:text-white transition flex items-center gap-2 mx-auto cursor-pointer"
          >
            Skip login
            <span className="text-2xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
