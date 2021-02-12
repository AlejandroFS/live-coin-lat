import React, { useEffect, useState } from 'react';
const Coin = ({ order, coinTitle, coinsData }) => {
    const [coin, setCoin] = useState('Loading...');

    useEffect(() => {
        if (coinsData) {
            const selectedCoin = coinsData.find((coinElement) => {
                return coinElement.book === `${coinTitle}_mxn`;
            });
            setCoin(selectedCoin);
        }
    }, [coinsData, coinTitle]);

    const formatDate = (coinDate) => {
        const date = new Date(coinDate);
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        let dt = date.getDate();
        const min = date.getMinutes();
        let sec = date.getUTCSeconds();
        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }
        return year + '-' + month + '-' + dt + ': ' + min + ":" + sec;
    }
    return (

        <tr>
            <td>{order}</td>
            <td>{coinTitle.toUpperCase()}</td>
            <td>{coin.high || "Loading"}</td>
            <td>{coin.low || "Loading"}</td>
            <td><b>{coin.last || "Loading"}</b></td>
            <td>{(coin.created_at && formatDate(coin.created_at)) || "loading"}</td>
        </tr>
    )
}

export default Coin;