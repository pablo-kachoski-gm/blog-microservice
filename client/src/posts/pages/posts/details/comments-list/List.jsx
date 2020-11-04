import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const CommentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const CommentList = styled.ul`
  padding-inline-start: 0;

  & > *:not(:last-child) {
    margin-bottom: 1.5em;
  }
`;

const CommentsList = ({ commentsList, onDelete }) => {
  return (
    <CommentsWrapper>
      <h2>Comments</h2>
      {commentsList?.length > 0 ? (
        <CommentList>
          {commentsList.map(({ content, id }) => (
            <CommentListItem
              key={id}
              content={content}
              onDelete={() => onDelete(id)}
            />
          ))}
        </CommentList>
      ) : (
        <div>No results</div>
      )}
    </CommentsWrapper>
  );
};
export default CommentsList;
