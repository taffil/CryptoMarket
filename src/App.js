import React from "react";
import CryptoCurrencies from "./components/CryptoCurrencies";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="main">
      <CryptoCurrencies />
      <Footer />
    </div>
  );
}

export default App;
