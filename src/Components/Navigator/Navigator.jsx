// React
import React from "react";
import { useNavigate } from "react-router-dom";

// Assets
import dashboardIcon from "../../assets/SideBar/Icons/dashboard.svg";

// Styles
import styles from "./Navigator.module.css";

function Navigator({ name, to, icon }) {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className={styles.navigator}
        onClick={() => {
          navigate(to);
        }}
      >
        <img src={`/src/assets/SideBar/Icons/${icon}`} alt={name} />

        <div>{name}</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
      </div>
    </div>
  );
}

export default Navigator;
