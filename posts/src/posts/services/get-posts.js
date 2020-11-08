import data from "posts/data/posts";

const getPosts = () => {
  return Object.values(data);
};

export default getPosts;
