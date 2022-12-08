import React from 'react'
import styles from "./VendorBase.module.css";

const VendorBase = () => {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.measurementWrapper}> {/** Measurements **/}

                <div className={styles.lable}>
                    Size
                </div>
                <div className={styles.sizeWrapper}>
                    <div className={styles.sizeItem}>
                        <div className={styles.sizeLabel}>XS</div>
                        <input className={styles.sizeInput} type="number" />
                    </div>
                    <div className={styles.sizeItem}>
                        <div className={styles.sizeLabel}>S</div>
                        <input className={styles.sizeInput} type="number" />
                    </div>
                    <div className={styles.sizeItem}>
                        <div className={styles.sizeLabel}>M</div>
                        <input className={styles.sizeInput} type="number" />
                    </div>
                    <div className={styles.sizeItem}>
                        <div className={styles.sizeLabel}>L</div>
                        <input className={styles.sizeInput} type="number" />
                    </div>
                    <div className={styles.sizeItem}>
                        <div className={styles.sizeLabel}>XL</div>
                        <input className={styles.sizeInput} type="number" />
                    </div>
                    <div className={styles.sizeItem}>
                        <div className={styles.sizeLabel}>XXL</div>
                        <input className={styles.sizeInput} type="number" />
                    </div>
                </div>

            </div>
            <div className={styles.costWrapper}>{/** Costing **/}

                <div className={styles.costElements}>
                    <div className={styles.lable}>Total</div>
                    <input type="text" placeholder='Total' className={styles.costInput} />
                </div>
                <div className={styles.costElements}>
                    <div className={styles.lable}>Total Cost</div>
                    <input type="text" placeholder='Total Cost' className={styles.costInput} />
                </div>
                <div className={styles.costElements}>
                    <div className={styles.lable}>Cost Per Piece</div>
                    <input type="text" placeholder='Cost Per Piece' className={styles.costInput} />
                </div>

            </div>
        </div>
    )
}

export default VendorBase