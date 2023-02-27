const express = require("express");
const cors = require("cors");
const app = express();
const connect = require("./config/db");
const router = require("./router/router");
const env = require('dotenv')


connect();
// port
env.config()
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());

// api routers
app.use("/api", router);

// server running
app.listen(PORT, () => {
  console.log("********* server running on port 5000 *********");
});