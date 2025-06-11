const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;
const HOSTNAME = "127.0.0.1";

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.listen(PORT, HOSTNAME, () => {
  console.log(`App is listening on http://${HOSTNAME}:${PORT}`);
});
