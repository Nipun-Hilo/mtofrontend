import React from 'react'
import styles from "./BottomCard.module.css"

const BottomCard = () => {
    return (
        <div className={styles.detailsWrapper}>
            <div className={styles.mainDetailsWrapper}>
                <div className={styles.info}>
                    <div className={styles.lable}>Pant Waist</div>
                    <div className={styles.value}>{"-"}</div>
                </div>
                <div className={styles.info}>
                    <div className={styles.lable}>Pant Hip</div>
                    <div className={styles.value}>{"-"}</div>
                </div>
                <div className={styles.info}>
                    <div className={styles.lable}>Fork</div>
                    <div className={styles.value}>{"-"}</div>
                </div>
                <div className={styles.info}>
                    <div className={styles.lable}>Crop Pant Length</div>
                    <div className={styles.value}>{"-"}</div>
                </div>
                <div className={styles.info}>
                    <div className={styles.lable}>Inside Length</div>
                    <div className={styles.value}>{"-"}</div>
                </div>

                <div className={styles.info}>
                    <div className={styles.lable}>Thigh</div>
                    <div className={styles.value}>{"-"}</div>
                </div>

                <div className={styles.info}>
                    <div className={styles.lable}>Ankle</div>
                    <div className={styles.value}>{"-"}</div>
                </div>

                <div className={styles.info}>
                    <div className={styles.lable}>Knee</div>
                    <div className={styles.value}>{"-"}</div>
                </div>

                <div className={styles.info}>
                    <div className={styles.lable}>Chudia Rounding</div>
                    <div className={styles.value}>{"-"}</div>
                </div>

                <div className={styles.info}>
                    <div className={styles.lable}>Calf</div>
                    <div className={styles.value}>{"-"}</div>
                </div>

                <div className={styles.info}>
                    <div className={styles.lable}>Pant length</div>
                    <div className={styles.value}>{"-"}</div>
                </div>

                <div className={styles.info}>
                    <div className={styles.lable}>Bottom</div>
                    <div className={styles.value}>{"-"}</div>
                </div>
                <div className={styles.info}>
                    <div className={styles.lable}>Cudia Pant length</div>
                    <div className={styles.value}>{"-"}</div>
                </div>
                <div className={styles.info}>
                    <div className={styles.lable}>Shoe Size</div>
                    <div className={styles.value}>{"-"}</div>
                </div>
                <div className={styles.info}>
                    <div className={styles.lable}>Height</div>
                    <div className={styles.value}>{"-"}</div>
                </div>
                <div className={styles.info}>
                    <div className={styles.lable}>Pagdi Size</div>
                    <div className={styles.value}>{"-"}</div>
                </div>
            </div>
        </div>
    )
}

export default BottomCard;