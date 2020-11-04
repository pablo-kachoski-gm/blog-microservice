import { useCallback, useContext, useEffect, useState } from "react";
import { SubmitButton } from "commons/components/Buttons";

import { Form } from "./StyledComponents";
import { Title } from "./StyledComponents";
import { FormActions } from "./StyledComponents";
import { TextInput } from "commons/components/Inputs";
import { LoadingContext } from "commons/context/loading-context";
import { useHistory, useParams } from "react-router-dom";
import getPostAPI from "posts/api/get-post";
import createCommentAPI from "comments/api/create-comment";
import getCommentsAPI from "comments/api/get-comments";
import deleteCommentAPI from "comments/api/delete-comment";
import CommentsList from "./comments-list/List";

const defaultTitle = "";
const PostDetail = () => {
  const [post, setPost] = useState({ comments: [] });
  const [comment, setComment] = useState(defaultTitle);
  const setLoading = useContext(LoadingContext);
  const { postId } = useParams();
  const history = useHistory();

  const fetchPost = useCallback(async () => {
    try {
      setLoading(true);
      const postResponse = await getPostAPI({ postId });
      const commentsResponse = await getCommentsAPI({ postId });
      setPost({ ...postResponse, comments: commentsResponse.list });
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
        console.log(`Comment ${comment} created successfully`);
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
        console.log(`Comment ${commentId} deleted successfully`);
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
        <h2>{`Title: ${post?.title}`}</h2>
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
