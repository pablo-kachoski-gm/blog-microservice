const createPost = async ({ title }) => {
  const params = {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  };
  const response = await fetch("http://localhost:4000/posts", params);
  if (!response.ok) {
    throw Error(response);
  }
  return response;
};
export default createPost;
