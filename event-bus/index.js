import express from "express";
import bodyParser from "body-parser";
import fetch from "node-fetch";
import saveEvent from "events/services/save-event";
import getEvents from "events/services/get-events";

const app = express();
app.use(bodyParser.json());

app.post("/events", async (req, res) => {
  const event = req.body;
  saveEvent({ event });

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  };
  try {
    await fetch("http://localhost:4000/events", params);
  } catch (error) {
    console.log(error);
  }
  try {
    await fetch("http://localhost:4001/events", params);
  } catch (error) {
    console.log(error);
  }
  try {
    await fetch("http://localhost:4002/events", params);
  } catch (error) {
    console.log(error);
  }
  try {
    await fetch("http://localhost:4003/events", params);
  } catch (error) {
    console.log(error);
  }
  res.status(200).send();
});

app.get("/events", async (_, res) => {
  const events = getEvents();
  res.status(200).json({ list: events });
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
