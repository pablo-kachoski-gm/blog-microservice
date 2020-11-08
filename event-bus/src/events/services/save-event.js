import events from "events/data/events";

const saveEvent = ({ event }) => {
  events.push(event);
};
export default saveEvent;
