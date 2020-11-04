import styled from "styled-components";

const HIGHLIGHT = "#4dafff";
export const TextInput = styled.input`
  padding: 0.5em 1em;
  border-radius: 4px;

  &:focus {
    box-shadow: 0 0 3px ${HIGHLIGHT};
    border: 1px solid ${HIGHLIGHT};
    outline: none;
  }
`;
