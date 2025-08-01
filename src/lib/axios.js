
//updated

import axios from "axios";

const BASE =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001"
    : import.meta.env.VITE_BACKEND_URL || "https://backend-inclusight-production.up.railway.app";

export const axiosInstance = axios.create({
  baseURL: `${BASE}/api`,
  withCredentials: true,
});




// import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
//   withCredentials: true,
// });
