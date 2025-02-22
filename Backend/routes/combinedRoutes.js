const express = require("express");
const router = express.Router(); // ✅ Define router
const Transaction = require("../models/Transaction");

// ✅ Combined Data API
router.get("/combined-data", async (req, res) => {
  const { month } = req.query;
  const transactions = await Transaction.find({ dateOfSale: { $regex: `-${month}-`, $options: "i" } });

  // Calculate statistics
  const totalSale = transactions.reduce((sum, t) => sum + t.price, 0);
  const soldItems = transactions.filter(t => t.sold).length;
  const notSoldItems = transactions.length - soldItems;

  // Prepare category data
  const categories = {};
  transactions.forEach(({ category }) => {
    categories[category] = (categories[category] || 0) + 1;
  });

  // Send response
  res.json({ totalSale, soldItems, notSoldItems, categories });
});

// ✅ Export the router
module.exports = router;
