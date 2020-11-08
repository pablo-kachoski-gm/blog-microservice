import data from "posts/data/posts";
import { randomBytes } from "crypto";
import createEventAPI from "events/api/create-event";

const savePost = async ({ title }) => {
  const id = randomBytes(4).toString("hex");
  data[id] = { id, title };
  const body = { type: "PostCreated", data: { id, title } };
  await createEventAPI({ body });
  return newPost;
};

export default savePost;
