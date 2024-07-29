import React, { useEffect, useState } from 'react';
import logo from '../images/download.png';
import axios from 'axios';

function Currency() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState();
  const [currencyList, setCurrencyList] = useState([]);

  useEffect(() => {
    const getCurrency = async () => {
      try {
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        setExchangeRate(response.data.rates[toCurrency]);
        setCurrencyList(Object.keys(response.data.rates));
      } catch (error) {
        console.log(error);
      }
    };

    getCurrency();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (exchangeRate !== null) {
      setConvertedAmount((amount * exchangeRate).toFixed(2));
    }
  }, [amount, exchangeRate]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'amount') {
      setAmount(value);
    }
    if (name === 'fromCurrency') {
      setFromCurrency(value);
    }
    if (name === 'toCurrency') {
      setToCurrency(value);
    }
  };

  return (
    <>
      <div className="main-container">
        <img src={logo} width={100} alt="Logo" />
        <div className="inputbox">
          <div className="input-wrapper">
            <label htmlFor="amount">Amount:</label>
            <input type="text" name="amount" value={amount} onChange={handleInputChange} id="amount" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="fromCurrency">From Currency:</label>
            <select name="fromCurrency" value={fromCurrency} onChange={handleInputChange} id="fromCurrency">
              {currencyList.map((currency) => (
                <option key={currency} value={currency}>{currency}</option>
              ))}
            </select>
          </div>
          <div className="input-wrapper">
            <label htmlFor="toCurrency">To Currency:</label>
            <select name="toCurrency" value={toCurrency} onChange={handleInputChange} id="toCurrency">
              {currencyList.map((currency) => (
                <option key={currency} value={currency}>{currency}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="result">
          <label htmlFor="convertedAmount">Converted Amount:</label>
          <input type="text" name="convertedAmount" value={convertedAmount || ''} readOnly id="convertedAmount" />
        </div>
      </div>
    </>
  );
}

export default Currency;
