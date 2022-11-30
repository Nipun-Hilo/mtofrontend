import { BASE_URL } from "../Utils/constant/api";
import axios from "axios"

export const SignIn = async (body, config) => {

  const res = await axios.post(`${BASE_URL}/api/v1/auth/login`, body, config);

  return res

};
export const VerifyToken = async () => {
  axios.post(`${BASE_URL}/verifyToken`).then((res) => {
    return res;
  });
};
