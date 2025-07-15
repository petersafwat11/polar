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
  withCredentials: true,
});

class CoursesAPI {
  static async getAllCourses(params = {}) {
    try {
      const queryParams = {
        page: params.page || 1,
        limit: params.limit || 10,
        sort: params.sort || "-createdAt",
        ...params,
      };

      // Add category filter if provided
      if (params.category) {
        queryParams.category = params.category;
      }

      // Add price range filter if provided
      if (params.priceFrom !== undefined) {
        queryParams.priceFrom = params.priceFrom;
      }
      if (params.priceTo !== undefined) {
        queryParams.priceTo = params.priceTo;
      }

      // Add search filter if provided
      if (params.search) {
        queryParams.search = params.search;
      }

      console.log("Fetching courses with params:", queryParams);

      const response = await axiosInstance.get("/courses", {
        params: queryParams,
      });

      return response.data;
    } catch (error) {
      console.error("Error fetching courses:", error);
      throw error;
    }
  }

  static async getCourseById(id) {
    try {
      const response = await axiosInstance.get(`/courses/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching course:", error);
      throw error;
    }
  }

  /**
   * Get unique categories from courses
   * @returns {Promise} Array of categories
   */
  static async getCategories() {
    try {
      const response = await axiosInstance.get("/courses");
      const courses = response.data.data.data;
      const categories = [...new Set(courses.map((course) => course.category))];
      return categories.filter(Boolean); // Remove empty values
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];
    }
  }

  /**
   * Get price range from all courses
   * @returns {Promise} Object with min and max prices
   */
  static async getPriceRange() {
    try {
      const response = await axiosInstance.get("/courses");
      const courses = response.data.data.data;

      if (courses.length === 0) {
        return { min: 0, max: 1000 };
      }

      const prices = courses
        .map((course) => parseFloat(course.price))
        .filter((price) => !isNaN(price));

      return {
        min: Math.min(...prices),
        max: Math.max(...prices),
      };
    } catch (error) {
      console.error("Error fetching price range:", error);
      return { min: 0, max: 1000 };
    }
  }

  static filterCoursesByPrice(courses, priceFrom, priceTo) {
    return courses.filter((course) => {
      const price = parseFloat(course.price);
      if (isNaN(price)) return false;

      const minPrice = priceFrom !== undefined ? priceFrom : 0;
      const maxPrice = priceTo !== undefined ? priceTo : Infinity;

      return price >= minPrice && price <= maxPrice;
    });
  }

  static buildUrlWithParams(baseUrl, params) {
    const url = new URL(baseUrl, window.location.origin);

    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        url.searchParams.set(key, value);
      }
    });

    return url.pathname + url.search;
  }
}

export default CoursesAPI;
