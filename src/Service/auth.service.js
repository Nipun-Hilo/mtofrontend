import { BASE_URL } from "../Utils/constant/api";

export const SignIn = async (data) => {
  axios.post(`${BASE_URL}/login`, data).then((res) => {
    return res;
  });
};
export const VerifyToken = async () => {
  axios.post(`${BASE_URL}/verifyToken`).then((res) => {
    return res;
  });
};
