const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 5900;

const app = express();

app.use(bodyparser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: `Server! is runnning on port ${port}` });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
