// Libraries
import React from 'react'
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'



// Components and Service
import { getProducts } from "../../Service/catalogue.service";
import SideBar from "../../Components/SideBar";
import styles from "./Catalogue.module.css";
import CatalogueCard from "../../Components/CatalogueCard";
//Assets
import searchIcon from "../../Assets/SearchBar/Icons/search.svg";

const Catalogue = () => {
    const [query, setQuery] = useState("style ID");
    const [catalogue, setCatalogue] = useState([])
    const [loading, setLoading] = useState(true);
    const token = useSelector(state => state.login.users.token)


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await getProducts(token);
                setCatalogue(response.data.products);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }
        fetchData();
    }, []);

    const [filteredCatalogue, setFilteredCatalogue] = useState(catalogue);


    console.log(catalogue)

    return (
        <div>
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
                        <div className={styles.header}>Catalogue</div>

                        <div className={styles.searchBar}>
                            <select
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                }}
                            >
                                <option value="style ID">Style ID</option>

                            </select>
                            <input
                                className={styles.searchInput}
                                type="text"
                                placeholder="Type here to search "
                                onChange={(e) => {
                                    const value = e.target.value;
                                    const filtered = catalogue.filter((catalogue) => {
                                        return catalogue[query]
                                            .toLowerCase()
                                            .includes(value.toLowerCase());
                                    });
                                    if (value.length > 0) {
                                        setFilteredCatalogue(filtered);
                                    } else {
                                        setFilteredCatalogue(catalogue);
                                    }
                                }}
                            />
                            <img src={searchIcon} />
                        </div>
                        {loading ? <><h1>loading</h1></> : <>
                            <div className={styles.catalogueCard}>
                                {catalogue.map((catalogue, index) => {
                                    return <CatalogueCard key={index} catalogue={catalogue} />;
                                })}
                                {filteredCatalogue.length === 0 && (
                                    <div className={styles.noCatalogue}>No Catalogue Found</div>
                                )}
                            </div>
                        </>}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Catalogue