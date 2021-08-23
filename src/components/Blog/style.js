import styled from "styled-components";
import { colors } from "../../global/colors";

export const ShowArticles = styled.div`
  margin-top: 50px;
  transition: 0.2s;
  a {
    background-color: ${colors.primary};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    padding: 18px 40px;
    text-decoration: none;
    color: ${colors.white};
    margin-top: 40px;
    font-size: 14px;
    font-weight: 400;
    border-radius: 10px;
  }
`;
