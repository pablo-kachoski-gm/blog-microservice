import { useEffect, useState } from "react";
import styled from "styled-components";
import LoadingScreen from "../../../commons/components/loading/LoadingScreen";
import getPostsAPI from "../../api/getPosts";

const PostsWrapper = styled.div`
  background-color: #a3a3a3;
  width: 100%;
  padding: 3em 2em;
`;
const Post = styled.li`
  background-color: #a3a3a3;
  width: 100%;
  padding: 1em 1.2em;
  list-style: none;
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
        {postList.length > 0 ? (
          <ul>
            {postList.map(({ title, id }) => (
              <Post key={id}>{title}</Post>
            ))}
          </ul>
        ) : (
          <div>No results</div>
        )}
      </PostsWrapper>
    </>
  );
};
export default CreatePost;
