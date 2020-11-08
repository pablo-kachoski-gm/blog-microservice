import data from "comments/data/comments";

const deleteComment = ({ postId, commentId }) => {
  if (!commentsByPostId[postId]) return;
  const comments = data[postId].filter((comment) => comment.id !== commentId);
  data[postId] = comments;
};

export default deleteComment;
