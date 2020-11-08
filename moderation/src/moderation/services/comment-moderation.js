import createEventAPI from "events/api/create-event";
import ModerationStatus from "moderation/constants/moderation-status";

const commentModeration = async ({ type, id, postId, content }) => {
  if (type === "CommentCreated") {
    const status = content.includes("orange")
      ? ModerationStatus.rejected
      : ModerationStatus.approved;
    const body = {
      type: "CommentModerated",
      data: { id, postId, content, status },
    };
    await createEventAPI({ body });
  }
};

export default commentModeration;
