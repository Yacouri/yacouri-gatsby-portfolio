import styled from "styled-components";
import { colors } from "../../global/colors";

export const AboutCardsWrapper = styled.div`
  .one-four {
    display: grid;
    grid-template-columns: 2fr 4fr;
    gap: 20px;
    margin-bottom: 20px;
  }
  .four-one {
    display: grid;
    grid-template-columns: 4fr 2fr;
    gap: 20px;
  }
`;

export const MiniCardWrapper = styled.div`
  background-color: ${colors.primary};
  border-radius: 10px;
  padding: 40px 45px;
  span {
    color: ${colors.white};
    font-size: 14px;
    font-weight: 100;
  }
  h2 {
    margin-top: 5px;
    color: ${colors.yellow};
    font-weight: 700;
    line-height: 25px;
  }
  div {
    margin-top: 80px;
    color: ${colors.white};
    display: flex;
    align-items: center;
    justify-content: start;
  }
`;
export const WideCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.black};
  border-radius: 10px;
  padding: 40px 45px;
  img{
    width: 100%;
  }
  h1{
    margin-top: 30px;
    color: ${colors.yellow};
  }
  p{
    color: ${colors.white};
    margin-top: 30px;
    font-size: 22px;
    font-weight: 300;
  }
`;
