import data from "query/data/posts";
const deletePostComment = ({ id, postId }) => {
  const post = data[postId];
  data[postId].comments = post.comments.filter((comment) => comment.id !== id);
};

export default deletePostComment;
