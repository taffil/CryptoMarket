import React, { useState, useEffect } from "react";
import axios from "axios";

import "./CryptoCurrencies.css";

function CryptoCurrencies() {
  let url =
    "https://api.coingecko.com/api/v3/coins/markets" +
    "?vs_currency=eur&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d";

  const [crypto, setCrypto] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  let content = null;
  useEffect(() => {
    axios.get(url).then((response) => {
      setCrypto(response.data);
    });
  }, [url]);

  if (crypto) {
    function color(props) {
      if (props > 0) {
        props = "rgb(14, 203, 129)";
      } else {
        props = "rgb(246, 70, 93)";
      }
      return props;
    }

    function selectCurrency() {
      let selectedValue = document.querySelector("#currency").value;
      let priceSymbol = document.querySelector(".price");
      console.log(selectedValue);
      let url =
        "https://api.coingecko.com/api/v3/coins/markets" +
        `?vs_currency=${selectedValue}&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`;
      axios.get(url).then((response) => {
        setCrypto(response.data);
        console.log(response.data[0].current_price);
      });
      priceSymbol.innerHTML = `Prices in ${selectedValue.toUpperCase()}`;
      return url;
    }

    function update() {
      let selectedValue = document.querySelector("#currency").value;
      axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets" +
            `?vs_currency=${selectedValue}&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
        )
        .then((response) => {
          setCrypto(response.data);
          console.log(response.data[0].current_price);
        });
    }
    setTimeout(update, 33000);

    content = (
      <div className="crypto">
        <select id="currency" onChange={selectCurrency}>
          <option value="eur">EUR</option>
          <option value="usd">USD</option>
        </select>
        <input
          className="search"
          type="text"
          placeholder="&#128270;
          Search"
          autoComplete="off"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        ></input>
        <table className="table">
          <thead className="table_head">
            <tr className="table_head_row">
              <th className="icon">#</th>
              <th className="empty"></th>
              <th className="name" style={{ textAlign: "left" }}>
                Name
              </th>
              <th className="price" style={{ textAlign: "right" }}>
                Prices in EUR
              </th>
              <th className="last_24h">Last 24h</th>
              <th className="cap">Market cap</th>
              <th className="volume">Total Volume</th>
            </tr>
          </thead>
          <tbody className="table_body">
            {crypto
              .filter((val) =>
                val.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((currency) => {
                //destructuring
                let {
                  name,
                  symbol,
                  image,
                  current_price: price,
                  market_cap,
                  market_cap_rank: rank,
                  price_change_percentage_24h: change_24h,
                  total_volume: volume,
                } = currency;

                //formating currency
                const formatter = new Intl.NumberFormat("en", {
                  style: "decimal",
                  notation: "compact",
                });
                return (
                  <tr className="table_body_row" key={rank}>
                    <td className="icon_data">
                      <img src={image} alt=""></img>
                    </td>
                    <td className="symbol_data">{symbol.toUpperCase()}</td>
                    <td className="name_data">{name}</td>
                    <td className="price_data">{price}</td>
                    <td
                      className="last24h_data"
                      style={{ color: `${color(change_24h)}` }}
                    >
                      {change_24h}%
                    </td>
                    <td className="cap_data">{formatter.format(market_cap)}</td>
                    <td className="volume_data">{formatter.format(volume)}</td>
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
