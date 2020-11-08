import styled from "styled-components";
import { Delete } from "@styled-icons/material";
import { DARK_FONT, LIGHT_FONT } from "commons/constants/colors";

const getBackground = (status) => {
  const backgroundByStatus = {
    Approved: "linear-gradient(90deg, #53bcef 0%, #57ca85 100%)",
    Rejected: "linear-gradient(90deg, #c33333 0%, #ca8c57 100%)",
    Pending: "linear-gradient(90deg, #9ea71c 0%, #ca8c57 100%)",
  };
  return backgroundByStatus[status] || "#CCC";
};

const Post = styled.li`
  background: ${({ status }) => getBackground(status)};
  width: 400px;
  padding: 1em 1.2em;
  border-radius: 4px;
  list-style: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: space-between;
`;
const ItemProp = styled.div`
  display: flex;
  color: ${DARK_FONT};

  & > *:first-child {
    margin-right: 1em;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 0.5em;
  }
  & > * {
    cursor: pointer;
  }
`;
const DeleteIcon = styled(Delete)`
  color: ${LIGHT_FONT};
`;

const getCommentContent = ({ content, status }) => {
  const CommentByStatus = {
    Approved: (
      <ItemProp>
        <span>{content}</span>
      </ItemProp>
    ),
    Rejected: (
      <ItemProp>
        <span>This comment has been rejected</span>
      </ItemProp>
    ),
    Pending: (
      <ItemProp>
        <span>This comment is awaiting moderation</span>
      </ItemProp>
    ),
  };
  return (
    CommentByStatus[status] || (
      <ItemProp>
        <span>Invalid </span>
      </ItemProp>
    )
  );
};
const PostListItem = ({ comment, onDelete }) => {
  const { content, status } = comment;
  return (
    <Post status={status}>
      {getCommentContent({ content, status })}
      <Actions>
        <DeleteIcon size="22" onClick={onDelete} />
      </Actions>
    </Post>
  );
};
export default PostListItem;
