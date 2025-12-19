import { Camera, Mail, User as UserIcon, Phone, Save } from "lucide-react";

import { useState } from "react";

const user = {
  profilePic: "https://www.com",
  name: "jubin",
  email: "jubin@email.com",
};

export default function ProfilePage() {
  const [name, setName] = useState<string>();

  const [phone, setPhone] = useState<string>();

  return (
    <div className="flex-1 p-8 bg-[#ffffff] max-h-[600px] rounded-lg">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-emerald-950">
            Profile Settings
          </h1>
          <p className="text-emerald-600/70 mt-2">
            Update your personal information and how others see you.
          </p>
        </div>

        <main className="bg-white border border-emerald-100 rounded-3xl shadow-sm overflow-hidden">
          <div className="h-32 bg-linear-to-r from-emerald-100 to-teal-50" />

          <div className="px-8 pb-10 -mt-12">
            <div className="flex flex-col md:flex-row md:items-end gap-6 mb-10">
              <div className="relative group">
                <img
                  src={
                    user?.profilePic ||
                    "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                  }
                  alt="Profile"
                  className="w-32 h-32 rounded-3xl border-4 border-white shadow-xl object-cover"
                />
                <button className="absolute -bottom-2 -right-2 bg-emerald-600 p-2.5 rounded-xl shadow-lg hover:bg-emerald-700 transition-transform hover:scale-110">
                  <Camera className="w-5 h-5 text-white" />
                </button>
              </div>

              <div className="mb-2">
                <h3 className="text-xl font-bold text-emerald-900">
                  {name || "User Name"}
                </h3>
                <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mt-1 text-sm border border-emerald-100 w-fit">
                  <Mail className="w-3.5 h-3.5" />
                  {user?.email}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-emerald-900 ml-1">
                  Full Name
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    className="w-full pl-11 pr-4 py-3 bg-gray-50/30 border border-emerald-100 rounded-2xl focus:ring-2 focus:ring-gray-500/20 focus:border-gray-500 outline-none transition-all placeholder:text-gray-300"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-emerald-900 ml-1">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400" />
                  <input
                    className="w-full pl-11 pr-4 py-3 bg-emerald-50/30 border border-emerald-100 rounded-2xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder:text-emerald-300"
                    placeholder="+1 234 567 890"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-end">
              <button
                onClick={() => {}}
                className="flex items-center gap-2 bg-emerald-600 text-white px-8 py-3.5 rounded-2xl font-semibold shadow-lg shadow-emerald-200 hover:bg-emerald-700 hover:shadow-emerald-300/50 transition-all active:scale-95"
              >
                <Save className="w-4 h-4" />
                Save Changes
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
