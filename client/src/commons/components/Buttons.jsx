import styled from "styled-components";
import { ACTION_BUTTON_PRIMARY, DISABLED_COLOR } from "../constants/colors";

export const SubmitButton = styled.button`
  padding: 0.5em 2em;
  background-color: ${({ disabled }) =>
    disabled ? DISABLED_COLOR : ACTION_BUTTON_PRIMARY};
  color: ${({ disabled }) => (disabled ? "#bdbdbd" : "white")};
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

  &:hover {
    ${({ disabled }) =>
      disabled
        ? {}
        : { "background-color": ACTION_BUTTON_PRIMARY, opacity: 0.5 }};
  }
  &:focus,
  & {
    border: none;
    text-decoration: none;
    outline: none;
  }
`;
