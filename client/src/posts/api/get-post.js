import { API_BASE_URL } from "posts/constants/env";

const getPost = async ({ postId }) => {
  const params = {
    method: "GET",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${API_BASE_URL}/posts/${postId}`, params);
  if (!response.ok) {
    throw Error(response);
  }
  return await response.json();
};
export default getPost;
