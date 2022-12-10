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
    const [status, setStatus] = useState("Status");
    const [shipment, setShipment] = useState("Shipment");
    const [courier, setCourier] = useState("Courier");
    const [payment, setPayment] = useState("Payment");

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const token = useSelector(state => state.login.users.token)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await getOrders(token);
                console.log(response.data.orders?.line_items)
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
                    <div className={styles.searchBarWrapper}>
                        <div className={styles.searchBar}>
                            <select
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                }}
                            >
                                <option value="id">Order ID</option>
                            </select>
                            <input
                                className={styles.searchInput}
                                type="text"
                                placeholder="Type here to search "
                                onChange={(e) => {
                                    const value = e.target.value;
                                    const filtered = products.filter((order) => {
                                        console.log(order);

                                        return order[query]
                                            .includes(value.toLowerCase());
                                    });
                                    if (value.length > 0) {
                                        setFilteredProducts(filtered);
                                    } else {
                                        setFilteredProducts(products);
                                    }
                                }}
                            />
                            <img src={searchIcon} />
                        </div>
                        <div className={styles.searchBar}>
                            <select
                                onChange={(e) => {
                                    setStatus(e.target.value);
                                }}
                            >
                                <option value="Fabrication">Fabrication</option>
                                <option value="Stitching">Stitching</option>
                                <option value="Embroidery">Embroidery</option>
                                <option value="Alterations">Alterations</option>
                                <option value="Ready To Ship">Ready To Ship</option>
                                <option value="Shipped">Shipped</option>
                            </select>
                        </div>
                        <div className={styles.searchBar}>
                            <select
                                onChange={(e) => {
                                    setShipment(e.target.value);
                                }}
                            >
                                <option value="ShipmentType">Shipment Type</option>
                            </select>
                        </div>
                        <div className={styles.searchBar}>
                            <select
                                onChange={(e) => {
                                    setCourier(e.target.value);
                                }}
                            >
                                <option value="Courier">Courier</option>
                            </select>
                        </div>
                        <div className={styles.searchBar}>
                            <select
                                onChange={(e) => {
                                    setPayment(e.target.value);
                                }}
                            >
                                <option value="Payment">Payment</option>
                            </select>
                        </div>
                    </div>
                    {loading ? <><h1>loading</h1></> : <>
                        <div className={styles.catalogueCard}>
                            {products.map((order, index) => {
                                return order?.line_items.map((item, ind) => {
                                    return <ProductionCard key={ind} order={order} item={item} />;
                                })
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
