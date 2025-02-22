import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import axios from "axios";

Chart.register(ArcElement, Tooltip, Legend);

const PieChart = ({ selectedMonth }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getChartData = async () => {
      try {
        const response = await axios.get(`/api/pie-chart?month=${selectedMonth}`);
        const categories = response.data;

        if (!categories || Object.keys(categories).length === 0) {
          setError("No data available.");
          return;
        }

        setData({
          labels: Object.keys(categories),
          datasets: [{ data: Object.values(categories), backgroundColor: ["#e84e4e", "blue", "#1ac757d7", "yellow"] }]
        });
      } catch (err) {
        setError("Failed to load chart data.");
      }
    };

    getChartData();
  }, [selectedMonth]);

  if (error) return <p>{error}</p>;
  if (!data) return <p>Loading...</p>;

  return <Pie data={data} />;
};

export default PieChart;
