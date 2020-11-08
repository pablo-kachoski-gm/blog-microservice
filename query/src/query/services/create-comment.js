import data from "query/data/posts";

const createComment = ({ id, content, postId, status }) => {
  const post = data[postId];
  post.comments.push({ id, content, status });
};

export default createComment;
