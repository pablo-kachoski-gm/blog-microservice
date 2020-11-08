import fetch from "node-fetch";
import { API_BASE_URL } from "events/constants/env";

const getEvents = async () => {
  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${API_BASE_URL}/events`, params);
  if (!response.ok) {
    throw Error(response);
  }
  return await response.json();
};
export default getEvents;
