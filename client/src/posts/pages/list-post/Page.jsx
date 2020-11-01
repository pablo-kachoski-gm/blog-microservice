import { useEffect, useState } from "react";
import styled from "styled-components";
import LoadingScreen from "../../../commons/components/loading/LoadingScreen";
import getPostsAPI from "../../api/getPosts";
import { PAGE_BACKGROUND } from "../../constants/colors";
import PostListItem from "./PostListItem";

const PostsWrapper = styled.div`
  background-color: ${PAGE_BACKGROUND};
  width: 100%;
  padding: 1em 2em;
  display: flex;
  flex-direction: column;
`;
const PostList = styled.ul`
  padding-inline-start: 0;

  & > *:not(:last-child) {
    margin-bottom: 1.5em;
  }
`;

const CreatePost = () => {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostList = async () => {
      try {
        const response = await getPostsAPI();
        setPostList(response.list);
      } catch (error) {
        console.log("An error has ocurred.");
      } finally {
        setLoading(false);
      }
    };
    fetchPostList();
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <PostsWrapper>
        <h1>Posts</h1>
        {postList.length > 0 ? (
          <PostList>
            {postList.map(({ title, id }) => (
              <PostListItem key={id} title={title} />
            ))}
          </PostList>
        ) : (
          <div>No results</div>
        )}
      </PostsWrapper>
    </>
  );
};
export default CreatePost;
