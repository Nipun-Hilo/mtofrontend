import { BASE_URL, GET_PRODUCTS_URL } from "../Utils/constant/api";
import axios from 'axios';


export const getProducts = async (token) => {
    const res = await axios.get(`${GET_PRODUCTS_URL}`, { headers: { "Authorization": `Bearer ${token}` } });

    return res.data
};

export const getProductsById = async (product_id, token) => {
    const res = await axios.get(`${GET_PRODUCTS_URL}/${product_id}`, { headers: { "Authorization": `Bearer ${token}` } });

    return res.data
};