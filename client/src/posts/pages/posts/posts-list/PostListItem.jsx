import styled from "styled-components";
import { Delete } from "@styled-icons/material";

const Post = styled.li`
  background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
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
  color: #d4d0d0;

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
const WhiteDelete = styled(Delete)`
  color: #d4d0d0;
`;

const PostListItem = ({ title }) => {
  return (
    <Post>
      <ItemProp>
        <span>Title: </span>
        <span>{title}</span>
      </ItemProp>
      <Actions>
        <WhiteDelete size="22" />
      </Actions>
    </Post>
  );
};
export default PostListItem;
