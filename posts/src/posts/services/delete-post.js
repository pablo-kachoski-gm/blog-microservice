import data from "posts/data/posts";

const deletePost = ({ id }) => {
  delete data[id];
};

export default deletePost;
