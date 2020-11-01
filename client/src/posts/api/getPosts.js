const getPosts = async () => {
  const params = {
    method: "GET",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch("http://localhost:4000/posts", params);
  if (!response.ok) {
    throw Error(response);
  }
  return await response.json();
};
export default getPosts;
