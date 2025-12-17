import { useState } from "react";

import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

import { useNavigate } from "react-router-dom";

import { useAuthStore } from "@/store/useAuthStore";

export default function RegisterPage() {
  
  const navigate = useNavigate();

  const login = useAuthStore((s) => s.login);

  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleRegister = () => {
    const user = {
      name,
      email,
      addresses: [],
      bankDetails: [],
    };

    login(user, "fake-generated-token");
    navigate("/profile");
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 font-sans">
      <div className="hidden md:flex items-center justify-center bg-linear-to-br from-emerald-400 to-teal-500 relative overflow-hidden mr-50">
        <div className="absolute w-96 h-96 bg-white/10 rounded-full -top-20 -left-20" />
        <div className="absolute w-72 h-72 bg-white/10 rounded-full bottom-10 right-10" />

        <div className="text-center text-white max-w-sm z-10">
          <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-sm mb-6 opacity-90">
            Already have an account? Sign in and continue your journey.
          </p>

          <button
            onClick={() => navigate("/login")}
            className="px-10 h-11 rounded-full bg-white text-emerald-600 font-semibold hover:bg-gray-100 cursor-pointer transition"
          >
            Log In
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center bg-white px-6 mr-50">
        <div className="w-full max-w-md text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Create Account
          </h1>
          <p className="text-sm text-gray-500 mb-8">Sign up to get started</p>

          <div className="relative mb-4">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-12 pl-11 pr-4 rounded-full bg-gray-100 outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <div className="relative mb-4">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 pl-11 pr-4 rounded-full bg-gray-100 outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <div className="relative mb-6">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 pl-11 pr-12 rounded-full bg-gray-100 outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button
            onClick={handleRegister}
            className="w-full h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition mb-4 cursor-pointer"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
