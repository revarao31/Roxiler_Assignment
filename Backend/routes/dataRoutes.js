const express = require("express");
const axios = require("axios");
const Transaction = require("../models/Transaction");

const router = express.Router();

router.get("/initialize", async (req, res) => {
  try {
    const response = await axios.get("https://s3.amazonaws.com/roxiler.com/product_transaction.json");
    
    // ✅ Convert `dateOfSale` from String to Date
    const transactions = response.data.map(t => ({
      ...t,
      dateOfSale: new Date(t.dateOfSale) 
    }));

    await Transaction.deleteMany({});
    await Transaction.insertMany(transactions);
    res.json({ message: "✅ Database initialized successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
