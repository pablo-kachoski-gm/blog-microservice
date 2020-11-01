import styled from "styled-components";

export const SubmitButton = styled.button`
  padding: 0.5em 2em;
  background-color: rgba(16, 29, 216, 1);
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 5px;
  cursor: pointer;

  &:focus {
    background-color: rgba(16, 29, 216, 0.5);
    border: none;
    text-decoration: none;
  }
`;
