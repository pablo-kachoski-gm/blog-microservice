import data from "comments/data/comments";

const deletePostComments = ({ postId }) => {
  delete data[postId];
};

export default deletePostComments;
