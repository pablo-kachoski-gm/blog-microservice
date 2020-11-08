import data from "posts/data/posts";

const getPost = ({ id }) => {
  return data[id];
};

export default getPost;
