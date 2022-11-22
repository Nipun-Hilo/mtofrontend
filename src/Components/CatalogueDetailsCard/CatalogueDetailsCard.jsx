import React, {useState, useEffect} from 'react'
import styles from "./CatalogueDetailsCard.module.css";
const CatalogueDetailsCard = ({catalogue}) => {
  const [information, setInformation] = useState({});
  useEffect((e) => {
    setInformation({
      ProductName: catalogue.title,
      SKU: catalogue.variants[0].sku,
      Price: catalogue.variants[0].price,
      ProductID: catalogue.variants[0].product_id,
      Type: catalogue.product_type,
      Status: catalogue.status,
      Tags: catalogue.tags,
    });
  },[]);
let tagArr = String(information.Tags).replace(/ /g, "").split(",");
console.log();
  return (
    <div>
        <div className={styles.topWrapper}>
            <div className={styles.images}>
                <img src={catalogue.image.src}/>
                
            </div>
            <div className={styles.detailsWrapper}>
                <div className={styles.mainDetailsWrapper}>
                    <div className={styles.info}>
                        <div className={styles.lable}>Product Name</div>
                        <div className={styles.value}>{information.ProductName}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.lable}>S K U</div>
                        <div className={styles.value}>{information.SKU}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.lable}>Price</div>
                        <div className={styles.value}>{information.Price}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.lable}>Product ID</div>
                        <div className={styles.value}>{information.ProductID}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.lable}>Type</div>
                        <div className={styles.value}>{information.Type}</div>
                    </div>

                    <div className={styles.info}>
                        <div className={styles.lable}>Status</div>
                        <div className={styles.value}>{information.Status}</div>
                    </div>
                </div>
                <div className={styles.tagWapper}>
                    <div className={styles.tags}>
                    <div className={styles.lable}>Tags</div>    
                    {tagArr && tagArr.length > 0 ? tagArr.map((tag, index) => (
                        <button key={index}className={styles.tag }>{tag}</button>
                    )) : null}
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default CatalogueDetailsCard