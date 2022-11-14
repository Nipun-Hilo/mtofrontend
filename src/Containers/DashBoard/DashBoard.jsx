import SideBar from "../../Components/SideBar";
import styles from "./DashBoard.module.css";
function DashBoard() {
  return (
    <div>
      {" "}
      <div className={styles.header}>HILO DESIGNS</div>
      <SideBar />
    </div>
  );
}

export default DashBoard;
