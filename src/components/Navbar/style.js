import styled from "styled-components";
import { colors } from "../../global/colors";
import { breakpoints } from "../../global/breakpoints";

export const Nav = styled.div`
  position: fixed;
  top: 0;
  padding: 20px 0px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  justify-items: center;
  .menu {
    display: none;
  }
  // media queries
  ${breakpoints.xLarge} {
    background-color: ${colors.primary};
    width: 100%;
    grid-template-columns: 1fr 3fr 1fr;
  }
  ${breakpoints.large} {
    background-color: ${colors.dribbble};
  }
  ${breakpoints.medium} {
    background-color: ${colors.yellow};
  }
  ${breakpoints.small} {
    background-color: ${colors.lightTomato};
    width: 100%;
    grid-auto-flow: row;
    grid-template-columns: none;
    .menu {
      display: block;
    }
    div:first-child {
      width: 95%;
      margin: 10px;
      justify-self: start;
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 1fr;
      div {
        justify-self: end;
      }
    }
  }
`;

export const Logo = styled.div`
  ${breakpoints.small} {
    h1 {
      font-size: 60px;
    }
    svg {
      font-size: 40px;
    }
  }
  ${breakpoints.small}{
    h1{
      font-size: 30px;
    }
    svg{
      font-size: 25px;
    }
  }
`;

export const LinksWrapper = styled.div`
  transition: 0.2s;
  ul li {
    display: inline-block;
    margin: 20px;
    a {
      color: ${colors.black};
      text-decoration: none;
      transition: 0.2s;
      border-bottom: 2px solid transparent;
      &:hover {
        color: ${colors.primary};
        border-bottom: 2px solid ${colors.primary};
      }
    }
  }
  // media queries
  ${breakpoints.xLarge} {
    ul li {
      margin: 15px;
      a {
        font-size: 15px;
      }
    }
  }
  ${breakpoints.small} {
    transition: 0.2s;
    display: ${(props) => (props.visibility ? "block" : "none")};
    ul li {
      display: block;
      text-align: center;
      padding: 20px;
      a {
        font-size: 30px;
      }
    }
  }
`;

export const Mailto = styled.div`
  a {
    color: ${colors.black};
    transition: 0.2s;
    &:hover {
      color: ${colors.primary};
    }
  }
  // media queries
  ${breakpoints.xLarge} {
    a {
      font-size: 15px;
    }
  }
  ${breakpoints.large} {
  }
  ${breakpoints.medium} {
  }
  ${breakpoints.small} {
    display: ${(props) => (props.visibility ? "block" : "none")};
    padding: 20px;
    a {
      font-size: 30px;
    }
  }
`;

// ${breakpoints.xLarge} {
// }
// ${breakpoints.large} {
// }
// ${breakpoints.medium} {
// }
// ${breakpoints.small} {
// }
