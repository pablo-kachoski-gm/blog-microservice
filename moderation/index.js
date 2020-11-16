import express from "express";
import bodyParser from "body-parser";
import commentModeration from "moderation/services/comment-moderation";

const app = express();
app.use(bodyParser.json());

app.post("/api/events", async (req, res) => {
  try {
    const {
      type,
      data: { id, postId, content },
    } = req.body;
    commentModeration({ type, id, postId, content });
    res.status(200).send();
  } catch (error) {
    res.status(500).send({
      error: "An unexpected error ocurred. Please contact the administrator",
    });
  }
});

app.listen(4003, () => {
  console.log("Listening on 4003");
});
