import { useState } from "react";
import styled from "styled-components";
import { SubmitButton } from "../../../commons/components/Buttons";
import createPostAPI from "../../api/createPost";

const PostsWrapper = styled.div`
  background-color: #a3a3a3;

  width: 10vw;
  padding: 3em 2em;
`;

const FormContent = styled.div`
  margin-bottom: 3em;
`;
const Form = styled.form`
  background-color: #a3a3a3;
`;
const Title = styled.div`
  margin-bottom: 0.5em;
  font-weight: bold;
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

  return (
    <PostsWrapper>
      <Form onSubmit={onSubmit}>
        <FormContent>
          <Title>Title</Title>
          <input onChange={onInputChange} />
        </FormContent>
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </PostsWrapper>
  );
};
export default CreatePost;
