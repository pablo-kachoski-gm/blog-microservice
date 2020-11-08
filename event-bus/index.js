const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const app = express();
app.use(bodyParser.json());

app.post("/events", (req, res) => {
  const event = req.body;
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  };
  try {
    fetch("http://localhost:4000/events", params);
  } catch (error) {
    console.log(error);
  }
  try {
    fetch("http://localhost:4001/events", params);
  } catch (error) {
    console.log(error);
  }
  try {
    fetch("http://localhost:4002/events", params);
  } catch (error) {
    console.log(error);
  }
  try {
    fetch("http://localhost:4003/events", params);
  } catch (error) {
    console.log(error);
  }

  res.status(200).send();
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
