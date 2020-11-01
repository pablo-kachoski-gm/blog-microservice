import { useState } from "react";
import styled from "styled-components";
import { SubmitButton } from "../../../commons/components/Buttons";
import LoadingScreen from "../../../commons/components/loading/LoadingScreen";
import createPostAPI from "../../api/createPost";
import { LIGHT_FONT, PAGE_BACKGROUND, PRINCIPAL } from "../../constants/colors";

const PostsWrapper = styled.div`
  background-color: ${PAGE_BACKGROUND};
  padding: 3em 2em;
`;

const FormActions = styled.div`
  margin-top: auto;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${PRINCIPAL};
  border-radius: 4px;
  padding: 2em 1.5em;
  width: 300px;
  height: 300px;
  color: ${LIGHT_FONT};

  & > *:not(:last-child) {
    margin-bottom: 1em;
  }
`;
const Title = styled.div`
  margin-bottom: 0.5em;
`;
const defaultTitle = "";
const CreatePost = () => {
  const [title, setTitle] = useState(defaultTitle);
  const [loading, setLoading] = useState(false);

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
        <Form onSubmit={onSubmit}>
          <Title>Title</Title>
          <input onChange={onInputChange} value={title} />
          <FormActions>
            <SubmitButton disabled={disabledSubmit}>Submit</SubmitButton>
          </FormActions>
        </Form>
      </PostsWrapper>
    </>
  );
};
export default CreatePost;
