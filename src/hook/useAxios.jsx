import axios from "axios";
import { useSelector } from "react-redux";
import { sanitizeObject } from "../utils/security";

const useAxios = () => {
  const { token } = useSelector((state) => state?.auth || {});

  // Clean and validate BASE_URL with fallback
  const BASE_URL =
    (
      import.meta?.env?.VITE_BASE_URL ||
      "https://console-16144.fullstack.clarusway.com/"
    )
      .replace(/%$/, "")
      .replace(/\/$/, "") + "/";

  // Validate BASE_URL format
  if (!BASE_URL || !BASE_URL.startsWith("http")) {
    console.error("Invalid BASE_URL configuration:", BASE_URL);
  }

  const axiosWithToken = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Token ${token}`,
    },
    timeout: 10000, // 10 second timeout
  });

  // Request interceptor to sanitize data
  axiosWithToken.interceptors.request.use(
    (config) => {
      // Sanitize request data
      if (config.data) {
        config.data = sanitizeObject(config.data);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor for error handling
  axiosWithToken.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response?.status === 401) {
        // Token expired or invalid, redirect to login
        window.location.href = "/";
      }
      // Don't reject the error here, let individual functions handle mock fallbacks
      return Promise.reject(error);
    }
  );

  return { axiosWithToken };
};

export default useAxios;
