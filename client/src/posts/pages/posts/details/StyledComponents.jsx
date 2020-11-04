import { DARK_FONT } from "commons/constants/colors";
import styled from "styled-components";

export const FormActions = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: linear-gradient(90deg, #184e68 0%, #57ca85 100%);
  border-radius: 4px;
  padding: 2em 1.5em 1em 1.5em;
  width: 300px;
  height: 300px;
  color: ${DARK_FONT};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);

  & > *:not(:last-child) {
    margin-bottom: 1em;
  }
`;
export const Title = styled.div`
  margin-bottom: 0.5em;
`;
