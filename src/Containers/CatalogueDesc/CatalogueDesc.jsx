import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import styles from "./CatalogueDesc.module.css";
import SideBar from "../../Components/SideBar";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const CatalogueDesc = ({catalogue}) => {
    const [value, setValue] = useState('');
    const { product_id } = useParams();
  return (
    <div>
        {" "}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div className={styles.mainWrapper}>
                <div className={styles.header2Wapper}>
                    <div>
                        <p className={styles.header}>{catalogue?.variants[0]?.sku}</p>
                        <p className={styles.title}>{catalogue?.title}</p>
                    </div>
                    <button className={styles.btn}>Edit</button>
                </div>

                <div className={styles.topWrapper}>
                    <ReactQuill theme="snow" value={value} onChange={setValue} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CatalogueDesc