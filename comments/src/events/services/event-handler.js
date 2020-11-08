import updateComment from "comments/services/update-comment";
import deletePostComments from "comments/services/delete-post-comments";
import EventTypes from "events/constants/event-types";

const eventHandler = ({ type, data }) => {
  const Actions = {
    [EventTypes.COMMENT_MODERATED]: ({ postId, id, status }) =>
      updateComment({ postId, id, status }),
    [EventTypes.POST_DELETED]: ({ id }) => deletePostComments({ id }),
  };
  Actions[type] && Actions[type](data);
};
export default eventHandler;
