import { useCallback, useEffect, useState } from "react";
import { SubmitButton } from "commons/components/Buttons";
import { Form } from "./StyledComponents";
import { Title } from "./StyledComponents";
import { FormActions } from "./StyledComponents";
import { TextInput } from "commons/components/Inputs";
import { useHistory, useParams } from "react-router-dom";
import getPostAPI from "query-service/api/get-post";
import createCommentAPI from "comments/api/create-comment";
import deleteCommentAPI from "comments/api/delete-comment";
import CommentsList from "./comments-list/List";
import { FETCH_POSTS_MILLISEC_DELAY } from "posts/constants/time";
import { delay } from "commons/utils/time";

const defaultTitle = "";
const PostDetail = ({ setLoading }) => {
  const [post, setPost] = useState({ title: "", comments: [] });
  const [comment, setComment] = useState(defaultTitle);
  const { postId } = useParams();
  const history = useHistory();

  const fetchPost = useCallback(async () => {
    try {
      setLoading(true);
      // Instead of doing separates fetches now consumes query API
      // const postResponse = await getPostAPI({ postId });
      // const commentsResponse = await getCommentsAPI({ postId });
      const postWithCommentsResponse = await getPostAPI({ postId });
      setPost(postWithCommentsResponse);
    } catch (error) {
      console.log("An error has ocurred.");
      history.push("/posts");
    } finally {
      setLoading(false);
    }
  }, [setLoading, postId, history]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  const onSubmit = (e) => {
    e.preventDefault();
    const createPost = async () => {
      try {
        setLoading(true);
        await createCommentAPI({ postId, content: comment });
        await delay(FETCH_POSTS_MILLISEC_DELAY);
        await fetchPost();
        clearFormData();
      } catch (error) {
        console.log("An error has ocurred.");
      } finally {
        setLoading(false);
      }
    };
    createPost();
  };
  const clearFormData = () => {
    setComment(defaultTitle);
  };
  const onDelete = (commentId) => {
    const deletePost = async (commentId) => {
      try {
        setLoading(true);
        await deleteCommentAPI({ postId, commentId });
        await delay(FETCH_POSTS_MILLISEC_DELAY);
        await fetchPost();
      } catch (error) {
        console.log("An error has ocurred.");
      } finally {
        setLoading(false);
      }
    };
    deletePost(commentId);
  };
  const onInputChange = ({ target: { value } }) => setComment(value);
  const disabledSubmit = comment.length === 0;
  const commentsList = post?.comments;
  return (
    <div>
      <h1>Post Detail</h1>
      <Form onSubmit={onSubmit}>
        <div>{`Title: ${post.title}`}</div>
        <Title>Add comments</Title>
        <TextInput onChange={onInputChange} value={comment} />
        <FormActions>
          <SubmitButton disabled={disabledSubmit}>Submit</SubmitButton>
        </FormActions>
      </Form>
      <CommentsList commentsList={commentsList} onDelete={onDelete} />
    </div>
  );
};
export default PostDetail;
