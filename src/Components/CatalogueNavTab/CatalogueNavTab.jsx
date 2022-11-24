import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CatalogueNavTab.module.css";
import CatalogueNavigator from "./CatalogueNavigator"
import { useParams } from 'react-router-dom';
const CatalogueNavTab = () => {
    const { product_id } = useParams();
    const Navigators = [
        {
          name: "Details",
          to: `/catalogue/${product_id}/details`,
    
        },
        {
          name: "Description",
          to: `/catalogue/${product_id}/description`,
    
        },
        {
          name: "Variants",
          to: `/${product_id}/variants`,
    
        },
        {
          name: "Style Details",
          to: `/${product_id}/style-details`,
        },
        
      ];

  return (
  
      <div className={styles.navigator}>
        <div className={styles.header}>&nbsp;</div>
        {Navigators.map((navigator, index) => (
          <CatalogueNavigator
            key={index}
            name={navigator.name}
            to={navigator.to}
          />
        ))}
    </div>
    
  )
}

export default CatalogueNavTab