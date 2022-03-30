import React, { useEffect, useState } from 'react';
import CoinCard from '../CoinCard/CoinCard';

const Coins = () => {
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCoins(data)
            })
    }, [])
    return (
        <div>
            {
                coins.map(coin => <CoinCard
                    key={coin.id}
                    coin={coin}
                ></CoinCard>)
            }
        </div>
    );
};

export default Coins;