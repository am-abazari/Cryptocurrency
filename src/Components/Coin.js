import React from 'react';

// Styles
import styles from "./Coin.module.css"
const Coin = ({ name, image, symbol, price, marketCap, priceChange }) => {
    return (
        <div className={styles.coinItems}>
            <img src={image} alt="CoinIMG" />
            <span className={styles.name}>{name} </span>
            <span className={styles.symbol}>{symbol.toUpperCase()} </span>
            <span className={styles.price}>$ {price.toLocaleString()}</span>
            <span className={`${styles.priceChange} ${priceChange > 0 ? styles.greenSet : styles.redSet}`}>{priceChange.toFixed(2)}% </span>
            <span className={styles.marketCap}>$ {marketCap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;