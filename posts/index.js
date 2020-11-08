const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(bodyParser.json());
app.use(cors());
const posts = {};

app.get("/posts/:postId", (req, res) => {
  const id = req.params.postId;
  const foundPost = posts[id];
  res.status(200).json({ ...foundPost });
});
app.get("/posts", (_, res) => {
  res.status(200).json({ list: Object.values(posts) });
});

app.delete("/posts/:postId", (req, res) => {
  const id = req.params.postId;
  delete posts[id];
  res.status(204).send();
});
app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = { id, title };

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type: "PostCreated", data: { id, title } }),
  };
  await fetch("http://localhost:4005/events", params);
  res.status(201).send(posts[id]);
});
app.post("/events", (req, res) => {
  console.log("Received Event", req.body.type);
  res.status(200).send();
});
app.listen(4000, () => {
  console.log("Listening on port: 4000");
});
