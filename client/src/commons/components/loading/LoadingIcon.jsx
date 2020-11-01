import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
    0% {
        transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
        transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
`;

const size = "50px";
const Loading = styled.div`
  height: ${size};
  opacity: 1;
  position: relative;
  transition: opacity linear 0.3s;
  &::before {
    content: "";
    position: absolute;
    opacity: inherit;
    height: ${size};
    width: ${size};

    border: solid 3px #eee;
    border-bottom-color: #017dc5;
    border-radius: 50%;
    left: 50%;
    top: 50%;

    animation: 0.5s linear infinite ${spinAnimation};
    transform: translate3d(-50%, -50%, 0);
    transform-origin: center;
    will-change: transform;
  }
`;

const LoadingIcon = () => {
  return <Loading />;
};
export default LoadingIcon;
