const express = require("express");
const cors = require("cors");
const articlesData = require("./articles.json");
const app = express();
const port = 3333;

app.use(cors());

app.get("/articles", (req, res) => {
  console.log("Get articles list");

  res.type("json");
  res.json(articlesData);
});

app.get("/articles/:id", (req, res) => {
  console.log("Get articles by id: " + req.params.id);

  const id = +req.params.id;
  const article = articlesData.find((el) => +el.id === id);

  res.type("json");
  res.json(article);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
