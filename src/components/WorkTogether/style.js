import styled from "styled-components";
import { breakpoints } from "../../global/breakpoints";
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
    .info {
      margin-left: 100px;
    }
    .contact-link {
      /* margin: 0 auto; */
      a {
        background-color: ${colors.primary};
        padding: 12px 45px;
        color: ${colors.white};
        font-weight: 200;
        border-radius: 10px;
        text-decoration: none;
      }
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
    }
    &:hover {
      transform: scale(1.05);
    }
  }
  ${breakpoints.medium} {
    .wrapper {
      padding: 20px;
      grid-template-columns: 1fr;
      .info {
        margin: 20px auto;
      }
      .touch-img {
        order: -1;
        img {
          width: 100%;
        }
      }
    }
    .contact-link {
      text-align: center;
    }
    div {
      h1,
      p {
        text-align: center;
      }
      p {
        font-size: 14px;
      }
    }
  }
  ${breakpoints.small} {
    .wrapper {
      padding: 20px;
      grid-template-columns: 1fr;
      .info {
        margin: 20px auto;
      }
      .touch-img {
        order: -1;
        img {
          width: 100%;
        }
      }
    }
    .contact-link {
      text-align: center;
    }
    div {
      h1,
      p {
        text-align: center;
      }
      p {
        font-size: 14px;
      }
    }
  }
`;

export const Title = styled.h1`
  color: ${colors.black};
  font-weight: 700;
  margin: 70px 0px;
  ${breakpoints.small} {
    font-size: 24px;
    margin: 40px 0px;
    text-align: center;
  }
`;
