import styled from "styled-components";

export const Thumbnail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: ${props => props.theme.BOX_SHADOW};
  margin: 7px 0;
`;

export const ThumbnailImg = styled.img`
  max-height: 140px;
  width: auto;
`;

export const ThumbnailHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const ThumbnailTitle = styled.h1`
  display: flex;
  justify-content: center;
  padding: 0 15px;
  margin: 0 0 15px 0;
  font-size: 0.8rem;
  text-align: center;
`;

export const ThumbnailContent = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.THUMBNAIL_BG};
  padding: 15px;
`;

export const ThumbnailFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
`;
