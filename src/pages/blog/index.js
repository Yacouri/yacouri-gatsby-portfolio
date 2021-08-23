import React from "react";
import Layout from "../../components/Layout";
import { Container, Row, SectionInfo } from "../../global/style";
import ReadingBook from "../../images/reading-book.png";
import { ShowArticles } from "../../components/Blog/style";
import { Link } from "gatsby";

const Index = () => {
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
    </Layout>
  );
};

export default Index;
