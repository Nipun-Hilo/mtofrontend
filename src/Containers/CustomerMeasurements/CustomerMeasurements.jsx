import React from 'react'
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styles from "./CustomerMeasurements.module.css"
import CatalogueNavTab from '../../Components/CatalogueNavTab';
import TopCard from '../../Components/MeasurementCards/TopCard/TopCard';
import BottomCard from '../../Components/MeasurementCards/BottomCard';
import SmartFitCard from '../../Components/MeasurementCards/SmartFitCard/SmartFitCard';


const Navigators = [
    {
        name: "Top",
        value: "top"

    },
    {
        name: "Bottom",
        value: "bottom"

    },
    {
        name: "Smart Fit",
        value: "smart-fit"

    },

];
const CustomerMeasurements = ({ customer }) => {

    const [loading, setLoading] = useState(true);
    const token = useSelector(state => state.login.users.token)
    const { customer_id } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState("top");


    useEffect(() => {
        const tab = searchParams.get('tab');
        setActiveTab(tab || 'top');
    }, [searchParams]);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        params.set('tab', activeTab);
        params.toString();
        window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
    }, [activeTab])



    const handleChangeTab = (value) => {
        setActiveTab(value)
    }

    const renderContent = () => {
        switch (activeTab) {
            case 'top':
                return <><TopCard /></>
            case 'bottom':
                return <><div><BottomCard /></div></>
            case 'smart-fit':
                return <><div><SmartFitCard /></div></>
            default:
                break;
        }
    }

    return (
        <div>
            <div className={styles.header2Wapper}>
                <div>
                    <p className={styles.header}>{customer?.first_name}</p>
                    <p className={styles.title}>{customer?.id}</p>
                </div>
                <button className={styles.btn}>Edit</button>
            </div>
            <h4 className={styles.text}>All measurements are in inches</h4>
            <div className={styles.topWrapper}>
                <div className={styles.infoWrapper}>
                    <div>
                        <p className={styles.header}>{customer?.first_name}</p>
                        <p className={styles.title}>{customer?.id}</p>
                    </div>
                    <div>
                        <p className={styles.header}>{"Measurements Taken By"}</p>
                        <p className={styles.title}>{"-"}</p>
                    </div>

                </div>
                <CatalogueNavTab handleChangeTab={handleChangeTab} Navigators={Navigators} activeTab={activeTab} />
                <div>{renderContent()}</div>
            </div>
        </div>
    )
}

export default CustomerMeasurements