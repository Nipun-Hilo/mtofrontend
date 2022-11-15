import SideBar from "../../Components/SideBar";
import styles from "./DashBoard.module.css";
function DashBoard() {
  return (
    <div>
      {" "}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <SideBar />
        <div className={styles.mainWrapper}>
          <div className={styles.header}>Dashboard</div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
