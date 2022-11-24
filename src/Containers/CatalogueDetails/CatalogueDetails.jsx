import React from 'react'
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';

import SideBar from "../../Components/SideBar";
import styles from "./CatalogueDetails.module.css";
import CatalogueDetailsCard from '../../Components/CatalogueDetailsCard';
import CatalogueNavTab from "../../Components/CatalogueNavTab";
import { useParams } from 'react-router-dom';
import searchIcon from "../../Assets/SearchBar/Icons/search.svg";

const Catalogue = () => {
    const [catalogue, setCatalogue] = useState({})
    const [loading, setLoading] = useState(true);
    const token = useSelector(state => state.login.token)
    const { product_id } = useParams();
    console.log(product_id);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:8000/api/v1/products/${product_id}`, { headers: { "Authorization": `Bearer ${token}` } });
            setCatalogue(response.data.data.product);
        } catch (error) {
            console.error(error.message);
        }
        setLoading(false);

    }

    useEffect(() => {
        console.log("response")
        fetchData();
    }, []);

    console.log(catalogue)

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row"
                }}
            >
                <SideBar />
                <div className={styles.mainWrapper}>
                    <div className={styles.header}>
                        Catalogue
                    </div>
                    <CatalogueNavTab/>
                    {loading ? <><h1>loading</h1></> : <>
                        <div className={styles.header2Wapper}>
                            <div>
                                <p className={styles.header}>{catalogue?.variants[0]?.sku}</p>
                                <p className={styles.title}>{catalogue?.title}</p>
                            </div>
                            <button className={styles.btn}>Edit</button>
                        </div>
                        <div>

                        </div>
                        <div className={styles.topWrapper}>
                            <CatalogueDetailsCard catalogue={catalogue || {}} />
                        </div>
                    </>}
                </div>
            </div>
        </div>

    );
}

export default Catalogue