import React, { useState, useEffect } from "react";
import axios from "axios";

import "./CryptoCurrencies.css";

function CryptoCurrencies() {
  let url =
    "https://api.coingecko.com/api/v3/coins/markets" +
    "?vs_currency=eur&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d";

  const [crypto, setCrypto] = useState(null);

  let content = null;
  useEffect(() => {
    axios.get(url).then((response) => {
      setCrypto(response.data);
      // console.log(response.data);
    });
  }, [url]);

  function update() {
    axios.get(url).then((response) => {
      setCrypto(response.data);

      //loged data
      console.log(response.data);
    });
  }
  setTimeout(update, 30000);

  if (crypto) {
    function color(props) {
      if (props > 0) {
        props = "rgb(14, 203, 129)";
      } else {
        props = "rgb(246, 70, 93)";
      }
      return props;
    }

    content = (
      <div className="crypto">
        <table className="table">
          <thead className="thead">
            <tr className="thead_row">
              <th>#</th>
              <th></th>
              <th style={{ textAlign: "left" }}>Name</th>
              <th style={{ textAlign: "right" }}>Price in EUR</th>
              <th>Last 24h</th>
              <th>Market cap</th>
            </tr>
          </thead>
          <tbody>
            {crypto.map((currency) => {
              
              //destructuring
              let {
                name,
                symbol,
                image,
                current_price: price,
                market_cap,
                market_cap_rank: rank,
                price_change_percentage_24h: change_24h,
              } = currency;

              //formating currency
              const formatter = new Intl.NumberFormat( 'en', {
                style: 'currency',
                currency: 'EUR',
                notation: 'compact'
              })
              return (
                <tr key={rank}>
                  <td>
                    <img src={image} alt=""></img>
                  </td>
                  <td>{symbol}</td>
                  <td>{name}</td>
                  <td>€ {price}</td>
                  <td style={{ color: `${color(change_24h)}` }}>
                    {change_24h}%
                  </td>
                  <td>{formatter.format(market_cap)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default CryptoCurrencies;
