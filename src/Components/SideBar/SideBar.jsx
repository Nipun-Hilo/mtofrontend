import Navigator from "../Navigator";
import styles from "./SideBar.module.css";
function SideBar() {
  const Navigators = [
    {
      name: "Dashboard",
      to: "/dashboard",

    },
    {
      name: "Catalogue",
      to: "/catalogue",

    },
    {
      name: "Customer",
      to: "/customer",

    },
    {
      name: "Production",
      to: "/production",

    },
    {
      name: "Orders",
      to: "/orders",

    },
    {
      name: "Vendor Orders ",
      to: "/vendororders ",

    },
  ];
  return (
    <div>
      {" "}
      <div
        style={{
          backgroundColor: "#C39971",
          width: "max-content",
          minHeight: "100vh",
          height:"100%"
        }}
      >
        {" "}
        <div className={styles.header}>&nbsp;</div>
        {Navigators.map((navigator, index) => (
          <Navigator
            key={index}
            name={navigator.name}
            to={navigator.to}
          />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
