import styled from "styled-components";
import { colors } from "../../global/colors";

export const PageTitleWrapper = styled.div`
  margin: 50px 0px;
`

export const Line = styled.div`
  width: 50px;
  height: 8px;
  margin-bottom: 5px;
  border-radius: 25px;
  background-color: ${props => props.bgColor};
`

export const Title = styled.h2`
  color: ${colors.black};
  font-weight: 700;
`