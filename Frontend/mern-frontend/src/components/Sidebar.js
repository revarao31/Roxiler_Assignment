import React from "react";
import "../styles/Sidebar.css";

const Sidebar = ({ setSelectedMonth }) => {
  // ✅ Now includes all 12 months
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <aside className="sidebar">
      <h2>Filter by Month</h2>
      <select onChange={(e) => setSelectedMonth(e.target.value)}>
        {months.map((month) => (
          <option key={month} value={month}>{month}</option>
        ))}
      </select>
    </aside>
  );
};

export default Sidebar;
