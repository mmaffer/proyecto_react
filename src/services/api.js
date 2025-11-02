import axios from "axios";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status ?? 0;
    const detail =
      error.response?.data?.error ||
      error.message ||
      "Ocurrió un error inesperado. Intenta nuevamente.";
    const enhancedError = new Error(detail);
    enhancedError.name = "ApiError";
    enhancedError.status = status;
    return Promise.reject(enhancedError);
  },
);

export default api;
