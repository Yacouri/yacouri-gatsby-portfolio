import React from "react";
import Layout from "../../components/Layout";
import { Container, Row, SectionInfo } from "../../global/style";
import ReadingBook from "../../images/reading-book.png";
import { ArticlesWrapper, ShowArticles } from "../../components/Blog/style";
import { graphql, Link } from "gatsby";
import { Line, Title } from "../../components/PageTitle/style";
import { colors } from "../../global/colors";
import Article from "../../components/Blog/Article";
import Rectangles from "../../images/3d-rectangles.png";

const Index = ({ data }) => {
  console.log(data)
  const articles = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <Container>
        <section>
          <Row gap100>
            <SectionInfo>
              <img src={ReadingBook} alt="Yacouri blog" />
            </SectionInfo>
            <SectionInfo>
              <h2 className="title">Blog</h2>
              <p className="caption">
                Sometimes i write Articles and Stories <br />
                about my routine, coding, design etc ...
              </p>
              <ShowArticles>
                <Link to="#articles">Click to see articles</Link>
              </ShowArticles>
            </SectionInfo>
          </Row>
        </section>
      </Container>
      <div id="articles">
        <Line bgColor={colors.primary} center />
        <Title center>Articles</Title>
        <ArticlesWrapper>
          {
            articles.map(({frontmatter, index}) =>(
              <Article
                key={index}
                img={frontmatter.thumb.childImageSharp.fluid.src}
                title={frontmatter.title}
                date={frontmatter.date}
                readingTime={frontmatter.readingTime}
                url={frontmatter.slug}
              />
            ))
          }
        </ArticlesWrapper>
      </div>
    </Layout>
  );
};

export default Index;

export const query = graphql`
query BlogPage {
  allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
    nodes {
      html
      frontmatter {
        slug
        stack
        title
        readingTime
        date
        thumb {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
}
`;
