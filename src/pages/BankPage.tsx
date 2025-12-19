import { useState } from "react";

import {
  Banknote,
  Plus,
  X,
  Building2,
  User,
  Hash,
  Landmark,
} from "lucide-react";

import { useMutation, useQuery } from "@tanstack/react-query";

import { getProfile } from "@/services/users";

import { addBankDetails } from "@/services/bankDetails";

import GlobalLoading from "@/components/GlobalLoading";

import GlobalError from "@/components/GlobalError";

import SuccessToast from "@/components/SuccessToast";

import GreenInput from "@/components/GreenInput";

interface BankDetails {
  accountHolderName: string;
  accountNumber: string;
  ifsc: string;
  bankName: string;
  branchName: string;
}

export default function BankPage() {
  const [showForm, setShowForm] = useState(false);

  const [bank, setBank] = useState("");

  const [accNo, setAccNo] = useState("");

  const [ifsc, setIfsc] = useState("");

  const [accHolderName, setaccHolderName] = useState("");

  const [branchName, setBranchName] = useState("");

  const {
    data: userProfile,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getProfile,
  });

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (data: BankDetails & { userId: string }) =>
      addBankDetails(data),
  });

  const userBank = userProfile?.data?.bankDetails;

  console.log("the bank details are", userBank);

  if (isLoading) return <GlobalLoading />;
  if (isError) return <GlobalError />;

  const handleSave = () => {
    if (!bank || !accNo || !ifsc || !accHolderName) return;

    mutate({
      bankName: bank,
      accountNumber: accNo,
      ifsc,
      accountHolderName: accHolderName,
      branchName,
      userId: userProfile.data.id,
    });

    setShowForm(false);
  };

  return (
    <div className="max-w-3xl space-y-8">
      {isSuccess && <SuccessToast message={null} />}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-green-100 text-green-700">
            <Banknote />
          </div>
          <h2 className="text-xl font-semibold text-green-900">Bank Details</h2>
        </div>

        <button
          onClick={() => setShowForm((p) => !p)}
          className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
        >
          {showForm ? <X size={16} /> : <Plus size={16} />}
          {showForm ? "Close" : "Add Bank"}
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center p-5 rounded-xl bg-white border shadow-sm">
          <div className="space-y-1">
            <p className="font-semibold text-green-900 flex items-center gap-2">
              <Landmark size={16} />
              {userBank.accountHolderName}
            </p>
            <p className="text-sm text-gray-600">
              **** {userBank.accountNumber.slice(-4)}
            </p>
            <p className="text-xs text-gray-500">IFSC: {userBank.ifsc}</p>
          </div>

          <button className="flex items-center gap-1 text-sm text-red-600 hover:text-red-700">
            Remove
          </button>
        </div>
      </div>

      {showForm && (
        <div className="p-6 rounded-xl border bg-green-50 space-y-5">
          <h3 className="text-lg font-semibold text-green-900">
            Add Bank Account
          </h3>

          <GreenInput
            label="Bank Name"
            value={bank}
            onChange={setBank}
            icon={<Building2 size={16} />}
            placeholder="HDFC Bank"
          />

          <GreenInput
            label="Account Number"
            value={accNo}
            onChange={setAccNo}
            icon={<Hash size={16} />}
            placeholder="XXXXXXXXXX"
          />

          <GreenInput
            label="Account Holder Name"
            value={accHolderName}
            onChange={setaccHolderName}
            icon={<User size={16} />}
            placeholder="Full Name"
          />

          <GreenInput
            label="IFSC Code"
            value={ifsc}
            onChange={setIfsc}
            icon={<Landmark size={16} />}
            placeholder="HDFC0001234"
          />

          <GreenInput
            label="Branch Name"
            value={branchName}
            onChange={setBranchName}
            icon={<Building2 size={16} />}
            placeholder="Main Branch"
          />

          <button
            disabled={isPending}
            onClick={handleSave}
            className="w-full py-2.5 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition disabled:opacity-60"
          >
            {isPending ? "Saving..." : "Save Bank Details"}
          </button>
        </div>
      )}
    </div>
  );
}
