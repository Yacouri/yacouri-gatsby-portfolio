import styled from "styled-components";
import { colors } from "../../global/colors";

export const Projects = styled.div`
  margin-top: 70px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
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
`;
export const H2 = styled.h2`
  margin: 15px 0px 40px 0px;
  color: ${(props) => props.txtColor};
  font-weight: 700;
`;
