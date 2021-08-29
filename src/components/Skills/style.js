import styled from "styled-components";
import { breakpoints } from "../../global/breakpoints";
import { colors } from "../../global/colors";

export const ServiceCardWrapper = styled.div`
  margin-top: 70px;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  ${breakpoints.laptop} {
    width: 100%;
    gap: 10px;
  }
  ${breakpoints.large} {
    margin-top: 30px;
    width: 80%;
    grid-template-columns: 1fr;
  }
  ${breakpoints.medium} {
    margin-top: 30px;
    width: 100%;
    grid-template-columns: 1fr 1fr;
  }
  ${breakpoints.small} {
    margin: 30px auto;
    width: 80%;
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
  ${breakpoints.laptop} {
    padding: 12px;
    line-height: 17px;
    span {
      font-size: 12px;
    }
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
      width: 40px;
    }
  }
  ${breakpoints.small} {
    img {
      width: 35px;
    }
  }
`;
