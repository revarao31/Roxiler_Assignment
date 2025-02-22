import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import axios from "axios";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ selectedMonth }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getChartData = async () => {
      try {
        const response = await axios.get(`/api/bar-chart?month=${selectedMonth}`);
        const priceRanges = response.data;

        if (!priceRanges || Object.keys(priceRanges).every((key) => priceRanges[key] === 0)) {
          setError("No data available for this month.");
          return;
        }

        setData({
          labels: Object.keys(priceRanges),
          datasets: [{ label: "Price Ranges", data: Object.values(priceRanges), backgroundColor: "blue" }],
        });
      } catch (err) {
        setError("Failed to load chart data.");
      }
    };

    getChartData();
  }, [selectedMonth]);

  if (error) return <p>{error}</p>;
  if (!data) return <p>Loading...</p>;

  return <Bar data={data} />;
};

export default BarChart;
