import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <span className="github">
          Find an issue with this page?{" "}
          <a
            href="https://github.com/taffil/CryptoMarket"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#498afb" }}
          >
            Fix it on GitHub
          </a>
        </span>
        <hr />
        <span className="copyright"> Copyright © 2021 Crypto Market</span>
        <span className="react">
          Created by{" "}
          <a
            href="https://github.com/taffil"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#498afb" }}
          >
            taffil{" "}
          </a>{" "}
          with <img src="logo192.png" alt="" style={{ width: "35px" }} />{" "}
        </span>
      </section>
    </div>
  );
};

export default Footer;
