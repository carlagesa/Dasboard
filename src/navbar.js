import React from "react";
import "../src/style.css";
import Pro from "./pro-rocket.png";

export default function Navbar() {
  return (
    <div className="link-container">
      <nav>
        <ul className="links">
          <li className="page-links">Dashboard</li>
          <li className="page-links">Products</li>
          <li className="page-links">Transaction</li>
          <li className="page-links">Overview</li>
          <li className="page-links">Customer</li>
          <li className="page-links">Message</li>
          <li className="page-links">Setting</li>
        </ul>
        <div className="Pro-features">
<img className="rocket-img" src={Pro}/>
<button className="pro-button">Upgrade Now</button>

        </div>


      </nav>
    </div>
  );
}
