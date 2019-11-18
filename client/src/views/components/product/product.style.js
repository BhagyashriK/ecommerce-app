import styled from "styled-components";
import { Bullet } from "../../../styles/bullet";

export const TagWrapper = styled.div`
  display: flex;
  padding: 10px 15px;
  justify-content: space-between;
`;

export const ImgWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 145px;
  margin: 15px 0;
  ${Bullet} {
    position: absolute;
  }
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
  > li {
    display: flex;
    align-items: center;
    margin: 3px 0;
  }
`;

export const InfoLabel = styled.label`
  font-size: 0.8rem;
  font-weight: bold;
  margin-right: 10px;
  &:after {
    content: ":";
  }
`;
