const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.post("/api/addToCart", function (req, res) {
  res.send(require("./addToCart/index.post.json"));
});

app.get("/api/banners", function (req, res) {
  res.send(require("./banners/index.get.json"));
});

app.get("/api/categories", function (req, res) {
  res.send(require("./categories/index.get.json"));
});

app.get("/api/products", function (req, res) {
  res.send(require("./products/index.get.json"));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
