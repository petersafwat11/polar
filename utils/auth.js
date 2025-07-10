const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

class AuthAPI {
  static async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Include cookies for authentication
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      return data;
    } catch (error) {
      console.error("API request failed:", error);
      throw error;
    }
  }

  static async login(credentials) {
    return this.request("/users/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    });
  }

  static async signup(userData) {
    return this.request("/users/signup", {
      method: "POST",
      body: JSON.stringify(userData),
    });
  }

  static async forgotPassword(email) {
    return this.request("/users/forgotPassword", {
      method: "POST",
      body: JSON.stringify({ email }),
    });
  }

  static async resetPassword(token, passwords) {
    return this.request(`/users/resetPassword/${token}`, {
      method: "PATCH",
      body: JSON.stringify(passwords),
    });
  }

  static async updatePassword(passwords) {
    return this.request("/users/updateMyPassword", {
      method: "PATCH",
      body: JSON.stringify(passwords),
    });
  }

  static async logout() {
    return this.request("/users/logout", {
      method: "GET",
    });
  }
}

export default AuthAPI;
