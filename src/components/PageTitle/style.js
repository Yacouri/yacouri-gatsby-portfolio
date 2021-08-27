import styled, { css } from "styled-components";
import { breakpoints } from "../../global/breakpoints";
import { colors } from "../../global/colors";

export const PageTitleWrapper = styled.div`
  margin: 50px 0px;
`;

export const Line = styled.div`
  width: 50px;
  height: 8px;
  margin-bottom: 5px;
  border-radius: 25px;
  background-color: ${(props) => props.bgColor};
  ${(props) =>
    props.center &&
    css`
      margin: 0 auto;
    `}
  ${breakpoints.small}{
    margin: 0 auto;
  }
`;

export const Title = styled.h2`
  color: ${colors.black};
  font-weight: 700;
  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}
  ${breakpoints.small}{
    text-align: center;
  }
`;
