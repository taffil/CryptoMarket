import React, { useState, useEffect } from "react";
import axios from "axios";

import "./CryptoCurrencies.css";

function CryptoCurrencies() {
  let url =
    "https://pro-api.coinmarketcap.com" +
    "/v1/cryptocurrency/listings/latest" +
    "?CMC_PRO_API_KEY=" +
    "90367cf3-777f-4541-81a9-2fd2b6e4acd5" +
    "&start=1&limit=30&convert=EUR";

  const [crypto, setCrypto] = useState(null);

  let content = null;
  useEffect(() => {
    axios.get(url).then((response) => {
      setCrypto(response.data.data);
      console.log(response.data.data);
    });
  }, [url]);

  //   function update() {
  //     axios.get(url).then((response) => {
  //       setCrypto(response.data.data);

  //       //loged data
  //       console.log(response);
  //     });
  //   }
  //   setTimeout(update(), 30000);

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
              <th>Last hour</th>
              <th>Last 24h</th>
              <th>Market cap</th>
              <th>Last 7d</th>
            </tr>
          </thead>
          <tbody>
            
            {crypto.map((currency) => {
              //destructuring
              let {
                id,
                name,
                symbol,
                cmc_rank: rank,
                quote: {
                  EUR: {
                    price,
                    percent_change_1h: change_1h,
                    percent_change_24h: change_24h,
                    market_cap,
                  },
                },
              } = currency;

              return (
                <tr key={id}>
                  <td>{rank}</td>
                  <td>{symbol}</td>
                  <td>{name}</td>
                  <td>€ {price.toFixed(3)}</td>
                  <td style={{ color: `${color(change_1h)}` }}>
                    {change_1h.toFixed(3)}%
                  </td>
                  <td style={{ color: `${color(change_24h)}` }}>
                    {change_24h.toFixed(3)}%
                  </td>
                  <td>€ {market_cap}</td>
                  <td>{`<chart>`}</td>
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
