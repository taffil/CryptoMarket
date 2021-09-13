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
            {crypto.map((value) => {
              return (
                <tr key={value.id}>
                  <td>{value.name}</td>
                  <td>€ {value.quote.EUR.price.toFixed(3)}</td>
                  <td
                    style={{
                      color: `${color(
                        value.quote.EUR.percent_change_1h.toFixed(3)
                      )}`,
                    }}
                  >
                    {value.quote.EUR.percent_change_1h.toFixed(3)}%
                  </td>
                  <td>
                    {value.last_updated.slice(11, 19) +
                      " " +
                      value.last_updated
                        .slice(0, 10)
                        .split("-")
                        .reverse()
                        .join("/")}
                  </td>
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
