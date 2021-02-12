import React, { useEffect, useState } from 'react';
const CoinTrade = ({ order, coinTitle, coinsData, coinTradeObj }) => {
    const [coin, setCoin] = useState('Loading...');

    useEffect(() => {
        if (coinsData) {
            const selectedCoin = coinsData.find((coinElement) => {
                return coinElement.book === `${coinTradeObj.coin}_mxn`;
            });
            setCoin(selectedCoin);
        }
    }, [coinsData, coinTradeObj.coin]);

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
        <tr className={coinTradeObj.priceBuy < coin.last? "alert-success":"alert-danger"}>
            <td>{order}</td>
            <td>{coinTradeObj.coin.toUpperCase()}</td>
            <td>{coinTradeObj.quantity}</td>
            <td>{coinTradeObj.priceBuy || "Loading"}</td>
            <td><b> {coin.last || "Loading"}</b></td>
            <td><b> {Math.trunc((coin.last-coinTradeObj.priceBuy)*coinTradeObj.quantity) || "Loading"}</b></td>
            <td>{coin.last*coinTradeObj.quantity || "loading"}</td>
        </tr>
    )
}

export default CoinTrade;