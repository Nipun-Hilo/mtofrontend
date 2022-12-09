import React from 'react'
import styles from "./CatalogueStyle.module.css"

const CatalogueStyle = ({ catalogue }) => {
    return (
        <div>
            <div className={styles.header2Wapper}>
                <div>
                    <p className={styles.header}>{catalogue?.variants[0]?.sku}</p>
                    <p className={styles.title}>{catalogue.title}</p>
                </div>
                <button className={styles.btn}>Edit</button>
            </div>
            <div className={styles.topWrapper}>
                <div className={styles.header}>Style Details</div>
                <div className={styles.MainItemWrapper}>{/** Details Wrapper */}
                    <div className={styles.itemWrapper}>
                        <div className={styles.lable}>Express-Delivery</div>
                        <input className={styles.itemInput} type="text" />
                    </div>
                    <div className={styles.itemWrapper}>
                        <div className={styles.lable}>Flat-Off</div>
                        <input className={styles.itemInput} type="text" />
                    </div>
                    <div className={styles.itemWrapper}>
                        <div className={styles.lable}>% off</div>
                        <input className={styles.itemInput} type="text" />
                    </div>
                    <div className={styles.itemWrapper}>
                        <div className={styles.lable}>Coupon Code</div>
                        <input className={styles.itemInput} type="text" />
                    </div>
                    <div className={styles.itemWrapper}>
                        <div className={styles.lable}>Color</div>
                        <input className={styles.itemInput} type="text" />
                    </div>
                    <div className={styles.itemWrapper}>
                        <div className={styles.lable}>Contain</div>
                        <input className={styles.itemInput} type="text" />
                    </div>
                    <div className={styles.itemWrapper}>
                        <div className={styles.lable}>Wash Care</div>
                        <input className={styles.itemInput} type="text" />
                    </div>
                    <div className={styles.itemWrapper}>
                        <div className={styles.lable}>Delievry-Time</div>
                        <input className={styles.itemInput} type="text" />
                    </div>
                    <div className={styles.itemWrapper}>
                        <div className={styles.lable}>Fit-Promise</div>
                        <input className={styles.itemInput} type="text" />
                    </div>
                    <div className={styles.itemWrapper}>
                        <div className={styles.lable}>Fabric</div>
                        <input className={styles.itemInput} type="text" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CatalogueStyle