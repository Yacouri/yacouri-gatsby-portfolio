import styled from "styled-components";
import { breakpoints } from "../../global/breakpoints";
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
    text-align: center;
    margin-top: 100px;
    grid-column: 2;
    span,
    a {
      color: ${colors.primary};
      margin: 0px 5px;
      text-decoration: none;
      font-weight: 500;
    }
    
  }${breakpoints.laptop}{
    .footer-section {
      ul {
        gap: 15px;
      }
    }
  }
  ${breakpoints.medium}{
    grid-template-columns: 1fr;
    gap: 30px;
    .footer-section {
      h1, p{
        text-align: center;
      }
      ul {
        grid-template-columns: 1fr;
        text-align: center;
      }
    }
    .copyright {
      text-align: center;
      grid-column: 1;
    }
  }
`;
