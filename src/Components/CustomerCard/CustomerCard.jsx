import { useEffect, useState } from "react";
import styles from "./CustomerCard.module.css";
function CustomerCard({ customer }) {
  const [information, setInformation] = useState({});
  useEffect((e) => {
    setInformation({
      "Customer ID": customer.customerID,
      Email: customer.email,
      Gender: customer.gender,
      "Phone Number": customer.phone,
      Location: customer.location,
      Source: customer.source,
    });
  });
  return (
    <div>
      <div className={styles.cardWrapper}>
        <div className={styles.details}>
          <img src={customer.img} />
          <div>{customer.name}</div>
        </div>
        <div className={styles.mainWrapper}>
          <div className={styles.infoWrapper}>
            <div className={styles.info}>
              <div className={styles.lable}>Customer ID</div>
              <div className={styles.value}>{customer.customerID}</div>
            </div>
            <div className={styles.info}>
              <div className={styles.lable}>Gender</div>
              <div className={styles.value}>{customer.gender}</div>
            </div>
            <div className={styles.info}>
              <div className={styles.lable}>Location</div>
              <div className={styles.value}>{customer.location}</div>
            </div>
          </div>
          <div className={styles.infoWrapper}>
            <div className={styles.info}>
              <div className={styles.lable}>Email</div>
              <div className={styles.value}>{customer.email}</div>
            </div>
            <div className={styles.info}>
              <div className={styles.lable}>Phone Number</div>
              <div className={styles.value}>{customer.phone}</div>
            </div>

            <div className={styles.info}>
              <div className={styles.lable}>Source</div>
              <div className={styles.value}>{customer.source}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerCard;
