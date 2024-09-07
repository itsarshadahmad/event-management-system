import axios from "axios";
import { API_URL } from "../environment/constant";

const api = axios.create({
  // baseURL: `${API_URL}`,
//   baseURL: "/api/v1",
  headers: {},
});

export default api;
