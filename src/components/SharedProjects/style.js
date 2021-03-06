import styled from "styled-components";
import { breakpoints } from "../../global/breakpoints";
import { colors } from "../../global/colors";

export const Projects = styled.div`
  margin-top: 70px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  ${breakpoints.laptop} {
    margin-top: 50px;
    gap: 10px;
  }
  ${breakpoints.small} {
    width: 60%;
    margin: 40px auto;
    grid-template-columns: 1fr;
  }
`;

export const ProjectWrapper = styled.div`
  background-color: ${(props) => props.bgColor};
  padding: 20px;
  border-radius: 12px;
  span {
    color: ${colors.white};
    font-size: 14px;
    font-weight: 100;
  }
  .media-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      color: ${colors.white};
      font-size: 20px;
    }
    a {
      color: ${colors.white};
    }
  }
  ${breakpoints.laptop} {
    padding: 15px;
    span {
      font-weight: 400;
    }
    a {
      font-size: 14px;
    }
  }
  ${breakpoints.small} {
    span {
      font-weight: 600;
    }
    .media-info {
      a {
        font-weight: 600;
      }
    }
  }
`;
export const H2 = styled.h2`
  margin: 15px 0px 40px 0px;
  color: ${(props) => props.txtColor};
  font-weight: 700;
  ${breakpoints.laptop} {
    font-size: 16px;
  }
  ${breakpoints.xLarge} {
    font-size: 17px;
  }
`;
