import data from "query/data/posts";
const createPost = ({ id, title }) => {
  const newPost = { id, title, comments: [] };
  data[id] = newPost;
};

export default createPost;
