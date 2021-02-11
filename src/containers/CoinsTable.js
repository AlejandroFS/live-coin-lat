import React from 'react';
import { Container, Table } from 'react-bootstrap';
import Coins from '../components/Coin/Coin.js';

const CoinsTable = ({ coinsData }) => {
    return (
        <Container className="mt-2">
            <Table striped bordered hover>
                <caption>Bitso</caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Moneda</th>
                        <th>Precio mas alto</th>
                        <th>Precio mas Bajo</th>
                        <th>Precio Actual</th>
                        <th>Actualizacion (cada 5 segundos)</th>
                    </tr>
                </thead>
                <tbody>
                    <Coins order="1" coinTitle="xrp" coinsData={coinsData} />
                    <Coins order="2" coinTitle="bat" coinsData={coinsData} />
                    <Coins order="3" coinTitle="mana" coinsData={coinsData} />
                </tbody>
            </Table>
        </Container>

    )
}

export default CoinsTable;