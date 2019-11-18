import styled from "styled-components";

export const Bullet = styled.span`
  background: ${props => props.theme.BULLET_BG};
  color: ${props => props.theme.BULLET_TEXT_COLOR};
  border: 1px solid ${props => props.theme.BULLET_BORDER};
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 0.8rem;
`;
