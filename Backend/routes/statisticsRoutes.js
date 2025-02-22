const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");

router.get("/statistics", async (req, res) => {
  const { month } = req.query;

  try {
    const monthNumber = new Date(Date.parse(`${month} 1, 2023`)).getMonth() + 1;

    // ✅ Get all transactions for the selected month
    const transactions = await Transaction.find({
      $expr: {
        $eq: [{ $month: "$dateOfSale" }, monthNumber]
      }
    });

    // ✅ Calculate statistics
    const totalSales = transactions.reduce((sum, t) => sum + t.price, 0);
    const soldItems = transactions.filter((t) => t.sold).length;
    const notSoldItems = transactions.length - soldItems;

    res.json({ totalSales, soldItems, notSoldItems });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
