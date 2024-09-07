import Axios from "axios";

import { API_URL } from "../environment/env_dev";

const emsAPI = Axios.create({
  baseURL: `${API_URL}/api`,
  headers: {},
});

// shipvistaAPI.CancelToken = Axios.CancelToken;

emsAPI.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem(accessTokenSessionKey);

  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

export default emsAPI;
