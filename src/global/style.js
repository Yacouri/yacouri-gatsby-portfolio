import styled, { createGlobalStyle, css } from "styled-components";
import { colors } from "../global/colors";
import { breakpoints } from "./breakpoints";

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

export const Childs = styled.div``;

export const Container = styled.div`
  /* width: 100%; */
  height: ${(props) => (props.h80 ? "80vh" : "100vh")};
  background-color: ${(props) => props.bgColor};
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-position: right;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 100%;
  section {
    align-self: center;
    margin: 0px 300px;
  }
  ${(props) =>
    props.mt100 &&
    css`
      margin-top: 100px;
    `}
  ${breakpoints.xLarge} {
    section {
      align-self: center;
      margin: 0px 100px;
    }
  }
  ${breakpoints.large} {
    section {
      align-self: center;
      margin: 0px 70px;
    }
  }
  ${breakpoints.medium} {
    height: 100%;
    section {
      /* width: 100%; */
      margin-bottom: 30px;
    }
  }
  ${breakpoints.small} {
  }
`;

export const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  ${(props) =>
    props.gap100 &&
    css`
      gap: 100px;
    `}
  ${breakpoints.medium} {
    gap: 20px;
    grid-template-columns: none;
    grid-template-rows: 1fr;
    .img-section {
      order: -1;
    }
  }
  ${breakpoints.small} {
    gap: 20px;
    grid-template-columns: none;
    grid-template-rows: 1fr;
    .img-section {
      order: -1;
    }
  }
`;

export const SectionInfo = styled.div`
  align-self: center;
  /* width: 100%; */
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
  .title-two {
    margin-top: 30px;
    font-weight: 700;
    line-height: 50px;
  }
  .caption {
    font-size: 16px;
    font-weight: 400;
    margin-top: 15px;
    color: ${colors.secondary};
  }
  .home-caption {
    font-size: 20px;
    font-weight: 400;
    margin-top: 30px;
    color: ${colors.secondary};
  }
  .social-icons {
    a {
      svg{
        color: ${colors.black};
        font-size: 18px;
        margin: 10px 20px 0px 0px ;
        transition: 0.2s;
      }
      &:hover {
        svg {
          color: ${colors.primary};
        }
      }
    }
  }
  img {
    width: 100%;
  }
  ${breakpoints.xLarge} {
    h1 {
      line-height: 40px;
      font-size: 40px;
    }
    .title {
      font-size: 22px;
    }
    .caption {
      font-size: 14px;
    }
    .home-caption {
      font-size: 18px;
    }
  }
  ${breakpoints.medium} {
    margin-top: 0px;
    h1,
    .home-caption,
    .caption,
    .title,
    .title-two {
      text-align: center;
    }
    img {
      width: 100%;
    }
    .social-icons { 
      margin: 0 auto;
      a {
        text-align: center;
        svg{
          color: ${colors.black};
          font-size: 18px;
          margin: 10px 20px 0px 0px ;
          transition: 0.2s;
        }
        &:hover {
          svg {
            color: ${colors.primary};
          }
        }
      }
    }
  }
`;
