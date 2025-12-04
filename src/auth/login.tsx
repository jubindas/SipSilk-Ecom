import { useState } from "react";

import { Eye, EyeOff, Mail, Lock } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import { useAuthStore } from "@/store/useAuthStore";

import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const fakeUser = {
      id: "1",
      name: "Jubin",
      email: email,
      status: "active",
      user_type: "admin",
      updated_at: null,
    };

    const fakeToken = "sample-jwt-token-123";

    login(fakeUser, fakeToken);

    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-black">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-linear-to-tl from-white/10 via-gray-400/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-linear-to-tl from-white/15 via-gray-300/8 to-transparent rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-linear-to-tl from-white/12 via-gray-500/10 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-linear-to-tl from-white/8 via-gray-400/12 to-transparent rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <Card className="w-full max-w-md relative backdrop-blur-xl bg-gray-900/40 border border-white/10 shadow-2xl shadow-white/5">
        <CardHeader className="text-center pb-2">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <img src="/logo-new.jpg" alt="Logo" className="" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Welcome Back
          </CardTitle>
          <p className="text-sm text-gray-400 mt-2">
            Sign in to access your dashboard
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Email */}
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-medium text-gray-300"
            >
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 h-12 border-gray-700 bg-gray-800/50 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label
              htmlFor="password"
              className="text-sm font-medium text-gray-300"
            >
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 pr-12 h-12 border-gray-700 bg-gray-800/50 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
                type="button"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-400 hover:text-gray-300" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400 hover:text-gray-300" />
                )}
              </Button>
            </div>
          </div>
        </CardContent>

        <CardFooter className="pt-2">
          <Button
            onClick={handleLogin}
            className="w-full h-12 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
          >
            Sign In
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
