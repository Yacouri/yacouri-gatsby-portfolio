import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import { ArticleContainer } from "./style";
import { SEO } from "../components/SEO";

const ArticleDetails = ({ data }) => {
  const { html } = data.markdownRemark;
  const { title, date, slug, featuredImg, readingTime } =
    data.markdownRemark.frontmatter;
  console.log(featuredImg.childImageSharp.fluid.src);
  return (
    <Layout>
      {/* <SEO title={title}/> */}
      <ArticleContainer>
        <div className="back-link">
          <Link to="/blog">
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Back to articles</span>
          </Link>
        </div>
        <img
          src={featuredImg.childImageSharp.fluid.src}
          alt={slug}
          className="featured-img"
        />
        <p className="above-title">Title</p>
        <h1 className="article-title">{title}</h1>
        <div className="article-time">
          <span>{date}</span>
          <span>-</span>
          <span>{readingTime}</span>
        </div>
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </ArticleContainer>
    </Layout>
  );
};

export default ArticleDetails;

export const query = graphql`
  query BlogPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        stack
        title
        date
        slug
        featuredImg {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        readingTime
      }
      html
    }
  }
`;
