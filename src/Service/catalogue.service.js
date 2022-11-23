import { BASE_URL, GET_PRODUCTS_URL } from "../Utils/constant/api";

export const getProducts = async () => {
    axios.get(`${GET_PRODUCTS_URL}`).then((res) => {
        return res;
    });
};