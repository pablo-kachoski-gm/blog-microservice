import data from "query/data/posts";

const updateComment = ({ id, content, postId, status }) => {
  const post = data[postId];
  const comment = post.comments.find((comment) => comment.id === id);
  comment.status = status;
  comment.content = content;
};

export default updateComment;
