import { API_BASE_URL } from "posts/constants/env";

const deletePost = async ({ postId }) => {
  const params = {
    method: "DELETE",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${API_BASE_URL}/posts/${postId}`, params);
  if (!response.ok) {
    throw Error(response);
  }
  return response;
};
export default deletePost;
