import { BASE_URL, GET_ORDERS_URL } from "../Utils/constant/api";
import axios from "axios"

export const getOrders = async (token) => {
    const res = await axios.get(`${GET_ORDERS_URL}`, { headers: { "Authorization": `Bearer ${token}` } });

    return res.data
};

