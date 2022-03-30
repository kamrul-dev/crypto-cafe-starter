import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CoinDetails = () => {
    const {id} = useParams();
    const [coin, setCoin] = useState({});

    useEffect(() => {
        const url = `https://api.coingecko.com/api/v3/coins/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCoin(data));
    }, [id]);
    return (
        <div className='px-4 h-[70vh] pt-20 mx-auto max-w-7xl md:px-2'>
            <div className='h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 md:justify-around content-center'>
                <div>
                    <h1 className='text-3xl'>General Info:</h1>
                    <hr />
                    <h1>Coin Name: {coin.name}</h1>
                    <h1>Market Cap: {coin.market_cap_rank}</h1>
                    <h1>Origin: {coin.country_origin ? coin.country_origin: "Not Available" }</h1>

                    <h1 className='text-3xl'>Scores:</h1>
                    <hr />
                    <h1>Community Score: {coin.community_score}</h1>
                    <h1>Eveloper Score: {coin.developer_score}</h1>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={coin.image?.large} alt="" />
                </div>

            </div>
           
        </div>
    );
};

export default CoinDetails;