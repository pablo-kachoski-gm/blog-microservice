import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import handleEvents from "events/services/handle-events";
import getPost from "query/services/get-post";
import getPosts from "query/services/get-posts";
import initializeQuery from "query/services/initialize-query";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/posts", (_, res) => {
  try {
    const posts = getPosts();
    res.status(200).json({ list: posts });
  } catch (error) {
    res.status(500).send({
      error: "An unexpected error ocurred. Please contact the administrator",
    });
  }
});
app.get("/posts/:postId", (req, res) => {
  try {
    const id = req.params.postId;
    const post = getPost({ postId: id });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).send({
      error: "An unexpected error ocurred. Please contact the administrator",
    });
  }
});
app.post("/events", (req, res) => {
  try {
    const { type, data } = req.body;
    handleEvents({ type, data });
    res.status(200).send();
  } catch (error) {
    res.status(500).send({
      error: "An unexpected error ocurred. Please contact the administrator",
    });
  }
});

app.listen(4002, () => {
  try {
    initializeQuery();
  } catch (error) {
    console.log("Error loading events.", error);
  }
  console.log("Listening on 4002");
});
