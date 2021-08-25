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
    img {
      width: 100%;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1;
      margin: 0;
      margin-top: 1.5rem;
      text-rendering: optimizeLegibility;
    }

    h1 {
      font-size: 2.75rem;
    }
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.65rem;
    }
    h4 {
      font-size: 1.25rem;
    }
    h5 {
      font-size: 1.1rem;
    }
    h6 {
      font-size: 1rem;
    }

    h2 em,
    h3 em {
      color: grey;
    }

    /* @end */

    small {
      font-size: 65%;
    }

    p {
      margin-top: 2rem;
    }

    hr {
      width: 50%;
      margin: 5rem auto;
      opacity: 0.5;
    }

    ol,
    ul {
      margin-top: 0.75rem;
    }

    ol ul,
    ol ol,
    ul ul,
    ul ol {
      margin-left: 2rem;
      margin-bottom: 0.75rem;
    }

    li {
      margin: 0.5em 0;
    }

    abbr {
      font-variant: small-caps;
      font-weight: 600;
      text-transform: lowercase;
      color: #808080;
    }

    abbr[title]:hover {
      cursor: help;
    }

    blockquote {
      border-left: 5px solid #333;
      padding-left: 0.75em;
      margin-left: calc(-0.75em - 5px);
      font-style: italic;
    }

    blockquote + figcaption {
      display: block;
      margin-top: -1.5rem;
      margin-bottom: 1.5rem;
      font-size: 75%;
      text-align: right;
    }

    blockquote + figcaption:before {
      content: "— ";
      opacity: 0.05;
    }

    pre {
      overflow: auto;

      margin: 0.75rem 0;
      padding: 0.5rem;
      font-size: 0.875em;
      white-space: pre;
      background-color: #f8f8f8;
      border: 1px solid #ccc;
      border-radius: 3px;
    }

    code {
      padding: 0 0.25em;
      white-space: pre;
      font-family: Source Code Pro, monospace;
      background-color: #f8f8f8;
      border: 1px solid #ccc;
      border-radius: 3px;
    }

    pre code {
      padding: 0;
      word-wrap: normal;
      white-space: pre-wrap;
    }

    pre code,
    pre tt {
      background-color: transparent;
      border: none;
    }

    table {
      margin: 0.75rem 0;
      padding: 0;
      border-collapse: collapse;
    }
    table tr {
      margin: 0;
      padding: 0;
      border-top: 1px solid #ccc;
      background-color: #fff;
    }
    table tr:nth-child(2n) {
      background-color: #f8f8f8;
    }

    table tr th {
      margin: 0;
      padding: 0.35em 0.75em;
      font-weight: bold;
      text-align: left;
      border: 1px solid #ccc;
    }

    table tr td {
      margin: 0;
      padding: 0.35em 0.75em;
      text-align: left;
      border: 1px solid #ccc;
    }

    table tr th :first-child,
    table tr td :first-child {
      margin-top: 0;
    }
    table tr th :last-child,
    table tr td :last-child {
      margin-bottom: 0;
    }
  }
`;
