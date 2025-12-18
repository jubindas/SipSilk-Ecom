import { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  Sparkles,
  UserPlus,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login({ name: "Jubin", email }, "sample-token");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex font-sans bg-white">
      <div className="flex-1 flex items-center justify-center px-8 lg:px-16">
        <div className="w-full max-w-md">
          <div className="mb-10">
            <h1 className="text-4xl font-extrabold text-emerald-950 tracking-tight mb-2">
              Welcome
            </h1>
            <p className="text-black font-medium">
              Please enter your details to access your account.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-emerald-900 ml-1">
                Email Address
              </label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black group-focus-within:text-gray-600 transition-colors" />
                <input
                  type="email"
                  placeholder="Example@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-13 pl-12 pr-5 rounded-2xl bg-gray-100/30 border border-emerald-100 outline-none focus:ring-4 focus:ring-gray-500/10 focus:border-gray-500 transition-all placeholder:text-gray-600"
                  required
                />
              </div>
            </div>

            <label className="text-sm font-semibold text-emerald-900 ml-1">
              Password
            </label>
            <div className="space-y-1.5">
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black group-focus-within:text-gray-600 transition-colors" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-13 pl-12 pr-5 rounded-2xl bg-gray-100/30 border border-emerald-100 outline-none focus:ring-4 focus:ring-gray-500/10 focus:border-gray-500 transition-all placeholder:text-gray-600"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-300 hover:text-emerald-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-13 mt-4 cursor-pointer rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-lg shadow-emerald-200 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <UserPlus size={18} />
              Sign In
            </button>
          </form>
        </div>
      </div>

      <div className="hidden lg:flex w-[40%] bg-linear-to-br from-emerald-500 via-emerald-600 to-teal-700 relative overflow-hidden items-center justify-center p-12">
        <div className="absolute top-[-10%] right-[-10%] w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-5%] left-[-5%] w-64 h-64 bg-emerald-400/20 rounded-full blur-2xl" />

        <div className="relative z-10 text-center text-white">
          <div className="inline-flex p-3 bg-white/10 backdrop-blur-xl rounded-2xl mb-6 border border-white/20">
            <Sparkles className="w-8 h-8 text-emerald-100" />
          </div>
          <h2 className="text-4xl font-bold mb-4">New Here?</h2>
          <p className="text-emerald-50/80 mb-10 leading-relaxed font-medium max-w-xs mx-auto">
            Create an account today and start your journey with our professional
            community.
          </p>

          <button
            onClick={() => navigate("/register")}
            className="group px-10 h-13 cursor-pointer rounded-2xl bg-white text-emerald-700 font-bold hover:bg-emerald-50 transition-all shadow-xl flex items-center gap-2 mx-auto"
          >
            Create Account
            <ArrowRight size={18} />
          </button>

          <button
            onClick={() => navigate("/")}
            className="mt-8 cursor-pointer text-emerald-100/70 hover:text-white transition flex items-center gap-2 mx-auto font-medium"
          >
            Skip login for now
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
