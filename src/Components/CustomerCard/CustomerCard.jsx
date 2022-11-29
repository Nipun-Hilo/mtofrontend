import { useEffect, useState } from "react";
import styles from "./CustomerCard.module.css";
import { useNavigate } from "react-router-dom";
function CustomerCard({ customer }) {
  // const [information, setInformation] = useState({});
  const navigate = useNavigate();
  // useEffect((e) => {
  //   setInformation({
  //     "CustomerID": customer?.id,
  //     Email: customer?.email,
  //     Gender: customer?.gender,
  //     "Phone Number": customer.default_address?.phone,
  //     Location: customer.default_address?.city,
  //     Source: customer.source,
  //   });
  // });

  // console.log(customer)
  return (
    <div onClick={(e)=>navigate(`/customers/${customer.id}`)}>
      <div className={styles.cardWrapper}>
        <div className={styles.details}>
          <img src={customer.img} />
          <div>{customer.first_name}</div>
        </div>
        <div className={styles.mainWrapper}>
          <div className={styles.infoWrapper}>
            <div className={styles.info}>
              <div className={styles.lable}>Customer ID</div>
              <div className={styles.value}>{customer.id}</div>
            </div>
            <div className={styles.info}>
              <div className={styles.lable}>Gender</div>
              <div className={styles.value}>{customer.gender}</div>
            </div>
            <div className={styles.info}>
              <div className={styles.lable}>Location</div>
              <div className={styles.value}>{customer.default_address?.city ? customer.default_address?.city : "N/A"}</div>
            </div>
          </div>
          <div className={styles.infoWrapper}>
            <div className={styles.info}>
              <div className={styles.lable}>Email</div>
              <div className={styles.value}>{customer.email}</div>
            </div>
            <div className={styles.info}>
              <div className={styles.lable}>Phone Number</div>
              <div className={styles.value}>{customer.default_address?.phone ? customer.default_address?.phone : "N/A"}</div>
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
