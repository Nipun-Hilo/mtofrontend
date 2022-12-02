import React from 'react'
import styles from "./SmartFitCard.module.css"

const SmartFitCard = () => {
    return (
        <div className={styles.detailsWrapper}>
            <div className={styles.mainDetailsWrapper}>
                <div className={styles.info}>
                    <div className={styles.lable}>Height</div>
                    <div className={styles.value}>{"-"}</div>
                </div>
                <div className={styles.info}>
                    <div className={styles.lable}>Match your body</div>
                    <div className={styles.value}>{"-"}</div>
                </div>
                <div className={styles.info}>
                    <div className={styles.lable}>Chest Size</div>
                    <div className={styles.value}>{"-"}</div>
                </div>
                <div className={styles.info}>
                    <div className={styles.lable}>Shirt Shoulder</div>
                    <div className={styles.value}>{"-"}</div>
                </div>
                <div className={styles.info}>
                    <div className={styles.lable}>Your Preferred fit</div>
                    <div className={styles.value}>{"-"}</div>
                </div>

                <div className={styles.info}>
                    <div className={styles.lable}>Sleeve Length</div>
                    <div className={styles.value}>{"-"}</div>
                </div>

                <div className={styles.info}>
                    <div className={styles.lable}>Shirt Hip</div>
                    <div className={styles.value}>{"-"}</div>
                </div>


            </div>
        </div>
    )
}

export default SmartFitCard;