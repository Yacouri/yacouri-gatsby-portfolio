import styled from "styled-components";
import { breakpoints } from "../../global/breakpoints";
import { colors } from "../../global/colors";

export const ButtonsWrapper = styled.div`
  width: 85%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 50px;
  gap: 20px;
  button {
    cursor: pointer;
    font-size: 17px;
    font-weight: 600;
    outline: none;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  }
  .download-cv {
    width: 240px;
    height: 70px;
    color: ${colors.white};
    background-color: ${colors.primary};
    border: none;
    border-radius: 10px;
  }
  .discover {
    width: 200px;
    height: 70px;
    color: ${colors.black};
    background-color: transparent;
    border: none;
  }
  // media queries
  ${breakpoints.laptop} {
    gap: 20px;
    margin-top: 30px;
    button {
      font-size: 14px;
    }
    .download-cv,
    .discover {
      width: 180px;
      height: 50px;
    }
  }
  ${breakpoints.xLarge} {
    gap: 20px;
    button {
      font-size: 14px;
    }
    .download-cv,
    .discover {
      width: 180px;
      height: 50px;
    }
  }
  ${breakpoints.large} {
    .download-cv,
    .discover {
      width: 160px;
      height: 50px;
    }
  }
  ${breakpoints.medium} {
    width: 100%;
    grid-template-columns: 1fr;
    .download-cv,
    .discover {
      width: 100%;
      height: 50px;
    }
  }
  ${breakpoints.small} {
    width: 100%;
    grid-template-columns: 1fr;
    .download-cv,
    .discover {
      width: 100%;
      height: 50px;
    }
  }
`;
