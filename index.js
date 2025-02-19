require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("SoloSphere Server Side is Running");
});

app.listen(port, () => {
  console.log(`SoloSphere Server is Running on Port: ${port}`);
});
