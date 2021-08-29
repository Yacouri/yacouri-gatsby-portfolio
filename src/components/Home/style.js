import styled from "styled-components";
import { breakpoints } from "../../global/breakpoints";
import { colors } from "../../global/colors";

export const ButtonsWrapper = styled.div`
  width: 85%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 50px;
  gap: 10px;
  a {
    cursor: pointer;
    font-size: 17px;
    font-weight: 600;
    border-radius: 10px;
    border: none;
    outline: none;
    text-decoration: none;
    text-align: center;
    transition: 0.2s;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    padding: 20px 30px;
  }
  .download-cv {
    color: ${colors.white};
    background-color: ${colors.primary};
    &:hover {
      background-color: ${colors.black};
      color: ${colors.white};
    }
  }
  .discover {
    color: ${colors.black};
    background-color: ${colors.white};
    &:hover {
      background-color: ${colors.black};
      color: ${colors.white};
    }
  }
  // media queries
  ${breakpoints.laptop} {
    margin-top: 30px;
    a {
      font-size: 14px;
    }
  }
  ${breakpoints.xLarge} {
    gap: 20px;
    a {
      font-size: 14px;
    }
  }
  ${breakpoints.medium} {
    width: 100%;
    grid-template-columns: 1fr;
  }
  ${breakpoints.small} {
    width: 100%;
    grid-template-columns: 1fr;
  }
`;
