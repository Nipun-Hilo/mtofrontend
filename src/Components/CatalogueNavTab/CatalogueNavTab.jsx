import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CatalogueNavTab.module.css";
import CatalogueNavigator from "./CatalogueNavigator"
import { useParams } from 'react-router-dom';
const CatalogueNavTab = ({ Navigators, activeTab, handleChangeTab }) => {
  const { product_id } = useParams();

  const handleTabChangeParent = (value) => {
    console.log(value)
    handleChangeTab(value)
  }

  return (
    <div>
      <div className={styles.navigator}>
        {/* <div className={styles.header}>&nbsp;</div> */}
        {Navigators.map((navigator, index) => (
          <CatalogueNavigator
            handleChangeTab={handleTabChangeParent}
            activeTab={activeTab}
            value={navigator.value}
            key={index}
            name={navigator.name}
            to={navigator.to}
          />
        ))}
      </div>
      <div className={styles.line}></div>
    </div>
  )
}

export default CatalogueNavTab