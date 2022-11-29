import { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import SideBar from "../../Components/SideBar";
import styles from "./Customer.module.css";
import customerCard from "../../Components/CustomerCard";
// Assets
import searchIcon from "../../Assets/SearchBar/Icons/search.svg";
import CustomerCard from "../../Components/CustomerCard";
import { getCustomers } from "../../Service/customer.service";

function Customer() {
  const [query, setQuery] = useState("customerID");

  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(true);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const token = useSelector(state => state.login.users.token)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getCustomers(token);
        console.log(response.data)
        setCustomers(response.data.customers);
        setFilteredCustomers(response.data.customers);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, []);


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
          {loading ? <><h1>loading</h1></> : <>
            <div className={styles.customerCard}>
              {filteredCustomers.map((customer, index) => {
                return <CustomerCard key={index} customer={customer} />;
              })}
              {filteredCustomers.length === 0 && (
                <div className={styles.noCustomer}>No Customer Found</div>
              )}
            </div>
          </>}
        </div>
      </div>
    </div>
  );
}

export default Customer;
