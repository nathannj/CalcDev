const express = require("express");
const bodyParser = require("body-parser");
const service = require("./service");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

var jsonParser = bodyParser.json();

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

app.get("/status", (req, res) => {
  const status = {
    Status: "Running",
  };

  res.send(status);
});

app.post("/api/calculation", jsonParser, async (req, res) => {
  await service.addTest();
});

app.get("/api/calculation", async (req, res) => {
  const doc = await service.getTest();

  const result = {
    id: doc._id,
    name: doc.name,
    info: doc.info,
  };

  res.send(result);
});

function doMath(formula) {
  return "x";
}
