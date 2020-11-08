import { API_BASE_URL } from "query-service/constants/env";

const getPosts = async () => {
  const params = {
    method: "GET",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${API_BASE_URL}/posts`, params);
  if (!response.ok) {
    throw Error(response);
  }
  return await response.json();
};
export default getPosts;
