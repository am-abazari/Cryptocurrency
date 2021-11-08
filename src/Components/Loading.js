import React from 'react';
import loader from "../gif/spinner.gif"
import styles from "./Loading.module.css"

const Loading = () => {
    return (
        <div>
            <h1 className={styles.titileLoading}>Loading Data ...</h1>
            <img className={styles.loading} src={loader} alt="Loading..." />
        </div>
    );
};

export default Loading;