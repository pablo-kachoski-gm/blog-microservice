import data from "posts/data/posts";
import { randomBytes } from "crypto";
import createEventAPI from "events/api/create-event";

const savePost = async ({ title }) => {
  const id = randomBytes(4).toString("hex");
  const newPost = { id, title };
  data[id] = newPost;
  const body = { type: "PostCreated", data: newPost };
  await createEventAPI({ body });
  return newPost;
};

export default savePost;
