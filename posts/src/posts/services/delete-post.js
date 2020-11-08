import data from "posts/data/posts";
import createEventAPI from "events/api/create-event";

const deletePost = async ({ id }) => {
  delete data[id];
  const body = { type: "PostDeleted", data: { id } };
  await createEventAPI({ body });
};

export default deletePost;
