const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");

// ✅ Bar Chart API
router.get("/bar-chart", async (req, res) => {
  const { month } = req.query;

  try {
    // ✅ Correct Date Filtering
    const transactions = await Transaction.find({
      $expr: {
        $eq: [{ $month: "$dateOfSale" }, new Date(`${month} 1, 2023`).getMonth() + 1]
      }
    });

    const priceRanges = {
      "0-100": 0, "101-200": 0, "201-300": 0, "301-400": 0, "401-500": 0,
      "501-600": 0, "601-700": 0, "701-800": 0, "801-900": 0, "901+": 0
    };

    transactions.forEach(({ price }) => {
      if (price <= 100) priceRanges["0-100"]++;
      else if (price <= 200) priceRanges["101-200"]++;
      else if (price <= 300) priceRanges["201-300"]++;
      else if (price <= 400) priceRanges["301-400"]++;
      else if (price <= 500) priceRanges["401-500"]++;
      else priceRanges["901+"]++;
    });

    res.json(priceRanges);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Pie Chart API
router.get("/pie-chart", async (req, res) => {
  const { month } = req.query;

  try {
    // ✅ Correct Date Filtering
    const transactions = await Transaction.find({
      $expr: {
        $eq: [{ $month: "$dateOfSale" }, new Date(`${month} 1, 2023`).getMonth() + 1]
      }
    });

    const categories = {};
    transactions.forEach(({ category }) => {
      if (category) {
        categories[category] = (categories[category] || 0) + 1;
      }
    });

    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
