import getEvents from "events/api/get-events";
import handleEvents from "events/services/handle-events";

const initializeQueryService = async () => {
  try {
    const events = await getEvents();
    events.list?.forEach((event) => {
      const { type, data } = event;
      handleEvents({ type, data });
    });
  } catch (error) {
    throw Error("Error handling events");
  }
};

export default initializeQueryService;
