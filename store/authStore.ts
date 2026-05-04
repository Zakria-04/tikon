import { create } from "zustand";
import { produce } from "immer";
import { getProfileAPI, loginAPI, registerAPI } from "@/assets/res/api";
import { AuthStoreType } from "./types/AuthStoreType";

export const useAuthStore = create<AuthStoreType>((set) => ({
  user: null,
  auth: false,
  isLoading: false,
  error: null,
  login: async (body) => {
    set({ isLoading: false, error: null });
    try {
      const data = await loginAPI(body);

      set(
        produce<AuthStoreType>((state) => {
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
        produce<AuthStoreType>((state) => {
          state.user = null;
          state.auth = false;
          state.isLoading = false;
          state.error = message;
        }),
      );

      throw error;
    }
  },
  register: async (body) => {
    set({ isLoading: true, error: null });
    try {
      const response = await registerAPI(body);

      set(
        produce<AuthStoreType>((state) => {
          state.user = response.data;
          state.auth = true;
          state.isLoading = false;
          state.error = null;
        }),
      );

      return response.data;
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to register";

      set(
        produce<AuthStoreType>((state) => {
          state.user = null;
          state.auth = false;
          state.isLoading = false;
          state.error = message;
        }),
      );

      throw error;
    }
  },
  logout: () => set({ user: null, auth: false }),
  getProfile: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await getProfileAPI();
      set({
        user: response.data.user,
        auth: true,
        isLoading: false,
        error: null,
      });
      return response.data.user;
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to fetch profile";
      set({
        user: null,
        auth: false,
        isLoading: false,
        error: message,
      });
    }
  },
}));
