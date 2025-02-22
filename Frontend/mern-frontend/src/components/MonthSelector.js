import React from "react";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const MonthSelector = ({ selectedMonth, setSelectedMonth }) => {
  return (
    <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
      {months.map((month) => (
        <option key={month} value={month}>{month}</option>
      ))}
    </select>
  );
};

export default MonthSelector;
