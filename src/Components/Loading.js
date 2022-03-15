import React from 'react';
import loader from "../gif/spinner.gif"
import styles from "./Loading.module.css"

const Loading = () => {
    return (
        <div>
            <img className={styles.loading} src={loader} alt="Loading..." />
        </div>
    );
};

export default Loading;