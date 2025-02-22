const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");

router.get("/transactions", async (req, res) => {
  const { search, page = 1, perPage = 10, month } = req.query;

  let query = {};

  // ✅ Correct Date Filtering
  if (month) {
    query = {
      $expr: {
        $eq: [{ $month: "$dateOfSale" }, new Date(`${month} 1, 2023`).getMonth() + 1]
      }
    };
  }

  // ✅ Search Filter
  if (search) {
    query.$or = [
      { title: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
      { price: parseFloat(search) || 0 }
    ];
  }

  // ✅ Pagination
  const transactions = await Transaction.find(query)
    .skip((page - 1) * perPage)
    .limit(parseInt(perPage));

  res.json(transactions);
});

module.exports = router;
