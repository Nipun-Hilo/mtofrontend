import React from 'react'
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import SideBar from "../../Components/SideBar";
import CatalogueNavTab from '../../Components/CatalogueNavTab';
import OrderTable from '../../Components/OrderTable/OrderTable';

import styles from "./Orders.module.css";
import { getOrders } from '../../Service/order.service';

const Navigators = [
    {
        name: "All",
        value: "all"

    },
    {
        name: "Pending",
        value: "pending"

    },
    {
        name: "In Progress",
        value: "in-progress"

    },
    {
        name: "Completed/Partially Completed",
        value: "completed-partially"
    },

    {
        name: "Fullfilled",
        value: "fullfilled"
    },
    {
        name: "Partially Fullfilled",
        value: "partially-fullfilled"
    },
    {
        name: "Returned",
        value: "returned"
    },
    {
        name: "Cancelled",
        value: "cancelled"
    },

];

function Orders() {
    const [order, setOrder] = useState([])
    const [loading, setLoading] = useState(false);
    const token = useSelector(state => state.login.users.token)
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState("all");


    useEffect(() => {
        const tab = searchParams.get('tab');
        setActiveTab(tab || 'all');
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
            const response = await getOrders(token);
            setOrder(response.data.orders);
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
        switch (activeTab) {
            case 'all':
                return <> {loading ? <><h1>loading</h1></> : <>
                    <h1><OrderTable orders={order} /></h1>
                </>}</>
            case 'pending':
                return <>pending</>
            case 'in-progress':
                return <>in-progress</>
            case 'completed-partially':
                return <>completed-partially</>
            case 'fullfilled':
                return <>fullfilled</>
            case 'partially-fullfilled':
                return <>partially-fullfilled</>
            case 'returned':
                return <>returned</>
            case 'cancelled':
                return <>cancelled</>
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
                            Orders
                        </div>
                        <CatalogueNavTab handleChangeTab={handleChangeTab} Navigators={Navigators} activeTab={activeTab} />
                        <div>{renderContent()}</div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Orders;
