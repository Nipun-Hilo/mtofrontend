import React from 'react'
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import SideBar from "../../Components/SideBar";
import CatalogueNavTab from '../../Components/CatalogueNavTab';
import CustomerDetailsCard from '../../Components/CustomerDetailsCard';
import CustomerReadyMeasurements from '../../Components/CustomerReadyMeasurements';

import styles from "./CustomerDetails.module.css";

import searchIcon from "../../Assets/SearchBar/Icons/search.svg";
import { getCustomersById } from '../../Service/customer.service';

const Navigators = [
    {
        name: "Details",
        value: "details"

    },
    {
        name: "Measurements",
        value: "measurements"

    },
    {
        name: "Ready_Measurements",
        value: "ready-measurements"

    },
    {
        name: "Style Assist",
        value: "style-assist"
    },

    {
        name: "Orders",
        value: "orders"
    },

];

const CustomerDetails = () => {

    const [customer, setCustomer] = useState({})
    const [loading, setLoading] = useState(true);
    const token = useSelector(state => state.login.users.token)
    const { customer_id } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState("details");


    useEffect(() => {
        const tab = searchParams.get('tab');
        setActiveTab(tab || 'details');
    }, [searchParams]);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        params.set('tab', activeTab);
        params.toString();
        window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
    }, [activeTab])

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await getCustomersById(customer_id, token);
            setCustomer(response.data.customer);
        } catch (error) {
            console.error(error.message);
        }
        setLoading(false);

    }

    console.log(customer);
    useEffect(() => {
        console.log("response")
        fetchData();
    }, []);

    const handleChangeTab = (value) => {
        setActiveTab(value)
    }

    const renderContent = () => {
        switch (activeTab) {
            case 'details':
                return <> {loading ? <><h1>loading</h1></> : <>
                    <div className={styles.header2Wapper}>
                        <div>
                            <p className={styles.header}>{customer?.first_name}</p>
                            <p className={styles.title}>{customer?.id}</p>
                        </div>
                        <button className={styles.btn}>Edit</button>
                    </div>
                    <div>

                    </div>
                    <div className={styles.topWrapper}>
                        <CustomerDetailsCard customer={customer || {}} />
                    </div>
                </>}</>
            case 'measurements':
                return <><div>Measurements</div></>
            case 'ready-measurements':
                return <><CustomerReadyMeasurements customer={customer || {}} /></>
            case 'style-assist':
                return <>style-assist</>
            case 'orders':
                return <>orders</>
            default:
                break;
        }
    }

    return (
        <div>
            <div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        overflow: "hidden"
                    }}
                >
                    <SideBar />
                    <div className={styles.mainWrapper}>
                        <div className={styles.header}>
                            Customers
                        </div>
                        <CatalogueNavTab handleChangeTab={handleChangeTab} Navigators={Navigators} activeTab={activeTab} />
                        <div>{renderContent()}</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerDetails