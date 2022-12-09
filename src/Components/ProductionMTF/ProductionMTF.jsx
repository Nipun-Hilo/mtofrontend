import React from 'react'
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styles from "./ProductionMTF.module.css"
import CatalogueNavTab from '../../Components/CatalogueNavTab';
import TopCard from '../MeasurementCards/TopCard/TopCard';
import BottomCard from '../MeasurementCards/BottomCard';
import SmartFitCard from '../MeasurementCards/SmartFitCard';


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
    const { order_id } = useParams();
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
                return <><div><BottomCard /> </div></>
            case 'smart-fit':
                return <><div><SmartFitCard /> </div></>
            default:
                break;
        }
    }

    return (
        <div>
            <div>
                <div className={styles.infoWrapper}>
                    <div>
                        <p className={styles.header}>{"customer?.first_name"}</p>
                        <p className={styles.title}>{"customer?.id"}</p>
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