const express = require("express");
const app = express();

app.use(express.json());

let messages = [];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/messages", (req, res) => {
  res.send(messages);
});

app.post("/messages", (req, res) => {
  console.log("hm", req.body);
  if (req.body.name && req.body.message) {
    messages.push({ name: req.body.name, message: req.body.message });
    res.send().status(200);
  }
});

const port = process.env.PORT || 80;
app.listen(port, () => console.log(`Listening on port ${port}...`));
