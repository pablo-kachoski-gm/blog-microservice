import updateComment from "query/services/update-comment";
import createComment from "query/services/create-comment";
import createPost from "query/services/create-post";
import EventTypes from "events/constants/event-types";

const eventHandler = ({ type, data }) => {
  const Actions = {
    [EventTypes.POST_CREATED]: ({ id, title }) => createPost({ id, title }),
    [EventTypes.COMMENT_CREATED]: ({ id, content, postId, status }) =>
      createComment({ id, content, postId, status }),
    [EventTypes.COMMENT_UPDATED]: ({ id, content, postId, status }) =>
      updateComment({ id, content, postId, status }),
  };
  Actions[type] && Actions[type](data);
};
export default eventHandler;
