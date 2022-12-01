import React from 'react'
import CustomerReadyMeasurementsCard from '../CustomerReadyMeasurementsCard'
import styles from "./CustomerReadyMeasurement.module.css"

const CustomerReadyMeasurements = ({ customer }) => {
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
                {/* <CustomerDetailsCard customer={customer || {}} /> */}
                <div><CustomerReadyMeasurementsCard /></div>
            </div>
        </div>
    )
}

export default CustomerReadyMeasurements