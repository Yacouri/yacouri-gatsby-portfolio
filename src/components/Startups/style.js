import styled from "styled-components";
import { breakpoints } from "../../global/breakpoints";

export const StartupWrapper = styled.div`
  width: 65%;
  margin-top: 70px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  img {
    width: 190px;
  }
  ${breakpoints.medium}{
    grid-template-columns: 1fr 1fr;
    margin: 30px auto;
    text-align: center;
  }
  ${breakpoints.small}{
    grid-template-columns: 1fr;
    margin: 30px auto;
    text-align: center;
  }
`;
