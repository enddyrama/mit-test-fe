import axios from "axios";

// let BASE_URL = import.meta.env.VITE_API_HOST;

// if (import.meta.env.MODE === "production") {
//   BASE_URL = import.meta.env.VITE_API_HOST;

// }

const headers = {};

export const api = axios.create({
  baseURL: `https://fakestoreapi.com`,
  headers,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.message === "Network Error" &&
      error?.response?.status === undefined
    ) {
      console.log("Server is unreachable");
    }
    return Promise.reject(error);
  }
);

export default api;
