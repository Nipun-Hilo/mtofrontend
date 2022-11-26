import React, {useState} from 'react'
import styles from "./CatalogueVariants.module.css";
import CatalogueVariantCard from '../../Components/CatalogueVariantCard/CatalogueVariantCard';

const CatalogueVariants = ({catalogue}) => {

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
                    <CatalogueVariantCard catalogue={catalogue.variants}/>
                </div>
    </div>
  )
}

export default CatalogueVariants