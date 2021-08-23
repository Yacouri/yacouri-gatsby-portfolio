import styled, { createGlobalStyle, css } from "styled-components";
import { colors } from "../global/colors";

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  *{
    margin: 0;
    padding: 0;
  }
  body{
    font-family: 'Noto Sans JP';
  }
`;

export const Container = styled.div`
  height: ${(props) => (props.h80 ? "80vh" : "100vh")};
  background-color: ${(props) => props.bgColor};
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-position: right;
  display: grid;
  section {
    align-self: center;
    margin: 0px 300px;
  }
  ${(props) =>
    props.mt100 &&
    css`
      margin-top: 100px;
    `}
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  ${(props) =>
    props.gap100 &&
    css`
      gap: 100px;
    `}
`;

export const SectionInfo = styled.div`
  align-self: center;
  width: 100%;
  h1 {
    font-weight: 700;
    line-height: 50px;
    font-size: 50px;
    span {
      color: ${colors.primary};
    }
  }
  .title {
    font-weight: 700;
    line-height: 50px;
  }
  .caption {
    font-size: 16px;
    font-weight: 300;
    margin-top: 15px;
    color: ${colors.secondary};
  }
  .home-caption {
    font-size: 20px;
    font-weight: 300;
    margin-top: 30px;
    color: ${colors.secondary};
  }
  img {
    width: 100%;
  }
`;
