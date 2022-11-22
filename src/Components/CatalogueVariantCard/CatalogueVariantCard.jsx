import React from 'react'
import styles from "./CatalogueVariantCard.module.css";

const CatalogueVariantCard = ({catalogue}) => {
    console.log(catalogue)
  return (
    <div>
        <div className={styles.mainWrapper}>
            <p className={styles.title}>Style Variants</p>
            <div className={styles.menuTitle}>
                <span className={styles.menuItem}>Variants</span>
                <span className={styles.menuItem}>Price</span>
                <span className={styles.menuItem}>Quantity</span>
                <span className={styles.menuItem}>SKU</span>
            </div>
            <hr className={styles.hr}/>

            <div className={styles.dataWrapper}>
                {catalogue.map((item)=>(
                    <div>
                        <span className={styles.menuItem}>{item.title}</span>
                        <span className={styles.menuItem}> {item.price} </span>
                        <span className={styles.menuItem}> {item.inventory_quantity} </span>
                        <span className={styles.menuItem}> {item.sku} </span>
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default CatalogueVariantCard