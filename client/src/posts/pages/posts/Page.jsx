import { useCallback, useEffect, useState } from "react";
import { SubmitButton } from "commons/components/Buttons";
import LoadingScreen from "commons/components/loading/LoadingScreen";
import createPostAPI from "posts/api/createPost";
import PostsList from "./posts-list/List";
import getPostsAPI from "posts/api/getPosts";
import { PostsWrapper } from "./StyledComponents";
import { Form } from "./StyledComponents";
import { Title } from "./StyledComponents";
import { FormActions } from "./StyledComponents";
import { TextInput } from "commons/components/Inputs";

const defaultTitle = "";
const PostsPage = () => {
  const [title, setTitle] = useState(defaultTitle);
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPostList = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getPostsAPI();
      setPostList(response.list);
    } catch (error) {
      console.log("An error has ocurred.");
    } finally {
      setLoading(false);
    }
  }, [setLoading, setPostList]);

  useEffect(() => {
    fetchPostList();
  }, [fetchPostList]);

  const onInputChange = ({ target: { value } }) => setTitle(value);
  const clearFormData = () => {
    setTitle(defaultTitle);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const createPost = async () => {
      try {
        setLoading(true);
        await createPostAPI({ title });
        clearFormData();
        console.log(`Post ${title} created successfully`);
        await fetchPostList();
      } catch (error) {
        console.log("An error has ocurred.");
      } finally {
        setLoading(false);
      }
    };
    createPost();
  };
  const disabledSubmit = title?.trim().length === 0;
  return (
    <>
      {loading && <LoadingScreen />}
      <PostsWrapper>
        <h1>Posts</h1>
        <Form onSubmit={onSubmit}>
          <Title>Title</Title>
          <TextInput onChange={onInputChange} value={title} />
          <FormActions>
            <SubmitButton disabled={disabledSubmit}>Submit</SubmitButton>
          </FormActions>
        </Form>
        <PostsList postList={postList} />
      </PostsWrapper>
    </>
  );
};
export default PostsPage;
