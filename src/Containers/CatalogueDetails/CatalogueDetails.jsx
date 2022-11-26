import React from 'react'
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import {useSearchParams } from 'react-router-dom';

import SideBar from "../../Components/SideBar";
import styles from "./CatalogueDetails.module.css";
import CatalogueDetailsCard from '../../Components/CatalogueDetailsCard';
import CatalogueDesc from "../CatalogueDesc"
import CatalogueVariants from "../CatalogueVariants";
import CatalogueNavTab from "../../Components/CatalogueNavTab";
import { useParams } from 'react-router-dom';
import searchIcon from "../../Assets/SearchBar/Icons/search.svg";

const Navigators = [
        {
          name: "Details",
          value : "details"
    
        },
        {
          name: "Description",
          value : "description"
    
        },
        {
          name: "Variants",
          value : "variants"
    
        },
        {
          name: "Style Details",
          value : "style-details"
        },
        
      ];

const Catalogue = () => {
    const [catalogue, setCatalogue] = useState({})
    const [loading, setLoading] = useState(true);
    const token = useSelector(state => state.login.token)
    const { product_id } = useParams();
      const [searchParams, setSearchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState("details");

    

    useEffect(() => {
    const tab = searchParams.get('tab');
    setActiveTab(tab || 'details');
  }, [searchParams]);

  useEffect(()=>{
        const params = new URLSearchParams(window.location.search);
    params.set('tab', activeTab);
    params.toString();
    window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
  },[activeTab])

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

    const handleChangeTab = (value) => {
        setActiveTab(value)
    }

    const renderContent = () => {
        switch(activeTab){
            case 'details':
                return <> {loading ? <><h1>loading</h1></> : <>
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
                    </>}</>
            case 'description':
                return <><CatalogueDesc catalogue = {catalogue}/></>  
            case 'variants':
                return <><CatalogueVariants catalogue = {catalogue}/></>
            case 'style-details':
                return <>style-details</>
            default:
                break;
        }
    }

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
                    <CatalogueNavTab handleChangeTab={handleChangeTab} Navigators={Navigators} activeTab = {activeTab}/>
                    <div>{renderContent()}</div>
                   
                </div>
            </div>
        </div>

    );
}

export default Catalogue