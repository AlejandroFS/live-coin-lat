import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import CoinTrade from './CoinTrade/CoinTrade.js';
import useSound from 'use-sound';
import cashinSound from './sounds/cash_registwr.mp3';


const CoinsTradeTable = ({ coinsData }) => {
    const [playActive] = useSound(
        cashinSound,
        { volume: 0.5 }
      );
    return (
        <Container className="mt-2">
            <Table  bordered hover>
                <caption>Bitso</caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Moneda</th>
                        <th>cantidad</th>
                        <th>Precio Compra</th>
                        <th>Precio precioactual</th>
                        <th>Ganacias</th>
                        <th>precio actual total</th>
                    </tr>
                </thead>
                <tbody>
                   
                    <CoinTrade order="2" coinTitle="bat" coinTradeObj={{'coin':'bat','quantity':600, 'priceBuy':13.09, 'priceExpecte':14.09 }} coinsData={coinsData} />
                    <CoinTrade order="3" coinTitle="mana" coinTradeObj={{'coin':'xrp','quantity':910, 'priceBuy':11.76, 'priceExpecte':12}} coinsData={coinsData} />
                </tbody>
            </Table>
            <Button variant="success" onClick={()=>playActive()}>Success</Button>
        </Container>
   
    )
}

export default CoinsTradeTable;