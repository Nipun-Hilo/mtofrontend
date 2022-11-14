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
      name: "Dashboard",
      to: "/dashboard",
      icon: "dashboard.svg",
    },
    {
      name: "Dashboard",
      to: "/dashboard",
      icon: "dashboard.svg",
    },
    {
      name: "Dashboard",
      to: "/dashboard",
      icon: "dashboard.svg",
    },
    {
      name: "Dashboard",
      to: "/dashboard",
      icon: "dashboard.svg",
    },
  ];
  return (
    <div>
      {" "}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
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
