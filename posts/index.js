import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import deletePost from "posts/services/delete-post";
import savePost from "posts/services/save-post";
import getPosts from "posts/services/get-posts";
import getPost from "posts/services/get-post";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/api/posts/:postId", (req, res) => {
  try {
    const id = req.params.postId;
    const post = getPost({ id });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).send({
      error: "An unexpected error ocurred. Please contact the administrator",
    });
  }
});
app.get("/api/posts", (_, res) => {
  try {
    const posts = getPosts();
    res.status(200).json({ list: posts });
  } catch (error) {
    res.status(500).send({
      error: "An unexpected error ocurred. Please contact the administrator",
    });
  }
});

app.delete("/api/posts/:postId/delete", (req, res) => {
  try {
    const id = req.params.postId;
    deletePost({ id });
    res.status(204).send();
  } catch (error) {
    res.status(500).send({
      error: "An unexpected error ocurred. Please contact the administrator",
    });
  }
});
app.post("/api/posts/create", async (req, res) => {
  try {
    const { title } = req.body;
    const newPost = savePost({ title });
    res.status(201).send(newPost);
  } catch (error) {
    res.status(500).send({
      error: "An unexpected error ocurred. Please contact the administrator",
    });
  }
});
app.post("/api/events", (req, res) => {
  res.status(200).send();
});
app.listen(4000, () => {
  console.log("Listening on port: 4000");
});
