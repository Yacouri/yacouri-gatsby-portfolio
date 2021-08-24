import styled from "styled-components";
import { colors } from "../global/colors";

export const ArticleContainer = styled.div`
  max-width: 700px;
  margin: 10% auto;
  .back-link {
    margin-bottom: 40px;
    a {
      color: ${colors.github};
      text-decoration: none;
      transition: 0.2s;
      &:hover {
        color: ${colors.primary};
      }
      svg {
        margin-right: 15px;
      }
    }
  }
  .featured-img {
    width: 100%;
    border-radius: 8px;
  }
  .above-title {
    margin-top: 30px;
    color: ${colors.secondary};
    font-size: 15px;
    font-weight: 500;
  }
  .article-time {
    color: ${colors.secondary};
    margin: 15px 0px 50px 0px;
    font-size: 15px;
    span:nth-child(2) {
      margin: 0px 20px;
    }
  }
  .article-title {
    font-size: 35px;
    font-weight: 700;
  }
  .article-content {
    color: ${colors.black};
    font-size: 21px;
    line-height: 32px;
  }
`;
