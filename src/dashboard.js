import React from "react";
import "../src/style.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h3 className="dash-text">Dashboard</h3>
      <p className="date">22-05-2022</p>
      <input className="search" type="search" placeholder="Search.."></input>

      <div className="totals">
        <div className="total-sales"></div>
        <div className="total-expenses"></div>
        <div className="total-revenue"></div>
      </div>
    </div>
  );
}
