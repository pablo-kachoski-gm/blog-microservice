import data from "query/data/posts";

const createComment = ({ id, content, postId, status }) => {
  if (!data[postId]) {
    data[postId] = { id: postId, title: "", comments: [] };
  }
  const post = data[postId];
  post.comments.push({ id, content, status });
  data[postId] = { ...post };
};

export default createComment;
