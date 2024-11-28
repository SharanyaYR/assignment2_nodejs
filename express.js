const express = require("express");
const path = require("path");
var bodyparser = require("body-parser");
const app = express();
const port = process.env.PORT || 8080;


app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.json());


// STEP 2

app.get("/users/:id", (req, res) => {
  res.send({
    id: req.params.id,
    path: "/users/" + req.params.id,
  });
});

// STEP 3

app.post("/data", (req, res) => {
  const { name, age } = req.body;
  res.send([name, age]);
});

// STEP 1
app.listen(port, () => {
  console.log(`Ready listening on ${port}`);
});