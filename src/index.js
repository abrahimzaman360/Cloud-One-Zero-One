const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("Hello World!");
});

app.get("/crash", (req, res) => {
  process.exit(1);
});
