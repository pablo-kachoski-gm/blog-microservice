import { useState } from "react";
import styled from "styled-components";
import { SubmitButton } from "../../../../commons/components/Buttons";
import createPostAPI from "../../../api/createPost";
import { PAGE_BACKGROUND, PRINCIPAL } from "../../../constants/colors";

const CommentWrapper = styled.div`
  background-color: ${PAGE_BACKGROUND};
  padding: 3em 2em;
`;

const FormContent = styled.div`
  background-color: ${PRINCIPAL}
  margin-bottom: 3em;
`;
const Form = styled.form``;
const Title = styled.div`
  margin-bottom: 0.5em;
`;
const CreatePost = () => {
  const [title, setTitle] = useState("");

  const onInputChange = ({ target: { value } }) => setTitle(value);
  const onSubmit = (e) => {
    e.preventDefault();
    const createPost = async () => {
      try {
        await createPostAPI({ title });
        console.log(`Post ${title} created successfully`);
      } catch (error) {
        console.log("An error has ocurred.");
      }
    };
    createPost();
  };
  const disabledSubmit = title?.trim().length === 0;
  return (
    <CommentWrapper>
      <Form onSubmit={onSubmit}>
        <FormContent>
          <Title>Title</Title>
          <input onChange={onInputChange} />
        </FormContent>
        <SubmitButton disabled={disabledSubmit}>Submit</SubmitButton>
      </Form>
    </CommentWrapper>
  );
};
export default CreatePost;
