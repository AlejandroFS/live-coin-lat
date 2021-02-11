import './App.css';
import Header from './components/Header/Header';
import CoinstTable from './containers/CoinsTable';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [coinsData, setData] = useState(null);

  const getCoinData = async _ => {
    try {
      const response = await axios.get(`https://api.bitso.com/v3/ticker/?book`);
      setData(response.data.payload);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (coinsData === null) {
      getCoinData()
    }
    setTimeout(getCoinData, 5000);
  }, [coinsData]);


  return (
    <div>
      <Header
        title="LiveCoinLat"
        userName="Usuario"
      />
      <CoinstTable coinsData={coinsData} />
    </div>
  );
}

export default App;
