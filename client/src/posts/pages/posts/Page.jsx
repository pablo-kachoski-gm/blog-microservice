import { useCallback, useEffect, useState } from "react";
import { SubmitButton } from "commons/components/Buttons";
import createPostAPI from "posts/api/create-post";
import deletePostAPI from "posts/api/delete-post";
import PostsList from "./posts-list/List";
import getPostsAPI from "posts/api/get-posts";
import { Form } from "./StyledComponents";
import { Title } from "./StyledComponents";
import { FormActions } from "./StyledComponents";
import { TextInput } from "commons/components/Inputs";
import { useHistory } from "react-router-dom";
import { delay } from "commons/utils/time";
import { FETCH_POSTS_MILLISEC_DELAY } from "posts/constants/time";

const defaultTitle = "";
const PostsPage = ({ setLoading }) => {
  const [title, setTitle] = useState(defaultTitle);
  const [postList, setPostList] = useState([]);
  const history = useHistory();

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
  }, [setLoading]);

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
        await delay(FETCH_POSTS_MILLISEC_DELAY);
        await fetchPostList();
      } catch (error) {
        console.log("An error has ocurred.");
      } finally {
        setLoading(false);
      }
    };
    createPost();
  };

  const onDelete = (id) => {
    const deletePost = async (postId) => {
      try {
        setLoading(true);
        await deletePostAPI({ postId });
        await delay(FETCH_POSTS_MILLISEC_DELAY);
        await fetchPostList();
      } catch (error) {
        console.log("An error has ocurred.");
      } finally {
        setLoading(false);
      }
    };
    deletePost(id);
  };
  const onViewDetail = (id) => {
    history.push(`/posts/${id}`);
  };

  const disabledSubmit = title?.trim().length === 0;
  return (
    <div>
      <h1>Create Post</h1>
      <Form onSubmit={onSubmit}>
        <Title>Title</Title>
        <TextInput onChange={onInputChange} value={title} />
        <FormActions>
          <SubmitButton disabled={disabledSubmit}>Submit</SubmitButton>
        </FormActions>
      </Form>
      <PostsList
        postList={postList}
        onDelete={onDelete}
        onViewDetail={onViewDetail}
      />
    </div>
  );
};
export default PostsPage;
