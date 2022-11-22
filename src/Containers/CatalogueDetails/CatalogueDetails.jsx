import React from 'react'
import { useState, useEffect } from "react";
import SideBar from "../../Components/SideBar";
import styles from "./CatalogueDetails.module.css";
import CatalogueDetailsCard from '../../Components/CatalogueDetailsCard';

import searchIcon from "../../Assets/SearchBar/Icons/search.svg";

const Catalogue = () => {

    const catalogue = 
        {
            "id": 7829939454195,
            "title": "Adira Gold Zari Embroidered Kurta",
            "body_html": "",
            "vendor": "HILO DESIGN",
            "product_type": "Traditional & Ceremonial Clothing",
            "created_at": "2022-09-14T17:48:49+05:30",
            "handle": "adira-gold-zari-embroidered-kurta",
            "updated_at": "2022-11-19T17:46:53+05:30",
            "published_at": "2022-09-14T23:10:34+05:30",
            "template_suffix": "",
            "status": "active",
            "published_scope": "global",
            "tags": "Brown, Embroidered, Festive, Kurta, kurtas, RTS, Traditional Wear, Wedding",
            "admin_graphql_api_id": "gid://shopify/Product/7829939454195",
            "variants": [
                {
                    "id": 43227481276659,
                    "product_id": 7829939454195,
                    "title": "XS",
                    "price": "3420.00",
                    "sku": "HL-KU-16-XS",
                    "position": 1,
                    "inventory_policy": "deny",
                    "compare_at_price": "3800.00",
                    "fulfillment_service": "manual",
                    "inventory_management": "shopify",
                    "option1": "XS",
                    "option2": null,
                    "option3": null,
                    "created_at": "2022-09-14T17:48:49+05:30",
                    "updated_at": "2022-11-19T17:46:48+05:30",
                    "taxable": true,
                    "barcode": "",
                    "grams": 500,
                    "image_id": null,
                    "weight": 0.5,
                    "weight_unit": "kg",
                    "inventory_item_id": 45323086266611,
                    "inventory_quantity": 101,
                    "old_inventory_quantity": 101,
                    "requires_shipping": true,
                    "admin_graphql_api_id": "gid://shopify/ProductVariant/43227481276659"
                },
                {
                    "id": 43227481309427,
                    "product_id": 7829939454195,
                    "title": "S",
                    "price": "3420.00",
                    "sku": "HL-KU-16-S",
                    "position": 2,
                    "inventory_policy": "deny",
                    "compare_at_price": "3800.00",
                    "fulfillment_service": "manual",
                    "inventory_management": "shopify",
                    "option1": "S",
                    "option2": null,
                    "option3": null,
                    "created_at": "2022-09-14T17:48:49+05:30",
                    "updated_at": "2022-11-19T17:46:50+05:30",
                    "taxable": true,
                    "barcode": "",
                    "grams": 500,
                    "image_id": null,
                    "weight": 0.5,
                    "weight_unit": "kg",
                    "inventory_item_id": 45323086299379,
                    "inventory_quantity": 106,
                    "old_inventory_quantity": 106,
                    "requires_shipping": true,
                    "admin_graphql_api_id": "gid://shopify/ProductVariant/43227481309427"
                },
                {
                    "id": 43227481342195,
                    "product_id": 7829939454195,
                    "title": "M",
                    "price": "3420.00",
                    "sku": "HL-KU-16-M",
                    "position": 3,
                    "inventory_policy": "deny",
                    "compare_at_price": "3800.00",
                    "fulfillment_service": "manual",
                    "inventory_management": "shopify",
                    "option1": "M",
                    "option2": null,
                    "option3": null,
                    "created_at": "2022-09-14T17:48:49+05:30",
                    "updated_at": "2022-11-19T17:46:50+05:30",
                    "taxable": true,
                    "barcode": "",
                    "grams": 500,
                    "image_id": null,
                    "weight": 0.5,
                    "weight_unit": "kg",
                    "inventory_item_id": 45323086332147,
                    "inventory_quantity": 102,
                    "old_inventory_quantity": 102,
                    "requires_shipping": true,
                    "admin_graphql_api_id": "gid://shopify/ProductVariant/43227481342195"
                },
                {
                    "id": 43227481374963,
                    "product_id": 7829939454195,
                    "title": "L",
                    "price": "3420.00",
                    "sku": "HL-KU-16-L",
                    "position": 4,
                    "inventory_policy": "deny",
                    "compare_at_price": "3800.00",
                    "fulfillment_service": "manual",
                    "inventory_management": "shopify",
                    "option1": "L",
                    "option2": null,
                    "option3": null,
                    "created_at": "2022-09-14T17:48:49+05:30",
                    "updated_at": "2022-11-19T17:46:51+05:30",
                    "taxable": true,
                    "barcode": "",
                    "grams": 500,
                    "image_id": null,
                    "weight": 0.5,
                    "weight_unit": "kg",
                    "inventory_item_id": 45323086364915,
                    "inventory_quantity": 101,
                    "old_inventory_quantity": 101,
                    "requires_shipping": true,
                    "admin_graphql_api_id": "gid://shopify/ProductVariant/43227481374963"
                },
                {
                    "id": 43227481407731,
                    "product_id": 7829939454195,
                    "title": "XL",
                    "price": "3420.00",
                    "sku": "HL-KU-16-XL",
                    "position": 5,
                    "inventory_policy": "deny",
                    "compare_at_price": "3800.00",
                    "fulfillment_service": "manual",
                    "inventory_management": "shopify",
                    "option1": "XL",
                    "option2": null,
                    "option3": null,
                    "created_at": "2022-09-14T17:48:49+05:30",
                    "updated_at": "2022-11-19T17:46:51+05:30",
                    "taxable": true,
                    "barcode": "",
                    "grams": 500,
                    "image_id": null,
                    "weight": 0.5,
                    "weight_unit": "kg",
                    "inventory_item_id": 45323086397683,
                    "inventory_quantity": 105,
                    "old_inventory_quantity": 105,
                    "requires_shipping": true,
                    "admin_graphql_api_id": "gid://shopify/ProductVariant/43227481407731"
                },
                {
                    "id": 43227481440499,
                    "product_id": 7829939454195,
                    "title": "XXL",
                    "price": "3420.00",
                    "sku": "HL-KU-16-XXL",
                    "position": 6,
                    "inventory_policy": "deny",
                    "compare_at_price": "3800.00",
                    "fulfillment_service": "manual",
                    "inventory_management": "shopify",
                    "option1": "XXL",
                    "option2": null,
                    "option3": null,
                    "created_at": "2022-09-14T17:48:49+05:30",
                    "updated_at": "2022-11-19T17:46:52+05:30",
                    "taxable": true,
                    "barcode": "",
                    "grams": 500,
                    "image_id": null,
                    "weight": 0.5,
                    "weight_unit": "kg",
                    "inventory_item_id": 45323086430451,
                    "inventory_quantity": 100,
                    "old_inventory_quantity": 100,
                    "requires_shipping": true,
                    "admin_graphql_api_id": "gid://shopify/ProductVariant/43227481440499"
                },
                {
                    "id": 43227481473267,
                    "product_id": 7829939454195,
                    "title": "Made To Fit",
                    "price": "3420.00",
                    "sku": "HL-KU-16-MTF",
                    "position": 7,
                    "inventory_policy": "deny",
                    "compare_at_price": "3800.00",
                    "fulfillment_service": "manual",
                    "inventory_management": "shopify",
                    "option1": "Made To Fit",
                    "option2": null,
                    "option3": null,
                    "created_at": "2022-09-14T17:48:49+05:30",
                    "updated_at": "2022-11-19T17:46:53+05:30",
                    "taxable": true,
                    "barcode": "",
                    "grams": 500,
                    "image_id": null,
                    "weight": 0.5,
                    "weight_unit": "kg",
                    "inventory_item_id": 45323086463219,
                    "inventory_quantity": 100,
                    "old_inventory_quantity": 100,
                    "requires_shipping": true,
                    "admin_graphql_api_id": "gid://shopify/ProductVariant/43227481473267"
                }
            ],
            "options": [
                {
                    "id": 10012960358643,
                    "product_id": 7829939454195,
                    "name": "Size",
                    "position": 1,
                    "values": [
                        "XS",
                        "S",
                        "M",
                        "L",
                        "XL",
                        "XXL",
                        "Made To Fit"
                    ]
                }
            ],
            "images": [
                {
                    "id": 38216634073331,
                    "product_id": 7829939454195,
                    "position": 1,
                    "created_at": "2022-09-14T23:00:11+05:30",
                    "updated_at": "2022-09-15T00:21:45+05:30",
                    "alt": null,
                    "width": 1001,
                    "height": 1500,
                    "src": "https://cdn.shopify.com/s/files/1/0251/5179/9349/products/04-09-2203027.jpg?v=1663181505",
                    "variant_ids": [],
                    "admin_graphql_api_id": "gid://shopify/ProductImage/38216634073331"
                },
                {
                    "id": 38216634302707,
                    "product_id": 7829939454195,
                    "position": 2,
                    "created_at": "2022-09-14T23:00:12+05:30",
                    "updated_at": "2022-09-15T00:21:45+05:30",
                    "alt": null,
                    "width": 1001,
                    "height": 1500,
                    "src": "https://cdn.shopify.com/s/files/1/0251/5179/9349/products/04-09-2203011.jpg?v=1663181505",
                    "variant_ids": [],
                    "admin_graphql_api_id": "gid://shopify/ProductImage/38216634302707"
                },
                {
                    "id": 38216634040563,
                    "product_id": 7829939454195,
                    "position": 3,
                    "created_at": "2022-09-14T23:00:10+05:30",
                    "updated_at": "2022-09-15T00:21:45+05:30",
                    "alt": null,
                    "width": 1001,
                    "height": 1500,
                    "src": "https://cdn.shopify.com/s/files/1/0251/5179/9349/products/04-09-2203012.jpg?v=1663181505",
                    "variant_ids": [],
                    "admin_graphql_api_id": "gid://shopify/ProductImage/38216634040563"
                },
                {
                    "id": 38216634204403,
                    "product_id": 7829939454195,
                    "position": 4,
                    "created_at": "2022-09-14T23:00:11+05:30",
                    "updated_at": "2022-09-15T00:21:45+05:30",
                    "alt": null,
                    "width": 1001,
                    "height": 1500,
                    "src": "https://cdn.shopify.com/s/files/1/0251/5179/9349/products/04-09-2203014.jpg?v=1663181505",
                    "variant_ids": [],
                    "admin_graphql_api_id": "gid://shopify/ProductImage/38216634204403"
                },
                {
                    "id": 38216634138867,
                    "product_id": 7829939454195,
                    "position": 5,
                    "created_at": "2022-09-14T23:00:11+05:30",
                    "updated_at": "2022-09-15T00:21:45+05:30",
                    "alt": null,
                    "width": 1001,
                    "height": 1500,
                    "src": "https://cdn.shopify.com/s/files/1/0251/5179/9349/products/04-09-2203020.jpg?v=1663181505",
                    "variant_ids": [],
                    "admin_graphql_api_id": "gid://shopify/ProductImage/38216634138867"
                },
                {
                    "id": 38216634106099,
                    "product_id": 7829939454195,
                    "position": 6,
                    "created_at": "2022-09-14T23:00:11+05:30",
                    "updated_at": "2022-09-15T00:21:45+05:30",
                    "alt": null,
                    "width": 1001,
                    "height": 1500,
                    "src": "https://cdn.shopify.com/s/files/1/0251/5179/9349/products/04-09-2203023.jpg?v=1663181505",
                    "variant_ids": [],
                    "admin_graphql_api_id": "gid://shopify/ProductImage/38216634106099"
                },
                {
                    "id": 38216634335475,
                    "product_id": 7829939454195,
                    "position": 7,
                    "created_at": "2022-09-14T23:00:12+05:30",
                    "updated_at": "2022-09-14T23:00:12+05:30",
                    "alt": null,
                    "width": 1001,
                    "height": 1500,
                    "src": "https://cdn.shopify.com/s/files/1/0251/5179/9349/products/04-09-2203034.jpg?v=1663176612",
                    "variant_ids": [],
                    "admin_graphql_api_id": "gid://shopify/ProductImage/38216634335475"
                }
            ],
            "image": {
                "id": 38216634073331,
                "product_id": 7829939454195,
                "position": 1,
                "created_at": "2022-09-14T23:00:11+05:30",
                "updated_at": "2022-09-15T00:21:45+05:30",
                "alt": null,
                "width": 1001,
                "height": 1500,
                "src": "https://cdn.shopify.com/s/files/1/0251/5179/9349/products/04-09-2203027.jpg?v=1663181505",
                "variant_ids": [],
                "admin_graphql_api_id": "gid://shopify/ProductImage/38216634073331"
            }
        }

    //   const [information, setInformation] = useState({});
    //     useEffect((e) => {
    //         setInformation({
    //         ProductName: catalogue.title,
    //         SKU: catalogue.variants[0].sku,
    //         Price: catalogue.variants[0].price,
    //         ProductID: catalogue.variants[0].product_id,
    //         Type: catalogue.product_type,
    //         Status: catalogue.status,
    //         });
    //     },[]);
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
                <div className={styles.header}>
                    Catalogue
                </div>

                <div className={styles.header2Wapper}>
                    <div>
                        <p className={styles.header}>{catalogue.variants[0].sku}</p>
                        <p className={styles.title}>{catalogue.title}</p>
                    </div>
                    <button className={styles.btn}>Edit</button>
                </div>

                <CatalogueDetailsCard catalogue={catalogue}/>
            </div>
          </div>
        </div>
      );
}

export default Catalogue