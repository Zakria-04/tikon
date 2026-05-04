import {
  CustomerProfile,
  ProfessionalProfile,
} from "@/store/types/AuthStoreType";
import axios, { AxiosError } from "axios";

const MainDomain = process.env.NEXT_PUBLIC_MAIN_DOMAIN;

const API_BASE = "/api";
const AUTH_API = `${API_BASE}/auth`;
const USER_API = `${API_BASE}/user`;

// Auth | USER APIS
export const loginAPI = (body: { email: string; password: string }) => {
  const route = AUTH_API + "/login";
  return appFetch(route, "POST", body);
};

export const registerAPI = (body: ProfessionalProfile | CustomerProfile) => {
  const route = `${AUTH_API}/register`;
  return appFetch(route, "POST", body);
};

export const getProfileAPI = () => {
  const route = `${USER_API}/profile`;
  return appFetch(route, "GET");
};

// Axios instance for API calls //
const api = axios.create({
  baseURL: MainDomain,
  withCredentials: true,
});

const appFetch = async (
  route: string,
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
  body?: unknown,
) => {
  try {
    const response = await api({
      method,
      url: route,
      data: method !== "GET" ? body : undefined,
    });

    return response.data;
  } catch (error: unknown) {
    console.error("API Error", error);
    const axiosError = error as AxiosError;

    if (
      axiosError.response?.status === 401 &&
      window.location.pathname !== "/login" &&
      window.location.pathname !== "/register"
    ) {
      try {
        // Try to refresh token
        await api.post(
          "/api/auth/refresh-token",
          {},
          { withCredentials: true },
        );

        // Retry the original request
        const retryResponse = await api({
          method,
          url: route,
          data: method !== "GET" ? body : undefined,
        });

        return retryResponse.data;
      } catch (refreshError) {
        // If refresh also fails, redirect to home page
        console.error("Token refresh failed", refreshError);
        // window.location.href = "/";
        throw new Error("Session expired. Please log in again.");
      }
    }

    const backendError = axiosError.response?.data as {
      message?: string;
      error?: string;
    };
    throw new Error(
      backendError?.message ||
        backendError?.error ||
        axiosError.message ||
        "An unknown error occurred",
    );
  }
};
