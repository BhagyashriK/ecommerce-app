import styled from "styled-components";
import { FormControl, Select } from "./form";

export const FilterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 15px;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  ${FormControl} {
    margin: 5px 0 0 0;
    @media (min-width: 768px) {
      margin: 0 5px 0 0;
    }
  }

  ${Select} {
    margin: 5px 0 0 0;
    @media (min-width: 768px) {
      margin: 0 0 0 5px;
    }
  }
`;
