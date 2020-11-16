import express from "express";
import bodyParser from "body-parser";
import fetch from "node-fetch";
import saveEvent from "events/services/save-event";
import getEvents from "events/services/get-events";

const app = express();
app.use(bodyParser.json());

app.post("/api/events", async (req, res) => {
  const event = req.body;
  console.log(event.type);
  saveEvent({ event });

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  };
  try {
    await fetch("http://posts-clusterip-srv:4000/api/events", params);
  } catch (error) {
    console.log(error);
  }
  try {
    await fetch("http://comments-srv:4001/api/events", params);
  } catch (error) {
    console.log(error);
  }
  try {
    await fetch("http://query-srv:4002/api/events", params);
  } catch (error) {
    console.log(error);
  }
  try {
    await fetch("http://moderation-srv:4003/api/events", params);
  } catch (error) {
    console.log(error);
  }
  res.status(200).send();
});

app.get("/api/events", async (_, res) => {
  const events = getEvents();
  res.status(200).json({ list: events });
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
