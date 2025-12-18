/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuthStore } from "@/store/useAuthStore";

import { useState } from "react";

import { Banknote, Trash2 } from "lucide-react";

export default function BankPage() {
  const user = useAuthStore((s) => s.user);
  // const addBankDetail = useAuthStore((s) => s.addBankDetail);
  // const deleteBankDetail = useAuthStore((s) => s.deleteBankDetail);

  const [form, setForm] = useState<any>({
    bankName: "",
    accountNumber: "",
    ifsc: "",
    holderName: "",
  });

  // const handleAdd = () => {
  //   const id = crypto.randomUUID();
  //   addBankDetail({ id, ...form });
  //   setForm({ bankName: "", accountNumber: "", ifsc: "", holderName: "" });
  // };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold flex items-center gap-2">
        <Banknote className="w-5 h-5" /> Bank Details
      </h2>

      <div className="grid grid-cols-2 gap-4 border rounded-md p-4 bg-gray-50">
        {Object.keys(form).map((key) => (
          <div key={key}>
            <label className="capitalize">{key}</label>
            <input
              className="w-full p-2 border rounded mt-1"
              value={form[key]}
              onChange={(e) => setForm({ ...form, [key]: e.target.value })}
            />
          </div>
        ))}

        <button
          onClick={() => {}}
          className="col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Bank Detail
        </button>
      </div>

      <ul className="space-y-4">
        {user?.bankDetails?.length ? (
          user.bankDetails.map((b: any) => (
            <li key={b.id} className="border p-4 rounded flex justify-between">
              <div>
                <h1>hi</h1>
              </div>

              <button
                onClick={() => {}}
                className="text-red-600 flex items-center gap-1"
              >
                <Trash2 className="w-4 h-4" /> Remove
              </button>
            </li>
          ))
        ) : (
          <p>No bank details saved yet.</p>
        )}
      </ul>
    </div>
  );
}
