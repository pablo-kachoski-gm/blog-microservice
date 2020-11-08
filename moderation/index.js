const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const app = express();
app.use(bodyParser.json());
const CommentStatus = {
  rejected: "Rejected",
  approved: "Approved",
};
app.post("/events", async (req, res) => {
  const { type, data } = req.body;
  if (type === "CommentCreated") {
    const status = data.content.includes("orange")
      ? CommentStatus.rejected
      : CommentStatus.approved;
    const { id, postId, content } = data;
    const body = {
      type: "CommentModerated",
      data: { id, postId, content, status },
    };
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    try {
      await fetch("http://localhost:4005/events", params);
    } catch (error) {
      console.log(error);
    }
  }
  res.status(200).send();
});

app.listen(4003, () => {
  console.log("Listening on 4003");
});
