import { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import SideBar from "../../Components/SideBar";
import styles from "./Production.module.css";
// Assets
import searchIcon from "../../Assets/SearchBar/Icons/search.svg";
// import CustomerCard from "../../Components/CustomerCard";
import { getOrders } from "../../Service/order.service"
import ProductionCard from "../../Components/ProductionCard/ProductionCard";

function Production() {
    const [query, setQuery] = useState("customerID");

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const token = useSelector(state => state.login.users.token)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await getOrders(token);
                console.log(response.data.orders?.line_items?.title)
                setProducts(response.data.orders);
                setFilteredProducts(response.data.orders);
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
                    <div className={styles.header}>Production</div>

                    <div className={styles.searchBar}>
                        <select
                            onChange={(e) => {
                                setQuery(e.target.value);
                            }}
                        >
                            <option value="id">Product ID</option>
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
                                    setFilteredProducts(filtered);
                                } else {
                                    setFilteredProducts(customers);
                                }
                            }}
                        />
                        <img src={searchIcon} />
                    </div>
                    {loading ? <><h1>loading</h1></> : <>
                        <div className={styles.catalogueCard}>
                            {products.map((order, index) => {
                                return <ProductionCard key={index} order={order} />;
                            })}
                            {filteredProducts.length === 0 && (
                                <div className={styles.noCatalogue}>No Catalogue Found</div>
                            )}
                        </div>
                    </>}
                </div>
            </div>
        </div>
    );
}

export default Production;
