import data from "comments/data/comments";
import { randomBytes } from "crypto";
import createEventAPI from "events/api/create-event";
import CommentStatus from "comments/constants/status";

const saveComment = async ({ postId, content }) => {
  const comments = data[postId] || [];
  const commentId = randomBytes(4).toString("hex");
  const newComment = { id: commentId, content, status: CommentStatus.PENDING };
  comments.push(newComment);
  data[postId] = comments;

  const body = {
    type: "CommentCreated",
    data: { ...newComment, postId },
  };
  await createEventAPI({ body });
  return newComment;
};

export default saveComment;
