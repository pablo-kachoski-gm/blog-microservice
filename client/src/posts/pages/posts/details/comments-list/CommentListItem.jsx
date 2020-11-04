import styled from "styled-components";
import { Delete } from "@styled-icons/material";
import { DARK_FONT, LIGHT_FONT } from "commons/constants/colors";

const Post = styled.li`
  background: linear-gradient(90deg, #184e68 0%, #57ca85 100%);
  width: 300px;
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

const PostListItem = ({ content, onDelete }) => {
  return (
    <Post>
      <ItemProp>
        <span>Detail: </span>
        <span>{content}</span>
      </ItemProp>
      <Actions>
        <DeleteIcon size="22" onClick={onDelete} />
      </Actions>
    </Post>
  );
};
export default PostListItem;
