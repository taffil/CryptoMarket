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
    console.log(color());

    content = (
      <div className="main">
        <table className="table">
          <thead className="thead">
            <tr className="thead_row">
              <th>Name</th>
              <th>Price in EUR</th>
              <th>Change in 1h</th>
              <th>
                Last Updated{" "}
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
            <tr>
              <td>{crypto[0].name}</td>
              <td>€ {crypto[0].quote.EUR.price.toFixed(3)}</td>
              <td
                style={{
                  color: `${color(
                    crypto[0].quote.EUR.percent_change_1h.toFixed(2)
                  )}`,
                }}
              >
                {crypto[0].quote.EUR.percent_change_1h.toFixed(2)}%
              </td>
              <td>
                {crypto[0].last_updated.slice(11, 19) +
                  " " +
                  crypto[0].last_updated
                    .slice(0, 10)
                    .split("-")
                    .reverse()
                    .join("/")}
              </td>
            </tr>
            <tr>
              <td>{crypto[1].name}</td>
              <td>€ {crypto[1].quote.EUR.price.toFixed(3)}</td>
              <td
                style={{
                  color: `${color(
                    crypto[1].quote.EUR.percent_change_1h.toFixed(2)
                  )}`,
                }}
              >
                {crypto[1].quote.EUR.percent_change_1h.toFixed(2)}%
              </td>
              <td>
                {crypto[1].last_updated.slice(11, 19)}{" "}
                {crypto[1].last_updated
                  .slice(0, 10)
                  .split("-")
                  .reverse()
                  .join("/")}
              </td>
            </tr>
            <tr>
              <td>{crypto[2].name}</td>
              <td>€ {crypto[2].quote.EUR.price.toFixed(3)}</td>
              <td
                style={{
                  color: `${color(
                    crypto[2].quote.EUR.percent_change_1h.toFixed(2)
                  )}`,
                }}
              >
                {crypto[2].quote.EUR.percent_change_1h.toFixed(2)}%
              </td>
              <td>
                {crypto[2].last_updated.slice(11, 19)}{" "}
                {crypto[2].last_updated
                  .slice(0, 10)
                  .split("-")
                  .reverse()
                  .join("/")}
              </td>
            </tr>
            <tr>
              <td>{crypto[3].name}</td>
              <td>€ {crypto[3].quote.EUR.price.toFixed(3)}</td>
              <td
                style={{
                  color: `${color(
                    crypto[3].quote.EUR.percent_change_1h.toFixed(2)
                  )}`,
                }}
              >
                {crypto[3].quote.EUR.percent_change_1h.toFixed(2)}%
              </td>
              <td>
                {crypto[3].last_updated.slice(11, 19)}{" "}
                {crypto[3].last_updated
                  .slice(0, 10)
                  .split("-")
                  .reverse()
                  .join("/")}
              </td>
            </tr>
            <tr>
              <td>{crypto[4].name}</td>
              <td>€ {crypto[4].quote.EUR.price.toFixed(3)}</td>
              <td
                style={{
                  color: `${color(
                    crypto[4].quote.EUR.percent_change_1h.toFixed(2)
                  )}`,
                }}
              >
                {crypto[4].quote.EUR.percent_change_1h.toFixed(2)}%
              </td>
              <td>
                {crypto[4].last_updated.slice(11, 19)}{" "}
                {crypto[4].last_updated
                  .slice(0, 10)
                  .split("-")
                  .reverse()
                  .join("/")}
              </td>
            </tr>
            <tr>
              <td>{crypto[5].name}</td>
              <td>€ {crypto[5].quote.EUR.price.toFixed(3)}</td>
              <td
                style={{
                  color: `${color(
                    crypto[5].quote.EUR.percent_change_1h.toFixed(2)
                  )}`,
                }}
              >
                {crypto[5].quote.EUR.percent_change_1h.toFixed(2)}%
              </td>
              <td>
                {crypto[5].last_updated.slice(11, 19)}{" "}
                {crypto[5].last_updated
                  .slice(0, 10)
                  .split("-")
                  .reverse()
                  .join("/")}
              </td>
            </tr>
            <tr>
              <td>{crypto[6].name}</td>
              <td>€ {crypto[6].quote.EUR.price.toFixed(3)}</td>
              <td
                style={{
                  color: `${color(
                    crypto[6].quote.EUR.percent_change_1h.toFixed(2)
                  )}`,
                }}
              >
                {crypto[6].quote.EUR.percent_change_1h.toFixed(2)}%
              </td>
              <td>
                {crypto[6].last_updated.slice(11, 19)}{" "}
                {crypto[6].last_updated
                  .slice(0, 10)
                  .split("-")
                  .reverse()
                  .join("/")}
              </td>
            </tr>
            <tr>
              <td>{crypto[7].name}</td>
              <td>€ {crypto[7].quote.EUR.price.toFixed(3)}</td>
              <td
                style={{
                  color: `${color(
                    crypto[7].quote.EUR.percent_change_1h.toFixed(2)
                  )}`,
                }}
              >
                {crypto[7].quote.EUR.percent_change_1h.toFixed(2)}%
              </td>
              <td>
                {crypto[7].last_updated.slice(11, 19)}{" "}
                {crypto[7].last_updated
                  .slice(0, 10)
                  .split("-")
                  .reverse()
                  .join("/")}
              </td>
            </tr>
            <tr>
              <td>{crypto[8].name}</td>
              <td>€ {crypto[8].quote.EUR.price.toFixed(3)}</td>
              <td
                style={{
                  color: `${color(
                    crypto[8].quote.EUR.percent_change_1h.toFixed(2)
                  )}`,
                }}
              >
                {crypto[8].quote.EUR.percent_change_1h.toFixed(2)}%
              </td>
              <td>
                {crypto[8].last_updated.slice(11, 19)}{" "}
                {crypto[8].last_updated
                  .slice(0, 10)
                  .split("-")
                  .reverse()
                  .join("/")}
              </td>
            </tr>
            <tr>
              <td>{crypto[9].name}</td>
              <td>€ {crypto[9].quote.EUR.price.toFixed(3)}</td>
              <td
                style={{
                  color: `${color(
                    crypto[9].quote.EUR.percent_change_1h.toFixed(2)
                  )}`,
                }}
              >
                {crypto[9].quote.EUR.percent_change_1h.toFixed(2)}%
              </td>
              <td>
                {crypto[9].last_updated.slice(11, 19)}{" "}
                {crypto[9].last_updated
                  .slice(0, 10)
                  .split("-")
                  .reverse()
                  .join("/")}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default CryptoCurrencies;
