import fetch from "node-fetch";
import { API_BASE_URL } from "events/constants/env";

const createEvent = async ({ body }) => {
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(`${API_BASE_URL}/events`, params);
  if (!response.ok) {
    throw Error(response);
  }
  return response;
};
export default createEvent;
