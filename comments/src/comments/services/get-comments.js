import data from "comments/data/comments";

const getComments = () => {
  return data[postId] || [];
};

export default getComments;
