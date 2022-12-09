import { useEffect, useState } from "react";
import styles from "./ProductionCard.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function ProductionCard({ order }) {
  const [information, setInformation] = useState({});
  const navigate = useNavigate();
  const imageSrc = order.image ? order.image.src : "https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2548&q=80k";
  useEffect((e) => {
    setInformation({
      ProductName: order?.line_items?.title,
      ShopifyID: "-",
      CustomerID: "-",
      OrderID: order?.id,
      DOD: "-",
      ProductionStage: "-",
      ProductID: "-",
      Image: imageSrc
    });
  }, []);


  let nameArr = String(order.title).split(" ");
  // let typeArr = String(order.product_type).split(" ");
  return (
    <div onClick={(e) => navigate(`/production/${information.OrderID}`)}>
      <div className={styles.cardWrapper}>
        <img src={information.Image} alt="Image not Found" />
        <div className={styles.mainWrapper}>
          <div className={styles.info}>
            <div className={styles.lable}>Product Name</div>
            <div className={styles.value}>{nameArr.length > 2 ? nameArr[0] + " " + nameArr[1] + "..." : String(information.ProductName)}</div>
          </div>
          <div className={styles.info}>
            <div className={styles.lable}>ShopifyID</div>
            <div className={styles.value}>{information.ShopifyID}</div>
          </div>
          <div className={styles.info}>
            <div className={styles.lable}>Customer ID</div>
            <div className={styles.value}>{information.CustomerID}</div>
          </div>
          <div className={styles.info}>
            <div className={styles.lable}>Order ID</div>
            <div className={styles.value}>{information.OrderID}</div>
          </div>
          <div className={styles.info}>
            <div className={styles.lable}>Date Of Delivery</div>
            <div className={styles.value}>{information.DOD}</div>
          </div>

          <div className={styles.info}>
            <div className={styles.lable}>Production Stage</div>
            <div className={styles.value}>{information.ProductionStage}</div>
          </div>
          <div className={styles.info}>
            <div className={styles.lable}>Product ID</div>
            <div className={styles.value}>{information.ProductID}</div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ProductionCard;
