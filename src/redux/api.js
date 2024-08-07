import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://connections-api.goit.global",
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

export default axiosInstance;