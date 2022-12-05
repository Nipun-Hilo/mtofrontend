import React, { useState, useEffect } from 'react'
import styles from "./CustomerDetailsCard.module.css";

const CustomerDetailsCard = ({ customer }) => {

    const [information, setInformation] = useState({});
    useEffect((e) => {
        setInformation({
            FirstName: customer?.first_name,
            LastName: customer?.last_name,
            FullName: customer?.first_name + " " + customer?.last_name,
            Description: "-",
            PhoneNumber: customer.phone ? customer.phone : "-",
            Email: customer.email ? customer.email : "-",
            Gender: "-",
            TypeOfCustomer: "-",
            DateOfCreation: customer.created_at ? customer.created_at.split("T")[0] : "-",
            MeasurementsAttached: "-",
            ReadyMeasurements: "-",
            ReferenceSizeNote: "-",
            Attachments: "-",
        });
    }, []);




    return (
        <div>
            <div className={styles.topWrapper}>
                <div className={styles.images}>
                    <img src="https://images.pexels.com/photos/13835115/pexels-photo-13835115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />

                </div>
                <div className={styles.detailsWrapper}>
                    <div className={styles.mainDetailsWrapper}>
                        <div className={styles.info}>
                            <div className={styles.lable}>First Name</div>
                            <div className={styles.value}>{information.FirstName}</div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.lable}>Full Name</div>
                            <div className={styles.value}>{information.FullName}</div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.lable}>Description</div>
                            <div className={styles.value}>{information.Description}</div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.lable}>Last Name</div>
                            <div className={styles.value}>{information.LastName}</div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.lable}>Phone</div>
                            <div className={styles.value}>{information.PhoneNumber}</div>
                        </div>

                        <div className={styles.info}>
                            <div className={styles.lable}>Type of Customer</div>
                            <div className={styles.value}>{information.TypeOfCustomer}</div>
                        </div>

                        <div className={styles.info}>
                            <div className={styles.lable}>Email</div>
                            <div className={styles.value}>{information.Email}</div>
                        </div>

                        <div className={styles.info}>
                            <div className={styles.lable}>Gender</div>
                            <div className={styles.value}>{information.Gender}</div>
                        </div>

                        <div className={styles.info}>
                            <div className={styles.lable}>Measurement Attachments</div>
                            <div className={styles.value}>{information.MeasurementsAttached}</div>
                        </div>

                        <div className={styles.info}>
                            <div className={styles.lable}>Ready Measurements</div>
                            <div className={styles.value}>{information.ReadyMeasurements}</div>
                        </div>

                        <div className={styles.info}>
                            <div className={styles.lable}>Reference Size Note</div>
                            <div className={styles.value}>{information.ReferenceSizeNote}</div>
                        </div>

                        <div className={styles.info}>
                            <div className={styles.lable}>Attachments</div>
                            <div className={styles.value}>{information.Attachments}</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CustomerDetailsCard