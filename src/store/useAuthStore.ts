import { create } from "zustand";

export interface User {
  id: string;
  fullName: string;
  email: string;
  isAdmin: boolean;
  isUserVerified: boolean;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  login: (userData: User, accessToken: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,

  login: (user, token) => {
    set({ user, token });
    localStorage.setItem("token", token);
  },

  logout: () => {
    set({ user: null, token: null });
    localStorage.removeItem("token");
  },
}));
