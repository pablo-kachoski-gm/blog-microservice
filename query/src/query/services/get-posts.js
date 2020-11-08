import data from "query/data/posts";
const getPosts = () => {
  return Object.values(data);
};

export default getPosts;
