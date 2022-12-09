import React from 'react'
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { useSearchParams, useNavigate } from 'react-router-dom';
import SideBar from "../../Components/SideBar";
import styles from "./ProductionDetails.module.css";

import CatalogueNavTab from "../../Components/CatalogueNavTab";
import { useParams } from 'react-router-dom';
import { getOrdersById } from '../../Service/order.service';

import ProductionDetailsCard from "../../Components/ProductionDetailsCard"
import ProductionMTF from '../../Components/ProductionMTF/ProductionMTF';



const ProductionDetails = () => {
    const [order, setOrder] = useState({})
    const [loading, setLoading] = useState(true);
    const [mtf, setMtf] = useState(false);
    const token = useSelector(state => state.login.users.token)
    const { order_id } = useParams();
    const navigate = useNavigate();

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
        fetchData();
    }, []);

    const onMTFClick = (e) => {
        setMtf(true);
    }
    const onCustomClick = (e) => {
        setMtf(false);
    }

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
                    <div >{loading ? <><h1>loading</h1></> : <>
                        <div className={styles.header2Wapper}>
                            <div className={styles.headerWrapper}>
                                <button className={styles.headerBtn} onClick={onCustomClick} style={{
                                    backgroundColor: !mtf ? "#543925" : "white",
                                    color: !mtf ? "#C39971" : "#543925",
                                }}>Custom</button>
                                <button className={styles.headerBtn} onClick={onMTFClick} style={{
                                    backgroundColor: mtf ? "#543925" : "white",
                                    color: mtf ? "#C39971" : "#543925",
                                }}>MTF</button>
                            </div>
                            <button className={styles.btn}>Edit</button>
                        </div>
                        <div>

                        </div>
                        <div style={{
                            backgroundColor: "#FFEBDD",
                            paddingTop: "5px"
                        }}>
                            <div className={styles.lowerHeader}>Details</div>
                            <div className={styles.topWrapper}>
                                {!mtf ? <ProductionDetailsCard order={order || {}} /> : <ProductionMTF />}
                            </div>
                        </div>
                    </>}</div>

                </div>
            </div>
        </div>

    );
}

export default ProductionDetails