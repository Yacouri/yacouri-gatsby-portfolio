import styled from "styled-components";
import { colors } from "../../global/colors";

export const Nav = styled.div`
  width: 95%;
  margin: 0 auto;
  margin-top: 30px;
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
    a {
      color: ${colors.black};
      text-decoration: none;
    }
  }
`;

export const Mailto = styled.div`
  a {
    padding: 12px 30px;
    border-radius: 10px;
    text-decoration: none;
    color: ${colors.white};
    background-color: ${colors.primary};
		box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  }
`;
