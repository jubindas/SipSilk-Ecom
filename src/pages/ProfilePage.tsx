import GlobalError from "@/components/GlobalError";
import GlobalLoading from "@/components/GlobalLoading";
import { addBankDetails, getProfile } from "@/services/users";
import { useQuery } from "@tanstack/react-query";
import {
  Mail,
  User as UserIcon,
  Lock,
  ShieldCheck,
  ShieldAlert,
  Building2,
  CreditCard,
  MapPin,
} from "lucide-react";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

import SuccessToast from "@/components/SuccessToast";
import { Plus } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";

export default function ProfilePage() {
  const queryClient = useQueryClient();

  const [open, setOpen] = useState(false);

  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountHolderName, setAccountHolderName] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [branchName, setBranchName] = useState("");

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: addBankDetails,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      setOpen(false);
    },
  });

  const { user } = useAuthStore();

  console.log("the user is", user);

  const {
    data: userProfile,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getProfile,
  });

  if (isLoading) return <GlobalLoading />;
  if (isError) return <GlobalError />;

  console.log("the user is", userProfile);

  return (
    <div className="max-w-6xl mx-auto">
      <main className="space-y-6">
        <section className="bg-white border border-emerald-100 rounded-3xl shadow-sm overflow-hidden">
          <div className="h-24 bg-linear-to-r from-emerald-100 to-teal-50" />
          <div className="px-8 pb-8 -mt-12">
            <div className="flex flex-col md:flex-row md:items-end gap-6 mb-8">
              <div className="relative">
                <img
                  src={
                    userProfile?.photo || "https://ui-avatars.com/api/?name="
                  }
                  alt="Profile"
                  className="w-32 h-32 rounded-3xl border-4 border-white shadow-xl object-cover bg-emerald-50"
                />
                <div className="absolute -bottom-2 -right-2 bg-white p-1.5 rounded-full shadow-md">
                  {userProfile.isUserVerified ? (
                    <ShieldCheck className="w-6 h-6 text-emerald-500" />
                  ) : (
                    <ShieldAlert className="w-6 h-6 text-amber-500" />
                  )}
                </div>
              </div>

              <div className="mb-2">
                <h3 className="text-2xl font-bold text-emerald-900 capitalize">
                  {userProfile.fullName || "User Name"}
                </h3>
                <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mt-2 text-sm border border-emerald-100 w-fit">
                  <Mail className="w-3.5 h-3.5" />
                  {userProfile.email}
                </div>
              </div>

              <button className="flex ml-110 mb-5 items-center justify-center gap-2 bg-white border border-emerald-100 text-emerald-700 px-5 py-2.5 rounded-xl font-semibold shadow-sm hover:bg-emerald-50 transition-all active:scale-95">
                <Lock className="w-4 h-4" />
                Update Password
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 pt-6 border-t border-gray-50">
              <InfoItem
                icon={<UserIcon className="w-4 h-4" />}
                label="Full Name"
                value={userProfile.fullName}
              />
              <InfoItem
                icon={<ShieldCheck className="w-4 h-4" />}
                label="Verification Status"
                value={
                  userProfile.isUserVerified
                    ? "Verified Member"
                    : "Pending Verification"
                }
                valueClassName={
                  userProfile.isUserVerified
                    ? "text-emerald-600"
                    : "text-amber-600"
                }
              />
            </div>
          </div>
        </section>

        <section className="bg-white border border-emerald-100 rounded-3xl shadow-sm p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
              <Building2 className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-emerald-950">
              Bank Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <InfoItem
              icon={<UserIcon className="w-4 h-4" />}
              label="Account Holder"
              value={userProfile.bankDetails?.accountHolderName}
            />
            <InfoItem
              icon={<CreditCard className="w-4 h-4" />}
              label="Account Number"
              value={userProfile.bankDetails?.accountNumber}
              isMasked
            />
            <InfoItem
              icon={<Building2 className="w-4 h-4" />}
              label="Bank Name"
              value={userProfile.bankDetails?.bankName}
            />
            <InfoItem
              icon={<MapPin className="w-4 h-4" />}
              label="IFSC / Branch"
              value={`${userProfile.bankDetails?.ifsc} - ${userProfile.bankDetails?.branchName}`}
            />
          </div>
          {isSuccess && (
            <SuccessToast message="Bank details added successfully" />
          )}

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                <Building2 className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-emerald-950">
                Bank Information
              </h2>
            </div>

            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <button className="flex items-center gap-2 px-4 py-2 text-sm bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
                  <Plus size={16} />
                  Add Bank
                </button>
              </PopoverTrigger>

              <PopoverContent className="w-96 p-5 space-y-4 bg-white">
                <h3 className="text-lg font-semibold text-emerald-900">
                  Add Bank Details
                </h3>

                <input
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Bank Name"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                />

                <input
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Account Number"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                />

                <input
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Account Holder Name"
                  value={accountHolderName}
                  onChange={(e) => setAccountHolderName(e.target.value)}
                />

                <input
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="IFSC Code"
                  value={ifsc}
                  onChange={(e) => setIfsc(e.target.value)}
                />

                <input
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Branch Name"
                  value={branchName}
                  onChange={(e) => setBranchName(e.target.value)}
                />

                <button
                  disabled={isPending}
                  onClick={() =>
                    mutate({
                      bankName,
                      accountNumber,
                      accountHolderName,
                      ifsc,
                      branchName,
                    })
                  }
                  className="w-full py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-60"
                >
                  {isPending ? "Saving..." : "Save Bank Details"}
                </button>
              </PopoverContent>
            </Popover>
          </div>
        </section>
      </main>
    </div>
  );
}

function InfoItem({
  icon,
  label,
  value,
  isMasked = false,
  valueClassName = "text-gray-900",
}: {
  icon: React.ReactNode;
  label: string;
  value?: string | boolean;
  isMasked?: boolean;
  valueClassName?: string;
}) {
  const displayValue =
    isMasked && typeof value === "string"
      ? `**** **** ${value.slice(-4)}`
      : value;

  return (
    <div className="space-y-1.5">
      <p className="text-xs font-bold uppercase tracking-wider text-emerald-600/60 flex items-center gap-2">
        {label}
      </p>
      <div className="flex items-center gap-3 py-1">
        <span className="text-emerald-400">{icon}</span>
        <span className={`font-medium ${valueClassName}`}>
          {displayValue || "Not provided"}
        </span>
      </div>
    </div>
  );
}
