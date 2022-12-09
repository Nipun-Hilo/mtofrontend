import React, { useState, useEffect } from 'react'
import styles from "./ProductionDetailsCard.module.css";
const ProductionDetailsCard = ({ order }) => {
    const [information, setInformation] = useState({});
    useEffect((e) => {
        setInformation({
            Stage: "_",
            ProductName: "_",
            Size: "_",
            SKU: "_",
            CustomerID: "_",
            OrderID: "_",
            DeliveryDetails: "_",
            DeliveryType: "_",
            ProductionStatus: "_",
            ProductType: "_",
            Platform: "_",
        });
    }, []);
    return (
        <div>
            <div className={styles.topWrapper}>
                <div className={styles.images}>
                    <img src={order.image ? order.image.src : "https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2548&q=80k"} />

                </div>
                <div className={styles.detailsWrapper}>
                    <div className={styles.mainDetailsWrapper}>
                        <div>
                            <p className={styles.header}>{"HILO3196-P1"}</p>
                            <p className={styles.title}>{"DJ Tillu Kurta"}</p>
                        </div>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                        <div className={styles.info}>
                            <div className={styles.lable}>Stage</div>
                            <div className={styles.value}>{information.Stage}</div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.lable}>Product Name</div>
                            <div className={styles.value}>{information.ProductName}</div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.lable}>Size</div>
                            <div className={styles.value}>{information.Size}</div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.lable}>S K U</div>
                            <div className={styles.value}>{information.SKU}</div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.lable}>CustomerID</div>
                            <div className={styles.value}>{information.CustomerID}</div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.lable}>Order ID</div>
                            <div className={styles.value}>{information.OrderID}</div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.lable}>Delivery Details</div>
                            <div className={styles.value}>{information.DeliveryDetails}</div>
                        </div>

                        <div className={styles.info}>
                            <div className={styles.lable}>Delivery Type</div>
                            <div className={styles.value}>{information.DeliveryType}</div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.lable}>Production Status</div>
                            <div className={styles.value}>{information.ProductionStatus}</div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.lable}>Product Type</div>
                            <div className={styles.value}>{information.ProductType}</div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.lable}>Platform</div>
                            <div className={styles.value}>{information.Platform}</div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductionDetailsCard