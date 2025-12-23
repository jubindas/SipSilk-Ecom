import GlobalError from "@/components/GlobalError";

import GlobalLoading from "@/components/GlobalLoading";

import {
  addBankDetails,
  getProfile,
  updateBankDetails,
} from "@/services/users";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import {
  Mail,
  User as UserIcon,
  Lock,
  ShieldCheck,
  ShieldAlert,
  Building2,
  CreditCard,
  MapPin,
  Plus,
  Pencil,
} from "lucide-react";

import { useState, useEffect } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import toast, { Toaster } from "react-hot-toast";

export default function ProfilePage() {
  const queryClient = useQueryClient();

  const [open, setOpen] = useState(false);

  const [bankName, setBankName] = useState("");

  const [accountNumber, setAccountNumber] = useState("");

  const [accountHolderName, setAccountHolderName] = useState("");

  const [ifsc, setIfsc] = useState("");

  const [branchName, setBranchName] = useState("");

  const {
    data: userProfile,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getProfile,
  });

  const hasBankDetails = !!userProfile?.bankDetails?.accountNumber;

  useEffect(() => {
    if (userProfile?.bankDetails) {
      setBankName(userProfile.bankDetails.bankName || "");
      setAccountNumber(userProfile.bankDetails.accountNumber || "");
      setAccountHolderName(userProfile.bankDetails.accountHolderName || "");
      setIfsc(userProfile.bankDetails.ifsc || "");
      setBranchName(userProfile.bankDetails.branchName || "");
    }
  }, [userProfile]);

  const { mutate: addBank, isPending: addPending } = useMutation({
    mutationFn: addBankDetails,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("Bank details added succesfully");
      setOpen(false);
    },
  });

  const { mutate: updateBank, isPending: updatePending } = useMutation({
    mutationFn: updateBankDetails,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("Bank details updated succesfully");
      setOpen(false);
    },
  });

  const handleBankSubmit = () => {
    const payload = {
      bankName,
      accountNumber,
      accountHolderName,
      ifsc,
      branchName,
    };

    if (hasBankDetails) {
      updateBank(payload);
    } else {
      addBank(payload);
    }
  };

  if (isLoading) return <GlobalLoading />;
  if (isError) return <GlobalError />;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <Toaster position="top-center" reverseOrder={false} />
      <main className="space-y-6">
        <section className="bg-white border border-emerald-100 rounded-3xl shadow-sm overflow-hidden">
          <div className="h-24 bg-linear-to-r from-emerald-100 to-teal-50" />
          <div className="px-8 pb-8 -mt-12">
            <div className="flex flex-col md:flex-row md:items-end gap-6 mb-8">
              <div className="relative">
                <img
                  src={
                    userProfile?.photo ||
                    `https://ui-avatars.com/api/?name=${userProfile?.fullName}`
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

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-emerald-900 capitalize">
                  {userProfile.fullName || "User Name"}
                </h3>
                <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mt-2 text-sm border border-emerald-100 w-fit">
                  <Mail className="w-3.5 h-3.5" />
                  {userProfile.email}
                </div>
              </div>

              <button className="flex items-center gap-2 bg-white border border-emerald-100 text-emerald-700 px-5 py-2.5 rounded-xl font-semibold shadow-sm hover:bg-emerald-50 transition-all active:scale-95">
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
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                <Building2 className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-emerald-950">
                Bank Information
              </h2>
            </div>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors shadow-md">
                  {hasBankDetails ? <Pencil size={16} /> : <Plus size={16} />}
                  {hasBankDetails ? "Update Bank Details" : "Add Bank Details"}
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-white rounded-3xl border-none p-6">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold text-emerald-900">
                    {hasBankDetails
                      ? "Update Bank Details"
                      : "Add Bank Details"}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-4 py-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-emerald-700 uppercase ml-1">
                      Bank Name
                    </label>
                    <input
                      className="w-full border border-emerald-100 bg-emerald-50/30 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                      placeholder="e.g. HDFC Bank"
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-emerald-700 uppercase ml-1">
                      Account Number
                    </label>
                    <input
                      className="w-full border border-emerald-100 bg-emerald-50/30 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                      placeholder="Enter account number"
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-emerald-700 uppercase ml-1">
                      Account Holder
                    </label>
                    <input
                      className="w-full border border-emerald-100 bg-emerald-50/30 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                      placeholder="Name as per passbook"
                      value={accountHolderName}
                      onChange={(e) => setAccountHolderName(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-emerald-700 uppercase ml-1">
                        IFSC
                      </label>
                      <input
                        className="w-full border border-emerald-100 bg-emerald-50/30 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                        placeholder="IFSC Code"
                        value={ifsc}
                        onChange={(e) => setIfsc(e.target.value)}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-emerald-700 uppercase ml-1">
                        Branch
                      </label>
                      <input
                        className="w-full border border-emerald-100 bg-emerald-50/30 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                        placeholder="Branch Name"
                        value={branchName}
                        onChange={(e) => setBranchName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <button
                  disabled={addPending || updatePending}
                  onClick={handleBankSubmit}
                  className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 disabled:opacity-50 transition-all shadow-lg active:scale-[0.98]"
                >
                  {addPending || updatePending
                    ? "Saving..."
                    : hasBankDetails
                    ? "Update Details"
                    : "Save Bank Details"}
                </button>
              </DialogContent>
            </Dialog>
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
              value={
                userProfile.bankDetails?.ifsc
                  ? `${userProfile.bankDetails.ifsc} - ${userProfile.bankDetails.branchName}`
                  : undefined
              }
            />
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
