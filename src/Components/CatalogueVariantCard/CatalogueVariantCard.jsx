import React from 'react'
import VariantCard from '../VariantCard/VariantCard';
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
                <span className={styles.menuItem}>{" "}</span>
            </div>
            <hr className={styles.hr}/>

            <div className={styles.dataWrapper}>
                {catalogue.map((item)=>(
                    <div>
                        <VariantCard item = {item}/>
                        <hr className={styles.hr}/>
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default CatalogueVariantCard