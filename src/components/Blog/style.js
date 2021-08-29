import styled from "styled-components";
import { breakpoints } from "../../global/breakpoints";
import { colors } from "../../global/colors";

export const ShowArticles = styled.div`
  margin-top: 50px;
  transition: 0.2s;
  a {
    background-color: ${colors.primary};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    padding: 18px 40px;
    text-decoration: none;
    color: ${colors.white};
    margin-top: 40px;
    font-size: 14px;
    font-weight: 400;
    border-radius: 10px;
  }
  ${breakpoints.medium} {
    text-align: center;
    margin-bottom: 50px;
  }
`;

export const ArticlesWrapper = styled.div`
  margin: 100px auto;
  width: 65%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  gap: 40px;
  ${breakpoints.medium} {
    grid-template-columns: 1fr;
  }
`;

export const ArticleCard = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  background-color: ${colors.lightGray};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  transition: 0.2s;
  &:hover {
    transform: scale(1.05);
  }
  h3 {
    margin-bottom: 15px;
  }
  span {
    display: block;
    color: ${colors.secondary};
    font-weight: 400;
    font-size: 15px;
  }
  img {
    width: 100%;
  }
  .blog-url-wrapper {
    margin-top: 15px;
    a {
      padding: 8px 20px;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 300;
      text-decoration: none;
      background-color: ${colors.primary};
      color: ${colors.white};
    }
  }
  ${breakpoints.medium} {
    grid-template-columns: 1fr;
  }
`;
