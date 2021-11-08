import React, { useState, useEffect } from 'react';
// Loading
import Loading from './Loading';
//API
import { getCoin } from '../Services/api';
// Coins
import Coin from './Coin';

// Styles
import styles from "./Landing.module.css"

const Landing = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    const fetchApi = async () => {
        const data = await getCoin();
        setCoins(data);
    }

    useEffect(() => {
        fetchApi()
    }, [])


    // Serach Handeler
    const searcHandeler = (event) => {
        setSearch(event.target.value)
        console.log(event.target.value);
    }

    const finallCoin = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <input type="text" placeholder="Seacrh ..." onChange={searcHandeler} value={search} className={styles.input} />
            {
                coins.length ?
                    <section id={styles.allCoins}>
                        <div>
                            {
                                finallCoin.map(coin => (
                                    <Coin
                                        key={coin.id}
                                        name={coin.name}
                                        image={coin.image}
                                        symbol={coin.symbol}
                                        price={coin.current_price}
                                        marketCap={coin.market_cap}
                                        priceChange={coin.price_change_percentage_24h}
                                    />
                                ))
                            }
                        </div>
                    </section>
                    : <Loading />
            }

        </>
    );
};

export default Landing;