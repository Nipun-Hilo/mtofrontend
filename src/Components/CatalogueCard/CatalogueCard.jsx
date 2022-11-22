import { useEffect, useState } from "react";
import styles from "./CatalogueCard.module.css";
import axios from "axios";
import {Link } from "react-router-dom";

function CatalogueCard({ catalogue }) {
  const [information, setInformation] = useState({});
  useEffect((e) => {
    setInformation({
      ProductName: catalogue.title,
      SKU: catalogue.variants[0].sku,
      Price: catalogue.variants[0].price,
      ProductID: catalogue.variants[0].product_id,
      Type: catalogue.product_type,
      Status: catalogue.status,
    });
  },[]);
  let nameArr = String(catalogue.title).split(" ");
  let typeArr = String(catalogue.product_type).split(" ");
  return (
    <div>
      <div className={styles.cardWrapper}>
        <img src={catalogue.image.src} />
        <div className={styles.mainWrapper}>
            <div className={styles.info}>
              <div className={styles.lable}>Product Name</div>
              <div className={styles.value}>{nameArr.length>2 ? nameArr[0] + " " + nameArr[1] + "..." : String(information.ProductName)}</div>
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
              <div className={styles.value}>{typeArr.length>2 ? typeArr[0] + " " + typeArr[1] + "..." : String(information.typr)}</div>
            </div>

            <div className={styles.info}>
              <div className={styles.lable}>Status</div>
              <div className={styles.value}>{information.Status}</div>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default CatalogueCard;
