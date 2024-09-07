import emsAPI from "./emsAPI";

export const loginService = (loginData) => {
  return emsAPI.post(`/Login`, loginData);
};
