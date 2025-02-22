import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Transactions from "../components/Transactions";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import "../styles/Dashboard.css";
import "../styles/chart.css"; // ✅ Import updated styles

const Dashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState("January");

  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar setSelectedMonth={setSelectedMonth} />
        
        <h2>Statistics for {selectedMonth}</h2>

        {/* 📊 Charts in a row */}
        <div className="charts-container">
          <div className="chart">
            <h3>Price Distribution</h3>
            <BarChart selectedMonth={selectedMonth} />
          </div>
          <div className="chart">
            <h3>Category Breakdown</h3>
            <PieChart selectedMonth={selectedMonth} />
          </div>
        </div>

        {/* Transactions Table */}
        <Transactions selectedMonth={selectedMonth} />
      </div>
    </div>
  );
};

export default Dashboard;
