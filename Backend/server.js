const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/data", require("./routes/dataRoutes"));
app.use("/api", require("./routes/transactionRoutes"));
app.use("/api", require("./routes/chartRoutes"));
app.use("/api", require("./routes/statisticsRoutes"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
