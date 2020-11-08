import data from "query/data/posts";
const deletePost = ({ id }) => {
  delete data[id];
};

export default deletePost;
