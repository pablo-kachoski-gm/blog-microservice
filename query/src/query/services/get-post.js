import data from "query/data/posts";
const getPost = ({ postId }) => {
  return data[postId];
};

export default getPost;
