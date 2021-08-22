import styled from "styled-components";
import { colors } from "../../global/colors";

export const Container = styled.div`
  display: grid;
  place-items: center;
  .wrapper {
    width: 70%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    background-color: ${colors.github};
    border-radius: 12px;
    transition: 0.4s;
    .info{
      margin-left:100px;
    }
    div {
      h1 {
        color: ${colors.white};
        font-weight: 700;
      }
      p {
        color: ${colors.white};
        font-weight: 300;
        margin: 40px 0px;
      }
      a {
        background-color: ${colors.primary};
        color: ${colors.white};
        font-weight: 200;
        border-radius: 10px;
        text-decoration: none;
        padding: 12px 45px;
      }
      img {
        /* width: 100%; */
      }
    }
    &:hover{
      transform: scale(1.05);
    }
  }
`;

export const Title = styled.h1`
  color: ${colors.black};
  font-weight: 700;
  margin: 70px 0px;
`;
