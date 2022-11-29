import { BASE_URL, GET_CUSTOMERS_URL } from "../Utils/constant/api";
import axios from 'axios';

export const getCustomers = async (token) => {
    const res = await axios.get(`${GET_CUSTOMERS_URL}`, { headers: { "Authorization": `Bearer ${token}` } });

    return res.data
};