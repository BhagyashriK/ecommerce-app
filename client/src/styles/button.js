import styled from "styled-components";

export const LinkButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.LINK_BTN_TEXT_COLOR};
  font-size: 0.9rem;
  text-decoration: underline;
  &.active,
  &:focus,
  &:hover,
  &:active {
    color: ${props => props.theme.LINK_BTN_TEXT_ACTIVE_COLOR};
    outline: none;
    border-style: none;
  }
  &:disabled {
    cursor: not-allowed;
    color: ${props => props.theme.LINK_BTN_TEXT_DISABLED_COLOR};
  }
`;
