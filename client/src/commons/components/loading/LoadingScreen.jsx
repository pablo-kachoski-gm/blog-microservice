import LoadingIcon from "./LoadingIcon";
import styled from "styled-components";

const Loading = styled.div`
  background-color: rgb(48, 48, 48, 0.5);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const LoadingScreen = () => {
  return (
    <Loading>
      <LoadingIcon />
    </Loading>
  );
};
export default LoadingScreen;
