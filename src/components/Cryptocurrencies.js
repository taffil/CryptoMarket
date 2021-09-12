import React, { useState, useEffect } from "react";
import axios from "axios";

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
    });
  }, [url]);

  function update() {
    axios.get(url).then((response) => {
      setCrypto(response.data.data);
    });
  }

  if (crypto) {
    content = (
      <div>
        <p>{crypto[0].name + " Price in EUR " + crypto[0].quote.EUR.price}</p>
        <p>{crypto[1].name + " Price in EUR " + crypto[1].quote.EUR.price}</p>
        <p>{crypto[2].name + " Price in EUR " + crypto[2].quote.EUR.price}</p>
        <p>{crypto[4].name + " Price in EUR " + crypto[4].quote.EUR.price}</p>
        <p>{crypto[5].name + " Price in EUR " + crypto[5].quote.EUR.price}</p>
        <p>{crypto[6].name + " Price in EUR " + crypto[6].quote.EUR.price}</p>
        <p>{crypto[7].name + " Price in EUR " + crypto[7].quote.EUR.price}</p>
        <p>{crypto[8].name + " Price in EUR " + crypto[8].quote.EUR.price}</p>
        <p>{crypto[9].name + " Price in EUR " + crypto[9].quote.EUR.price}</p>
        <button onClick={update}>refresh</button>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default CryptoCurrencies;
