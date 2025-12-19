/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuthStore } from "@/store/useAuthStore";

import { useState } from "react";

import { Plus, Trash2, MapPin, MapIcon, Phone, Home } from "lucide-react";

export default function AddressPage() {
  const user = useAuthStore((s) => s.user);

  const [addForm, setAddForm] = useState(false);
  // const addAddress = useAuthStore((s) => s.addAddress);

  // const deleteAddress = useAuthStore((s) => s.deleteAddress);

  const [form, setForm] = useState<any>({
    fullName: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  });

  // const handleAdd = () => {
  //   const id = crypto.randomUUID();
  //   // addAddress({ id, ...form });
  //   setForm({
  //     fullName: "",
  //     phone: "",
  //     street: "",
  //     city: "",
  //     state: "",
  //     pincode: "",
  //   });
  // };

  return (
    <div className=" max-h-[600px] mx-auto p-6 space-y-8 bg-white rounded-xl shadow-sm border border-gray-100">
      {addForm ? (
        <div>
          <div className="flex items-center justify-between border-b pb-5">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-blue-600" /> Saved Addresses
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Manage your delivery locations and contact details.
              </p>
            </div>
          </div>

          <div className="bg-gray-50/50 p-6 rounded-xl border border-dashed border-gray-300">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4 flex items-center gap-2">
              <Plus className="w-4 h-4" /> Add New Address
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.keys(form).map((key) => (
                <div key={key} className="relative">
                  <label className="block text-xs font-medium text-gray-600 uppercase mb-1 ml-1">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none shadow-sm"
                    placeholder={`Enter ${key}...`}
                    value={form[key]}
                    onChange={(e) =>
                      setForm({ ...form, [key]: e.target.value })
                    }
                  />
                </div>
              ))}

              <div className="md:col-span-2 pt-2">
                <button
                  onClick={() => {}}
                  className="w-full md:w-max px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 active:transform active:scale-95 transition-all flex items-center gap-2 shadow-lg shadow-blue-200"
                >
                  <Plus className="w-5 h-5" /> Save Address
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">
            Your Locations
          </h3>

          <button onClick={() => setAddForm((prev) => !prev)}>
            add adress
          </button>

          {user?.addresses?.length ? (
            <div className="grid grid-cols-1 gap-4">
              {user.addresses.map((addr: any) => (
                <div
                  key={addr.id}
                  className="group border border-gray-100 bg-white p-5 rounded-xl flex justify-between items-center hover:border-blue-200 hover:shadow-md transition-all"
                >
                  <div className="flex gap-4">
                    <div className="p-3 bg-blue-50 rounded-lg h-fit">
                      <Home className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <p className="font-bold text-gray-800 text-lg">
                          {addr.fullName}
                        </p>
                        <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase">
                          Default
                        </span>
                      </div>

                      <div className="mt-1 flex items-center gap-2 text-gray-600">
                        <MapIcon className="w-4 h-4 text-gray-400" />
                        <p className="text-sm">
                          {addr.street}, {addr.city}, {addr.state} —{" "}
                          <span className="font-mono font-medium">
                            {addr.pincode}
                          </span>
                        </p>
                      </div>

                      <div className="mt-2 flex items-center gap-2 text-gray-500 text-sm">
                        <Phone className="w-3.5 h-3.5" />
                        {addr.phone}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {}}
                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                    title="Delete Address"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border-2 border-dashed rounded-xl">
              <MapPin className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">
                No addresses added yet. Add your first delivery location above.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
