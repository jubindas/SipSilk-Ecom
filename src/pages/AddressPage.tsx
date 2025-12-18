/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuthStore } from "@/store/useAuthStore";

import { useState } from "react";

import { Plus, Trash2, MapPin } from "lucide-react";

export default function AddressPage() {
  const user = useAuthStore((s) => s.user);

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
    <div className="space-y-6">
      <h2 className="text-xl font-bold flex items-center gap-2">
        <MapPin className="w-5 h-5" /> Saved Addresses
      </h2>

      <div className="grid grid-cols-2 gap-4 p-4 border rounded-md bg-gray-50">
        {Object.keys(form).map((key) => (
          <div key={key}>
            <label className="text-gray-700 capitalize">{key}</label>
            <input
              className="w-full p-2 border rounded mt-1"
              value={form[key]}
              onChange={(e) => setForm({ ...form, [key]: e.target.value })}
            />
          </div>
        ))}

        <button
          onClick={() => {}}
          className="col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 flex items-center gap-1 justify-center"
        >
          <Plus className="w-4 h-4" /> Add Address
        </button>
      </div>

      <hr />

      <ul className="space-y-4">
        {user?.addresses?.length ? (
          user.addresses.map((addr: any) => (
            <li
              key={addr.id}
              className="border p-4 rounded flex justify-between items-start"
            >
              <div>
                <p className="font-semibold">{addr.fullName}</p>
                <p>
                  {addr.street}, {addr.city}, {addr.state} - {addr.pincode}
                </p>
                <p className="text-gray-500">{addr.phone}</p>
              </div>

              <button
                onClick={() => {}}
                className="text-red-500 hover:underline flex items-center gap-1"
              >
                <Trash2 className="w-4 h-4" /> Remove
              </button>
            </li>
          ))
        ) : (
          <p>No addresses added yet.</p>
        )}
      </ul>
    </div>
  );
}
