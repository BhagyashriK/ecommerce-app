import styled from "styled-components";
import { FormControl } from "./form";

export const FilterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 15px;
  ${FormControl} {
    margin-right: 5px;
  }
`;
