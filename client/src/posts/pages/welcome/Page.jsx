import styled from "styled-components";
import { DARK_FONT, PAGE_BACKGROUND } from "../../constants/colors";

const WelcomeWrapper = styled.div`
  background-color: ${PAGE_BACKGROUND};
  color: ${DARK_FONT};
  width: 100%;
  padding: 1em 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CreatePost = () => {
  return (
    <>
      <WelcomeWrapper>
        <h1>Welcome!!</h1>
      </WelcomeWrapper>
    </>
  );
};
export default CreatePost;
