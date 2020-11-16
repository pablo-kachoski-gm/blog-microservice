import { API_BASE_URL } from "comments/constants/env";

const createComment = async ({ postId, content }) => {
  const params = {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content }),
  };
  const response = await fetch(
    `${API_BASE_URL}/posts/${postId}/comments/create`,
    params
  );
  if (!response.ok) {
    throw Error(response);
  }
  return response;
};
export default createComment;
