import { API_BASE_URL } from "comments/constants/env";

const deleteComment = async ({ postId, commentId }) => {
  const params = {
    method: "DELETE",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${API_BASE_URL}/posts/${postId}/comments/${commentId}`, params);
  if (!response.ok) {
    throw Error(response);
  }
  return response;
};
export default deleteComment;
