import styled from "styled-components";
import { DARK_FONT } from "posts/constants/colors";

const WelcomeWrapper = styled.div`
  color: ${DARK_FONT};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CreatePost = () => {
  return (
    <WelcomeWrapper>
      <h1>Welcome!!</h1>
    </WelcomeWrapper>
  );
};
export default CreatePost;
