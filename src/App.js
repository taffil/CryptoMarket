import "./App.css";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
import CryptoCurrencies from "./components/CryptoCurrencies";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="main">
      <CryptoCurrencies />
      <Footer />
    </div>
  );
}

export default App;
