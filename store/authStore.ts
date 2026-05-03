import { create } from "zustand";
import { produce } from "immer";
import { loginAPI } from "@/assets/res/api";

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: "customer" | "professional";
  isLoggedIn: boolean;
};

type AuthStore = {
  // states
  user: User | null;
  auth: boolean;

  // functions
  login: (body: { email: string; password: string }) => Promise<User>;
  logout: () => void;

  // other
  isLoading: boolean;
  error: string | null;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  auth: false,
  isLoading: false,
  error: null,
  login: async (body) => {
    set({ isLoading: false, error: null });
    try {
      const data = await loginAPI(body);
      console.log("data from zustand", data);

      set(
        produce<AuthStore>((state) => {
          state.user = data.data;
          state.auth = true;
          state.isLoading = false;
          state.error = null;
        }),
      );

      return data.data;
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to login";

      set(
        produce<AuthStore>((state) => {
          state.user = null;
          state.auth = false;
          state.isLoading = false;
          state.error = message;
        }),
      );

      throw error;
    }
  },
  logout: () => set({ user: null }),
}));
