import { useState } from "react";
import SideBar from "../../Components/SideBar";
import styles from "./Customer.module.css";
import customerCard from "../../Components/CustomerCard";
// Assets
import searchIcon from "../../Assets/SearchBar/Icons/search.svg";
import CustomerCard from "../../Components/CustomerCard";

function Customer() {
  const [query, setQuery] = useState("customerID");

  const customers = [
    {
      customerID: "CUS1783",
      name: "Pavan Kumar",
      location: "Hyderabad, IN",
      img: "https://imgmedia.lbb.in/media/2021/11/618cb4bc33d6b805d05e2a2f_1636611260785.png",
      phone: "9059997185",
      email: "pavanmarleygun@gmail.com",
      source: "Instagram",
      gender: "Male",
    },
    {
      customerID: "CUS1784",
      name: "Chandan Kumar",
      location: "Hyderabad, IN",
      img: "https://imgmedia.lbb.in/media/2021/11/618cb4bc33d6b805d05e2a2f_1636611260785.png",
      phone: "9375467890",
      email: "testing@gmail.com",
      source: "Instagram",
      gender: "Male",
    },
    {
      customerID: "CUS1785",
      name: "Shital Kumar",
      location: "Hyderabad, IN",
      img: "https://imgmedia.lbb.in/media/2021/11/618cb4bc33d6b805d05e2a2f_1636611260785.png",
      phone: "9375467890",
      email: "testing2@gmail.com",
      source: "Instagrams",
      gender: "Male",
    },
  ];
  const [filteredCustomers, setFilteredCustomers] = useState(customers);
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
          <div className={styles.header}>Customers</div>

          <div className={styles.searchBar}>
            <select
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            >
              <option value="customerID">Customer ID</option>
              <option value="name">Name</option>
              <option value="location">Location</option>
              <option value="phone">Phone</option>
              <option value="email">Email</option>
              <option value="source">Source</option>
            </select>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Type here to search "
              onChange={(e) => {
                const value = e.target.value;
                const filtered = customers.filter((customer) => {
                  return customer[query]
                    .toLowerCase()
                    .includes(value.toLowerCase());
                });
                if (value.length > 0) {
                  setFilteredCustomers(filtered);
                } else {
                  setFilteredCustomers(customers);
                }
              }}
            />
            <img src={searchIcon} />
          </div>

          <div className={styles.customerCard}>
            {filteredCustomers.map((customer, index) => {
              return <CustomerCard key={index} customer={customer} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
