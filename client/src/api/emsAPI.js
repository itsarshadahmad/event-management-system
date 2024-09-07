import Axios from "axios";

import { API_URL } from "../environment/env_dev";

const emsAPI = Axios.create({
  baseURL: `${API_URL}`,
  headers: {},
});

export default emsAPI;
