import axios from "axios";
import { API_URL } from "../environment/constant";

const api = axios.create({
    baseURL: `${API_URL}`,
    // baseURL: "/api",
    headers: {},
});

export default api;
