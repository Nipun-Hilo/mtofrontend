import React from 'react'
import styles from "./VariantCard.module.css";

const VariantCard = ({item}) => {
  return (
    <div>
        <div className={styles.cardWrapper}>
            <span className={styles.menuItem}>{item.title}</span>
            <span className={styles.menuItem}> {item.price} </span>
            <span className={styles.menuItem}> {item.inventory_quantity} </span>
            <span className={styles.menuItem}> {item.sku} </span>
            <span className={styles.menuItem}>
                <button className={styles.btn}><div className={styles.btnText}>Edit</div></button>
                <button className={styles.btn}><div className={styles.btnText}>Del</div></button>
            </span>
        </div>
    </div>
  )
}

export default VariantCard