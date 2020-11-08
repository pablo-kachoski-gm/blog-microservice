import getEvents from "events/api/get-events";
import handleEvents from "events/services/handle-events";

const initializeQueryService = async () => {
  const events = await getEvents();
  events.list?.forEach((event) => {
    const { type, data } = event;
    handleEvents({ type, data });
  });
};

export default initializeQueryService;
