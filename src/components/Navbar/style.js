import styled from "styled-components";
import { colors } from "../../global/colors";

export const Nav = styled.div`
  position: fixed;
  top:0;
  padding: 20px 0px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  width: 95%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  justify-items: center;
`;

export const Logo = styled.div``;

export const LinksWrapper = styled.div`
  ul li {
    display: inline-block;
    margin: 20px;
    a{
      color: ${colors.black};
      text-decoration: none;
      transition: 0.2s;
      border-bottom: 2px solid transparent;
      &:hover{
        color: ${colors.primary};
        border-bottom: 2px solid ${colors.primary};
      }
    }
  }
`;

export const Mailto = styled.div`
  a {
    color: ${colors.black};
    transition: 0.2s;
    &:hover{
      color: ${colors.primary};
    }
  }
`;
