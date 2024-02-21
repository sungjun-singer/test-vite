import axios from "axios";

// 개발 환경과 프로덕션 환경에 따라 다른 baseURL 설정
const baseURL =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_SERVER_ADDRESS
    : import.meta.env.VITE_SERVER_ADDRESS;

export const DefaultAxios = axios.create({
  baseURL, // 조건에 따라 설정된 baseURL 사용
  headers: {
    "Content-Type": "application/json",
  },
});

export const TokenAxios = axios.create({
  baseURL, // 조건에 따라 설정된 baseURL 사용
  headers: {
    "Content-Type": "application/json",
  },
});

// 항상 최신 상태의 token을 가져오기 위한 interceptor
TokenAxios.interceptors.request.use(
  (config) => {
    const nextConfig = config;
    const accessToken = document.cookie.split(`=`)[1];
    nextConfig.headers.AccessToken = accessToken ? accessToken : "";

    return nextConfig;
  },
  (error) => {
    return Promise.reject(error);
  },
);