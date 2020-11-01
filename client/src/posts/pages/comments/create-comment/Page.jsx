import styled from "styled-components";

const PostsWrapper = styled.div`
  width: 10vw;
  padding: 2em 5em;
`;
const SubmitButton = styled.button`
  padding: 0.5em 2em;
  background-color: #0f5bff;
`;
const FormContent = styled.div`
  background-color: #a3a3a3;
  margin-bottom: 3em;
`;
const Form = styled.form`
  background-color: #a3a3a3;
`;
const CreatePosts = () => {
  return (
    <PostsWrapper>
      <Form>
        <FormContent>
          <div>Title</div>
          <input />
        </FormContent>
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </PostsWrapper>
  );
};
export default CreatePosts;
