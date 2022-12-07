import SideBar from "../../Components/SideBar";
import styles from "./VendorOrder.module.css";
function VendorOrder() {
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
                    <div className={styles.header}>Vendor Order</div>
                    <div className={styles.contentWrapper}>
                        <div className={styles.MainItemWrapper}>
                            <div className={styles.itemWrapper}>
                                <div className={styles.lable}>Type</div>
                                <div className={styles.typeButtonWrapper}>
                                    <div className={styles.typeButton}>Inventory</div>
                                    <div className={styles.typeButton}>Product Order</div>
                                </div>
                            </div>
                            <div className={styles.itemWrapper}>
                                <div className={styles.lable}>Vendor ID</div>
                                <div><input className={styles.itemInput} type="text" placeholder="Vendor ID" /></div>
                            </div>
                            <div className={styles.itemWrapper}>
                                <div className={styles.lable}>Style ID</div>
                                <div><input className={styles.itemInput} type="text" placeholder="Style ID" /></div>
                            </div>
                            <div className={styles.itemWrapper}>
                                <div className={styles.lable}>Style Name</div>
                                <div>
                                    <input className={styles.itemInput} type="text" placeholder="Enter the Name" /></div>
                            </div>
                        </div>
                        <div>
                            Photo
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default VendorOrder;
