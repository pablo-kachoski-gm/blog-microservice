import data from "comments/data/comments";
import createEventAPI from "events/api/create-event";
import EventTypes from "events/constants/event-types";

const deleteComment = async ({ postId, commentId }) => {
  if (!data[postId]) return;
  const comments = data[postId].filter((comment) => comment.id !== commentId);
  data[postId] = comments;
  const body = {
    type: EventTypes.COMMENT_DELETED,
    data: { postId, id: commentId },
  };
  await createEventAPI({ body });
};

export default deleteComment;
