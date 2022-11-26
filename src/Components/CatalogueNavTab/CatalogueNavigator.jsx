// React
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./CatalogueNavTab.module.css";

function Navigator({ name, to , activeTab , value,handleChangeTab }) {
  // const [active, setActive] = React.useState(
  //   window.location.pathname === to ? true : false
  // );
  // useEffect(() => {
  //   setActive(window.location.pathname === to ? true : false);
  //   console.log(window.location.pathname);
  // }, [to]);
  const navigate = useNavigate();
  return (
    <div>
      <div
        className={styles.navigator}
        onClick={() => {
          // navigate(to);
          if(activeTab!==value){
          handleChangeTab(value);

          }
        }}
        style={{
          backgroundColor: activeTab === value ? "#543925" : "white",
          color: activeTab === value ? "#C39971" : "#543925",
        }}
      >
        <div>{name}</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
      </div>
    </div>
  );
}

export default Navigator;
