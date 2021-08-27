import styled from "styled-components";
import { breakpoints } from "../../global/breakpoints";
import { colors } from "../../global/colors";

export const ServiceCardWrapper = styled.div`
  margin-top: 70px;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  ${breakpoints.xLarge} {
    width: 100%;
    gap: 10px;
    grid-template-columns: 1fr 1fr;
  }
  ${breakpoints.large} {
    margin-top: 30px;
    width: 80%;
    gap: 10px;
    grid-template-columns: 1fr;
  }
  ${breakpoints.medium} {
    margin-top: 30px;
    width: 55%;
    gap: 10px;
    grid-template-columns: 1fr 1fr;
  }
  ${breakpoints.small} {
    width: 55%;
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  gap: 10px;
  background-color: ${colors.lightYellow};
  border-radius: 10px;
  padding: 15px;
  img {
    width: 45px;
  }
  ${breakpoints.xLarge} {
    padding: 12px;
    span {
      font-size: 14px;
    }
    img {
      width: 35px;
    }
  }
  ${breakpoints.medium} {
    img {
      width: 35px;
    }
  }
  ${breakpoints.small} {
  }
`;
