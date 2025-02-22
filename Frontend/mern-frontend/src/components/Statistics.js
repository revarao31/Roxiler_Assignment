import React, { useEffect, useState } from "react";
import axios from "axios";

const Statistics = ({ selectedMonth }) => {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(`/api/statistics?month=${selectedMonth}`);
        if (!response.data || Object.keys(response.data).length === 0) {
          setError("No data available.");
          return;
        }
        setStats(response.data);
      } catch (err) {
        setError("Failed to fetch statistics.");
      }
    };

    fetchStats();
  }, [selectedMonth]);

  if (error) return <p>{error}</p>;
  if (!stats) return <p>Loading...</p>;

  return (
    <div>
      <h3>Statistics for {selectedMonth}</h3>
      <p>Total Sales: ${stats.totalSales}</p>
      <p>Sold Items: {stats.soldItems}</p>
      <p>Not Sold Items: {stats.notSoldItems}</p>
    </div>
  );
};

export default Statistics;
