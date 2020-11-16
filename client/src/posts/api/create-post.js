import { API_BASE_URL } from "posts/constants/env";

const createPost = async ({ title }) => {
  const params = {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  };
  const response = await fetch(`${API_BASE_URL}/posts/create`, params);
  if (!response.ok) {
    throw Error(response);
  }
  return response;
};
export default createPost;
