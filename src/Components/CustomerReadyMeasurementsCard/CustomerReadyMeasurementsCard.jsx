import React from 'react'
import styles from "./CustomerReadyMeasurementsCard.module.css"

const CustomerReadyMeasurementsCard = () => {
    return (
        <div className={styles.topWrapper}>
            <div className={styles.itemName}>
                <p className="">Shirt</p>
            </div>

            <div className={styles.mainDetailsWrapper}>
                <div className={styles.info}>
                    <div className={styles.lable}>Shirt Length</div>
                    <div className={styles.value}>{"-"}</div>
                </div>
                <div className={styles.info}>
                    <div className={styles.lable}>Chest</div>
                    <div className={styles.value}>{"-"}</div>
                </div>
                <div className={styles.info}>
                    <div className={styles.lable}>Stomach</div>
                    <div className={styles.value}>{"-"}</div>
                </div>
                <div className={styles.info}>
                    <div className={styles.lable}>Collar</div>
                    <div className={styles.value}>{"-"}</div>
                </div>
                <div className={styles.info}>
                    <div className={styles.lable}>Hip</div>
                    <div className={styles.value}>{"-"}</div>
                </div>

                <div className={styles.info}>
                    <div className={styles.lable}>Shoulder</div>
                    <div className={styles.value}>{"-"}</div>
                </div>

                <div className={styles.info}>
                    <div className={styles.lable}>Sleeve</div>
                    <div className={styles.value}>{"-"}</div>
                </div>

                <div className={styles.info}>
                    <div className={styles.lable}>Cuff</div>
                    <div className={styles.value}>{"-"}</div>
                </div>

                <div className={styles.info}>
                    <div className={styles.lable}>Biceps</div>
                    <div className={styles.value}>{"-"}</div>
                </div>

                <div className={styles.info}>
                    <div className={styles.lable}>Knee Length</div>
                    <div className={styles.value}>{"-"}</div>
                </div>

                <div className={styles.info}>
                    <div className={styles.lable}>Arm Hole</div>
                    <div className={styles.value}>{"-"}</div>
                </div>


            </div>

        </div>
    )
}

export default CustomerReadyMeasurementsCard