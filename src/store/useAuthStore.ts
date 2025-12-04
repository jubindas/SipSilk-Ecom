import { create } from "zustand";

export interface Address {
  id: string;
  fullName: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
}

export interface BankDetails {
  id: string;
  bankName: string;
  accountNumber: string;
  ifsc: string;
  holderName: string;
}

export interface User {
  name: string;
  email: string;
  phone?: string;
  profilePic?: string;

  addresses?: Address[];
  bankDetails?: BankDetails[];
}

export interface AuthState {
  user: User | null;
  token: string | null;

  login: (userData: User, accessToken: string) => void;
  logout: () => void;

  updateProfile: (updatedData: Partial<User>) => void;

  addAddress: (address: Address) => void;
  updateAddress: (addressId: string, updated: Partial<Address>) => void;
  deleteAddress: (addressId: string) => void;

  addBankDetail: (bank: BankDetails) => void;
  updateBankDetail: (bankId: string, updated: Partial<BankDetails>) => void;
  deleteBankDetail: (bankId: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null,

  token: localStorage.getItem("authToken") || null,

  login: (userData, accessToken) => {
    localStorage.setItem("authToken", accessToken);
    localStorage.setItem("user", JSON.stringify(userData));

    set({ user: userData, token: accessToken });
  },

  logout: () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    set({ user: null, token: null });
  },

  updateProfile: (updatedData) =>
    set((state) => {
      if (!state.user) return state;

      const updatedUser = { ...state.user, ...updatedData };

      localStorage.setItem("user", JSON.stringify(updatedUser));

      return { user: updatedUser };
    }),

  addAddress: (address) =>
    set((state) => {
      if (!state.user) return state;

      const updatedUser = {
        ...state.user,
        addresses: [...(state.user.addresses || []), address],
      };

      localStorage.setItem("user", JSON.stringify(updatedUser));

      return { user: updatedUser };
    }),

  updateAddress: (addressId, updated) =>
    set((state) => {
      if (!state.user) return state;

      const updatedList =
        state.user.addresses?.map((a) =>
          a.id === addressId ? { ...a, ...updated } : a
        ) || [];

      const updatedUser = { ...state.user, addresses: updatedList };
      localStorage.setItem("user", JSON.stringify(updatedUser));

      return { user: updatedUser };
    }),

  deleteAddress: (addressId) =>
    set((state) => {
      if (!state.user) return state;

      const updatedList =
        state.user.addresses?.filter((a) => a.id !== addressId) || [];

      const updatedUser = { ...state.user, addresses: updatedList };
      localStorage.setItem("user", JSON.stringify(updatedUser));

      return { user: updatedUser };
    }),

  addBankDetail: (bank) =>
    set((state) => {
      if (!state.user) return state;

      const updatedUser = {
        ...state.user,
        bankDetails: [...(state.user.bankDetails || []), bank],
      };

      localStorage.setItem("user", JSON.stringify(updatedUser));

      return { user: updatedUser };
    }),

  updateBankDetail: (bankId, updated) =>
    set((state) => {
      if (!state.user) return state;

      const updatedList =
        state.user.bankDetails?.map((b) =>
          b.id === bankId ? { ...b, ...updated } : b
        ) || [];

      const updatedUser = { ...state.user, bankDetails: updatedList };
      localStorage.setItem("user", JSON.stringify(updatedUser));

      return { user: updatedUser };
    }),

  deleteBankDetail: (bankId) =>
    set((state) => {
      if (!state.user) return state;

      const updatedList =
        state.user.bankDetails?.filter((b) => b.id !== bankId) || [];

      const updatedUser = { ...state.user, bankDetails: updatedList };

      localStorage.setItem("user", JSON.stringify(updatedUser));

      return { user: updatedUser };
    }),
}));
