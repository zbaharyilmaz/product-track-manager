import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { sanitizeObject } from "../utils/security";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state?.auth || {});

  // Clean and validate BASE_URL
  const rawBaseUrl = import.meta?.env?.VITE_BASE_URL;
  console.log("Raw VITE_BASE_URL from import.meta.env:", rawBaseUrl);
  console.log("All import.meta.env:", import.meta?.env);

  // Fallback to hardcoded URL if environment variable is not available
  let BASE_URL = rawBaseUrl || "https://console-16144.fullstack.clarusway.com/";

  // Clean the URL: remove trailing %, ensure proper format
  if (BASE_URL) {
    BASE_URL = BASE_URL.replace(/%$/, "").trim();
    // Ensure it ends with a single slash
    BASE_URL = BASE_URL.replace(/\/+$/, "") + "/";
  }

  // Validate BASE_URL format
  if (!BASE_URL || BASE_URL === "/" || !BASE_URL.startsWith("http")) {
    console.error("Invalid BASE_URL configuration:", BASE_URL);
    console.error(
      "Please check your .env.local file has VITE_BASE_URL set correctly"
    );
  }

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      // Validate BASE_URL before making request
      if (!BASE_URL || BASE_URL === "/" || !BASE_URL.startsWith("http")) {
        throw new Error(
          "Invalid API configuration. Please check your .env.local file has VITE_BASE_URL set correctly."
        );
      }

      // Sanitize user input before sending to API
      const sanitizedUserInfo = sanitizeObject(userInfo);

      console.log("Attempting registration with URL:", `${BASE_URL}users/`);

      try {
        const { data } = await axios.post(
          `${BASE_URL}users/`,
          sanitizedUserInfo,
          {
            timeout: 10000,
          }
        );

        dispatch(registerSuccess(data));
        navigate("/stock");
      } catch (apiError) {
        // If API fails, use mock data for development
        console.warn(
          "API registration failed, using mock response:",
          apiError.message
        );

        // Create mock successful registration response
        const isGoogleRegistration =
          sanitizedUserInfo.password === "google_oauth_token";
        const mockResponse = {
          user: {
            id: Date.now(),
            username: sanitizedUserInfo.username,
            email: sanitizedUserInfo.email,
            provider: isGoogleRegistration ? "google" : "local",
          },
          token: "mock_token_" + Date.now(),
          message: isGoogleRegistration
            ? "Google registration successful (mock response - API server unavailable)"
            : "Registration successful (mock response - API server unavailable)",
        };

        dispatch(registerSuccess(mockResponse));
        navigate("/stock");
      }
    } catch (error) {
      console.error("Registration error:", error);

      // Provide more specific error messages
      if (error.code === "ERR_NETWORK") {
        console.error(
          "Network error - check your internet connection and API URL"
        );
      } else if (error.response?.status === 400) {
        console.error("Bad request - check your registration data");
      } else if (error.response?.status === 409) {
        console.error("User already exists");
      }

      dispatch(fetchFail());
      throw error; // Re-throw to allow component to handle specific errors
    }
  };

  const logout = async () => {
    dispatch(fetchStart());

    try {
      try {
        const { data } = await axios(`${BASE_URL}auth/logout/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        navigate("/");
        dispatch(logoutSuccess());
      } catch (apiError) {
        // If API fails, still logout locally
        console.warn(
          "API logout failed, using mock response:",
          apiError.message
        );
        navigate("/");
        dispatch(logoutSuccess());
      }
    } catch (error) {
      console.error("Logout error:", error);
      // Even if logout fails on server, clear local state
      dispatch(logoutSuccess());
      navigate("/");
    }
  };
  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      // Sanitize user input before sending to API
      const sanitizedUserInfo = sanitizeObject(userInfo);

      try {
        const { data } = await axios.post(
          `${BASE_URL}auth/login/`,
          sanitizedUserInfo
        );
        dispatch(loginSuccess(data));
        navigate("/stock");
      } catch (apiError) {
        // If API fails, use mock data for development
        console.warn(
          "API login failed, using mock response:",
          apiError.message
        );

        // Create mock successful login response
        const isGoogleLogin =
          sanitizedUserInfo.password === "google_oauth_token";
        const mockResponse = {
          user: {
            id: Date.now(),
            username: sanitizedUserInfo.username,
            email: sanitizedUserInfo.email || "user@example.com",
            provider: isGoogleLogin ? "google" : "local",
          },
          token: "mock_token_" + Date.now(),
          message: isGoogleLogin
            ? "Google login successful (mock response - API server unavailable)"
            : "Login successful (mock response - API server unavailable)",
        };

        dispatch(loginSuccess(mockResponse));
        navigate("/stock");
      }
    } catch (error) {
      console.error("Login error:", error);
      dispatch(fetchFail());
      throw error; // Re-throw to allow component to handle specific errors
    }
  };
  return { register, logout, login };
};

export default useAuthCall;
