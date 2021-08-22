import styled from "styled-components";
import { colors } from "../../global/colors";

export const FooterWrapper = styled.div`
  background-color: ${colors.lightGray};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  margin-top: 100px;
  padding: 50px 100px;
  .footer-section {
    h1 {
      color: ${colors.github};
      font-size: 25px;
      font-weight: 700;
      margin-bottom: 30px;
    }
    p {
      color: ${colors.secondary};
    }
    ul {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px 50px;
      li {
        list-style: none;
        a {
          color: ${colors.secondary};
          text-decoration: none;
        }
      }
    }
    .media-icons {
      display: grid;
      grid-auto-flow: column;
      gap: 15px;
      svg {
        font-size: 20px;
        color: ${colors.secondary};
      }
    }
  }
  .copyright {
    margin-top: 100px;
    grid-column: 2;
    span,
    a {
      color: ${colors.primary};
      margin: 0px 10px;
      text-decoration: none;
      font-weight: 500;
    }
  }
`;
