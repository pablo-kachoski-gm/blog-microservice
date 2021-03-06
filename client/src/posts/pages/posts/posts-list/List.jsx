import styled from "styled-components";
import PostListItem from "./PostListItem";

const PostsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const PostList = styled.ul`
  padding-inline-start: 0;

  & > *:not(:last-child) {
    margin-bottom: 1.5em;
  }
`;

const PostsList = ({ postList, onDelete, onViewDetail }) => {
  return (
    <PostsWrapper>
      <h2>Posts</h2>
      {postList.length > 0 ? (
        <PostList>
          {postList?.map(({ title, id }) => (
            <PostListItem
              key={id}
              title={title}
              onDelete={() => onDelete(id)}
              onViewDetail={() => onViewDetail(id)}
            />
          ))}
        </PostList>
      ) : (
        <div>No results</div>
      )}
    </PostsWrapper>
  );
};
export default PostsList;
