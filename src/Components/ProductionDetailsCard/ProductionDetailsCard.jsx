import React, { useState, useEffect } from 'react'
import styles from "./ProductionDetailsCard.module.css";
const ProductionDetailsCard = ({ order, item_id }) => {
    const [information, setInformation] = useState({});
    const [item, setItem] = useState({});
    useEffect((e) => {
        setInformation({
            Stage: "_",
            ProductName: "_",
            Size: "_",
            SKU: "_",
            CustomerID: order?.customer?.id,
            OrderID: order.id,
            DeliveryDetails: "_",
            DeliveryType: "_",
            ProductionStatus: "_",
            ProductType: "_",
            Platform: "_",
        });
    }, []);

    useEffect(() => {
        setItem((order?.line_items.filter((item) => { return item.id !== item_id }))[0])
    }, [])
    // console.log(item[0]);

    return (
        <div>
            <div className={styles.topWrapper}>
                <div className={styles.images}>
                    <img src={order.image ? order.image.src : "https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2548&q=80k"} />

                </div>
                <div className={styles.detailsWrapper}>
                    <div className={styles.mainDetailsWrapper}>
                        <div>
                            <p className={styles.header}>{item?.sku}</p>
                            <p className={styles.title}>{item?.title}</p>
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
                            <div className={styles.value}>{item?.title}</div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.lable}>Size</div>
                            <div className={styles.value}>{item?.variant_title}</div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.lable}>S K U</div>
                            <div className={styles.value}>{item?.sku}</div>
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
                    <div>
                        <div className={styles.lable}>Custom Requirements</div>
                        <input type="text" className={styles.customInput} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductionDetailsCard