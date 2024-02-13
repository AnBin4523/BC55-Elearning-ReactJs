import axios from "axios";
const api = axios.create({
  baseURL: "https://elearningnew.cybersoft.edu.vn/api/",
});
type Config = {
  headers: any;
};

api.interceptors.request.use((config: Config) => {
  const accessTokenAdmin = localStorage.getItem("USER_ADMIN")
    ? JSON.parse(localStorage.getItem("USER_ADMIN") || "").accessToken
    : "";

  const accessTokenUser = localStorage.getItem("USER_CUSTOMER")
    ? JSON.parse(localStorage.getItem("USER_CUSTOMER") || "").accessToken
    : "";

  config.headers = {
    ...config.headers,
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NSIsIkhldEhhblN0cmluZyI6IjI0LzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNjUwODgwMDAwMCIsIm5iZiI6MTY4Nzg4NTIwMCwiZXhwIjoxNzE2NjU2NDAwfQ.HsoestvkIN5Kub3jnAr8UddrPugJcxCsAm4QfMi4ZbU",
    Authorization: `Bearer ${accessTokenUser || accessTokenAdmin}`,
  };
  return config;
});
export { api };
