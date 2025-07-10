import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

// Create axios instance with default config
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true, // Include cookies for authentication
});

class AuthAPI {
  static async request(endpoint, options = {}) {
    const config = {
      ...options,
      headers: {
        ...options.headers,
      },
    };

    try {
      console.log("Making request to:", `${API_BASE_URL}${endpoint}`);
      console.log("With config:", JSON.stringify(config, null, 2));

      const response = await axiosInstance({
        url: endpoint,
        ...config,
      });

      console.log("Response headers:", response.headers);
      return response.data;
    } catch (error) {
      console.error("API request failed:", error);

      // Handle axios error responses
      if (error.response) {
        // Server responded with error status
        const errorMessage =
          error.response.data.message ||
          `HTTP error! status: ${error.response.status}`;
        throw new Error(errorMessage);
      } else if (error.request) {
        // Request was made but no response received
        throw new Error("No response received from server");
      } else {
        // Error in request setup
        throw error;
      }
    }
  }

  static async login(credentials) {
    return this.request("/users/login", {
      method: "POST",
      data: credentials, // Axios uses data instead of body
    });
  }

  static async signup(userData) {
    return this.request("/users/signup", {
      method: "POST",
      data: userData,
    });
  }

  static async forgotPassword(email) {
    return this.request("/users/forgotPassword", {
      method: "POST",
      data: { email },
    });
  }

  static async resetPassword(token, passwords) {
    return this.request(`/users/resetPassword/${token}`, {
      method: "PATCH",
      data: passwords,
    });
  }
}

export default AuthAPI;
