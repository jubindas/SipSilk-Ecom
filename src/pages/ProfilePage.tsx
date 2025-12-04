import { useAuthStore } from "@/store/useAuthStore";

import { useState } from "react";

import { Camera } from "lucide-react";

export default function ProfilePage() {
  const user = useAuthStore((s) => s.user);
  const updateProfile = useAuthStore((s) => s.updateProfile);

  const [name, setName] = useState(user?.name || "");
  const [phone, setPhone] = useState(user?.phone || "");

  const save = () => {
    updateProfile({ name, phone });
    alert("Profile updated successfully!");
  };

  return (
    <div className="flex gap-8 p-8 bg-gray-50 min-h-screen">
      <main className="flex-1 bg-white shadow-md border rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Profile Information
        </h2>

        <div className="flex items-center gap-6 mb-8">
          <div className="relative">
            <img
              src={
                user?.profilePic ||
                "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
              }
              alt="Profile"
              className="w-24 h-24 rounded-full border shadow-md object-cover"
            />

            <button className="absolute bottom-0 right-0 bg-blue-600 p-1 rounded-full shadow hover:bg-blue-700">
              <Camera className="w-4 h-4 text-white" />
            </button>
          </div>

          <div>
            <p className="text-gray-700 font-medium">{user?.email}</p>
            <p className="text-gray-500 text-sm">Email address</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-gray-600 font-medium">Full Name</label>
            <input
              className="w-full p-3 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="text-gray-600 font-medium">Phone Number</label>
            <input
              className="w-full p-3 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <button
          onClick={save}
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Save Changes
        </button>
      </main>
    </div>
  );
}
