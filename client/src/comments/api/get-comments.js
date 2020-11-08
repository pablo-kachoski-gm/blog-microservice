import { API_BASE_URL } from "comments/constants/env";

const getComments = async ({ postId }) => {
  const params = {
    method: "GET",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(
    `${API_BASE_URL}/posts/${postId}/comments`,
    params
  );
  if (!response.ok) {
    throw Error(response);
  }
  return await response.json();
};
export default getComments;
