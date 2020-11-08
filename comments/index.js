import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import updateComment from "comments/services/update-comment";
import deleteComment from "comments/services/delete-comment";
import saveComment from "comments/services/save-comment";
import getComments from "comments/services/get-comments";
import deletePostComments from "comments/services/delete-post-comments";

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
    if (type === "PostDeleted") {
      const { id } = data;
      deletePostComments({ id });
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
