import data from "comments/data/comments";
import createEventAPI from "events/api/create-event";

const updateComment = async ({ id, postId, status }) => {
  const comments = data[postId];
  const comment = comments.find((comment) => comment.id === id);
  comment.status = status;
  const body = {
    type: "CommentUpdated",
    data: { ...comment, postId },
  };
  await createEventAPI({ body });
};

export default updateComment;
