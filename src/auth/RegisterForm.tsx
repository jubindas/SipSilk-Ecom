import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";

export default function RegisterForm() {
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);

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

    const token = "fake-generated-token";

    login(user, token);

    navigate("/profile");
  };

  return (
    <div className="p-4">
      <h1>Register</h1>

      <input
        placeholder="Full Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleRegister}>Create Account</button>
    </div>
  );
}
