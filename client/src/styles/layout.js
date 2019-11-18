import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 15px;
  /* Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) {
    max-width: 540px;
  }
  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    max-width: 720px;
  }
  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    max-width: 960px;
  }
  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 0;
  margin-right: 0;
  @media (min-width: 768px) {
    margin-left: -15px;
    margin-right: -15px;
  }
`;

export const Col12 = styled.div`
  -webkit-box-flex: 0;
  flex: 0 0 100%;
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Col4 = styled.div`
  -webkit-box-flex: 0;
  flex: 0 0 100%;
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (min-width: 992px) {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
`;
