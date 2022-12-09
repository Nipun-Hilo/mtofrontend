// React
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Assets
// import dashboardIcon from "../../assets/SideBar/Icons/dashboard.svg";

// Styles
import styles from "./Navigator.module.css";

function Navigator({ name, to }) {
  const [active, setActive] = React.useState(
    window.location.pathname === to ? true : false
  );
  useEffect(() => {
    setActive(window.location.pathname === to ? true : false);
  }, []);

  console.log(window.location.pathname === to);
  // console.log(window.location.pathname);
  // console.log(to);
  const navigate = useNavigate();
  return (
    <div>
      <div
        className={styles.navigator}
        onClick={() => {
          navigate(to);
        }}
        style={{
          backgroundColor: active ? "#543925" : "white",
          color: active ? "#C39971" : "#543925",
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
