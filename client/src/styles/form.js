import styled from "styled-components";

export const FormControl = styled.input`
  min-width: auto;
  height: 34px;
  padding: 0.5em;
  padding-right: 1.5em;
  background: ${props => props.theme.FORM_CONTROL_BG};
  border: 1px solid ${props => props.theme.FORM_CONTROL_BORDER_COLOR};
  border-radius: 3px;
  font-size: 0.9rem;
  color: ${props => props.theme.FORM_CONTROL_TEXT_COLOR};

  @media (min-width: 768px) {
    min-width: 15rem;
  }

  &:focus {
    outline: 0;
  }
  &::placeholder {
    color: ${props => props.theme.FORM_CONTROL_PLACEHOLDER_TEXT_COLOR};
  }
`;
