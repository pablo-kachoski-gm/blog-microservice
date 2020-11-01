import styled from "styled-components";
import { LIGHT_FONT, PRINCIPAL } from "../../constants/colors";

const Post = styled.li`
  background-color: ${PRINCIPAL};
  width: 20%;
  padding: 1em 1.2em;
  border-radius: 4px;
  list-style: none;
`;
const ItemProp = styled.div`
  display: flex;
  color: ${LIGHT_FONT};

  & > *:first-child {
    margin-right: 1em;
  }
`;

const PostListItem = ({ title }) => {
  return (
    <Post>
      <ItemProp>
        <span>Title: </span>
        <span>{title}</span>
      </ItemProp>
    </Post>
  );
};
export default PostListItem;
