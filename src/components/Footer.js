import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <span className="github item">
          Find an issue with this page?{" "}
          <a href="https://github.com/taffil/Code" style={{ color: "#498afb" }}>
            Fix it on GitHub
          </a>
        </span>
        <hr />
        <span className="copyright item"> Copyright © 2021 Crypto Market</span>
        <br />
        <span className="react item">
          Created by{" "}
          <a href="https://github.com/taffil" style={{ color: "#498afb" }}>
            taffil{" "}
          </a>{" "}
          with <img src="logo192.png" alt="" style={{ width: "20px" }} />{" "}
        </span>
        <hr />
      </section>
    </div>
  );
};

export default Footer;
