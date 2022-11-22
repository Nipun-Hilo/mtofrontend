import React, {useState} from 'react'
import styles from "./CatalogueDesc.module.css";
import SideBar from "../../Components/SideBar";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const CatalogueDesc = () => {
    const [value, setValue] = useState('');
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
                        <p className={styles.header}>catalogue.variants</p>
                        <p className={styles.title}>catalogue.title</p>
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