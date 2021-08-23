import styled from "styled-components";
import { colors } from "../../global/colors";

export const ButtonsWrapper = styled.div`
  width: 85%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 50px;
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
    border: 2px solid ${colors.black};
  }
`;
