import Navigator from "../Navigator";
import styles from "./SideBar.module.css";
function SideBar() {
  const Navigators = [
    {
      name: "Dashboard",
      to: "/dashboard",
      icon: "dashboard.svg",
    },
    {
      name: "Design",
      to: "/design",
      icon: "design.svg",
    },
    {
      name: "Customer",
      to: "/customer",
      icon: "customer.svg",
    },
    {
      name: "Orders",
      to: "/orders",
      icon: "orders.svg",
    },
    {
      name: "Payouts",
      to: "/payouts",
      icon: "payout.svg",
    },
    {
      name: "Inspiration ",
      to: "/inspiration ",
      icon: "inspiration.svg",
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
        }}
      >
        {" "}
        <div className={styles.header}>&nbsp;</div>
        {Navigators.map((navigator, index) => (
          <Navigator
            key={index}
            name={navigator.name}
            to={navigator.to}
            icon={navigator.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
