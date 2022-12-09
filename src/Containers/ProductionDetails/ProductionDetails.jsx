import React from 'react'
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

import SideBar from "../../Components/SideBar";
import styles from "./ProductionDetails.module.css";

import CatalogueNavTab from "../../Components/CatalogueNavTab";
import { useParams } from 'react-router-dom';
import { getOrdersById } from '../../Service/order.service';

import ProductionDetailsCard from "../../Components/ProductionDetailsCard"

const Navigators = [
    {
        name: "Details",
        value: "details"

    }

];

const ProductionDetails = () => {
    const [order, setOrder] = useState({})
    const [loading, setLoading] = useState(true);
    const token = useSelector(state => state.login.users.token)
    const { order_id } = useParams();

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await getOrdersById(order_id, token);
            setOrder(response.data.order);
        } catch (error) {
            console.error(error.message);
        }
        setLoading(false);

    }

    useEffect(() => {
        console.log("response")
        fetchData();
    }, []);


    return (
        <div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    overflowY: "hidden"
                }}
            >
                <SideBar />
                <div className={styles.mainWrapper}>
                    <div className={styles.header}>
                        Products
                    </div>
                    <div>{loading ? <><h1>loading</h1></> : <>
                        <div className={styles.header2Wapper}>
                            <div className={styles.headerWrapper}>
                                <button className={styles.headerBtn}>Custom</button>
                                <button className={styles.headerBtn}>MTF</button>
                            </div>
                            <button className={styles.btn}>Edit</button>
                        </div>
                        <div>

                        </div>
                        <div className={styles.topWrapper}>
                            <ProductionDetailsCard order={order || {}} />
                        </div>
                    </>}</div>

                </div>
            </div>
        </div>

    );
}

export default ProductionDetails