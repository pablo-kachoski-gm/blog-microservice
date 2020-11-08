import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import updateComment from "./src/comments/services/update-comment";
import deleteComment from "./src/comments/services/delete-comment";
import saveComment from "./src/comments/services/save-comment";
import getComments from "./src/comments/services/get-comments";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/posts/:postId/comments", (_, res) => {
  try {
    const comments = getComments();
    res.status(200).json({ list: comments });
  } catch (error) {
    res.status(500).send({
      error: "An unexpected error ocurred. Please contact the administrator",
    });
  }
});

app.post("/posts/:postId/comments", (req, res) => {
  try {
    const postId = req.params.postId;
    const { content } = req.body;
    const newComment = saveComment({ postId, content });
    res.status(201).send(newComment);
  } catch (error) {
    res.status(500).send({
      error: "An unexpected error ocurred. Please contact the administrator",
    });
  }
});

app.delete("/posts/:postId/comments/:commentId", (req, res) => {
  try {
    const { postId, commentId } = req.params;
    deleteComment({ postId, commentId });
    res.status(204).send();
  } catch (error) {
    res.status(500).send({
      error: "An unexpected error ocurred. Please contact the administrator",
    });
  }
});
app.post("/events", async (req, res) => {
  try {
    const { type, data } = req.body;
    if (type === "CommentModerated") {
      const { postId, id, status } = data;
      updateComment({ id, postId, status });
    }
    res.status(200).send();
  } catch (error) {
    res.status(500).send({
      error: "An unexpected error ocurred. Please contact the administrator",
    });
  }
});
app.listen(4001, () => {
  console.log("Listening on port: 4001");
});
