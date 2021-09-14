import React, { useState, useEffect } from "react";
import axios from "axios";

import "./CryptoCurrencies.css";

function CryptoCurrencies() {
  let url =
    "https://pro-api.coinmarketcap.com" +
    "/v1/cryptocurrency/listings/latest" +
    "?CMC_PRO_API_KEY=" +
    "90367cf3-777f-4541-81a9-2fd2b6e4acd5" +
    "&start=1&limit=10&convert=EUR";

  const [crypto, setCrypto] = useState(null);

  let content = null;
  useEffect(() => {
    axios.get(url).then((response) => {
      setCrypto(response.data.data);

      //loged data
      console.log(response.data.data);
    });
  }, [url]);

  function update() {
    axios.get(url).then((response) => {
      setCrypto(response.data.data);
    });
  }
  if (crypto) {
    function color(props) {
      if (props > 0) {
        props = "green";
      } else {
        props = "red";
      }
      return props;
    }
    content = (
      <div className="main">
        <table className="table">
          <thead className="thead">
            <tr className="thead_row">
              <th>Name</th>
              <th>Price in EUR</th>
              <th>Change in 1h</th>
              <th>Change in 24h</th>
              <th>
                Last Updated
                <button
                  style={{ float: "right" }}
                  className="btn"
                  onClick={update}
                >
                  Refresh
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {crypto.map((currency) => {
              let id = currency.id;
              let name = currency.name;
              let price = currency.quote.EUR.price.toFixed(3);
              let change_1h = currency.quote.EUR.percent_change_1h.toFixed(3);
              let change_24h = currency.quote.EUR.percent_change_24h.toFixed(3);
              let last_updated =
                currency.last_updated.slice(11, 19) +
                " " +
                currency.last_updated
                  .slice(0, 10)
                  .split("-")
                  .reverse()
                  .join("/");

              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>€ {price}</td>
                  <td style={{ color: `${color(change_1h)}` }}>{change_1h}%</td>
                  <td style={{ color: `${color(change_24h)}` }}>
                    {change_24h}%
                  </td>
                  <td>{last_updated}</td>
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
